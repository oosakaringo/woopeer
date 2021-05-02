const a_ripple = document.querySelectorAll(".ripple");
const c_supportTouch = "ontouchend" in document;
const c_touchStart = c_supportTouch ? "touchstart" : "mousedown";
const c_touchEnd = c_supportTouch ? "touchend" : "mouseup";
let v_tabIndex = 0;
var f_rippleIn = function (e) {
  this.classList.remove("ripple-activation", "ripple-focused", "ripple-deactivation");
  var e_rippleRect = this.getBoundingClientRect();
  var v_rippleSize = e_rippleRect.width;
  if (v_rippleSize < e_rippleRect.height) {
    v_rippleSize = e_rippleRect.height;
  }
  v_rippleSize = Math.floor(v_rippleSize * 0.6);
  var v_rippleScale = Math.sqrt(Math.pow(e_rippleRect.width, 2) + Math.pow(e_rippleRect.height, 2)) / v_rippleSize;
  var v_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var start_x = e.pageX - e_rippleRect.left - v_rippleSize / 2;
  var start_y = e.pageY - e_rippleRect.top - v_rippleSize / 2 - v_scrollTop;
  var end_x = e_rippleRect.width / 2 - v_rippleSize / 2;
  var end_y = e_rippleRect.height / 2 - v_rippleSize / 2;
  this.style.cssText = "--ripple-size:" + v_rippleSize + "px;--ripple-scale:" + v_rippleScale + ";--ripple-translate-start:" + start_x + "px," + start_y + "px;--ripple-translate-end:" + end_x + "px," + end_y + "px;";
  this.classList.add("ripple-activation", "ripple-focused");
  var a_focused = document.querySelectorAll(".ripple-focused:not(.ripple-activation)");
  a_focused.forEach(function (e) {
    e.classList.remove("ripple-focused", "ripple-activation", "ripple-deactivation");
  });
  this.v_animationFlg = 1;
  setTimeout(function () {
    this.v_animationFlg = 0;
  }, 225);
  return false;
};
var f_rippleFocused = function () {
  var e_ripple = document.querySelector(".ripple-activation");
  if (e_ripple) {
    if (e_ripple.v_animationFlg) {
      setTimeout(function () {
        f_rippleEnd(e_ripple);
      }, 225);
    } else {
      f_rippleEnd(e_ripple);
    }
  }
  return false;
};

function f_rippleEnd(e) {
  e.classList.add("ripple-deactivation");
  e.classList.remove("ripple-activation");
  setTimeout(function () {
    e.classList.remove("ripple-deactivation");
  }, 150);
}
var f_rippleOut = function () {
  this.classList.remove("ripple-focused", "ripple-activation", "ripple-deactivation");
  return false;
};
a_ripple.forEach(function (e) {
  e.v_animationFlg = 0;
  if (e.tabIndex >= 0) {
    v_tabIndex = e.tabIndex + 1;
  } else {
    e.tabIndex = v_tabIndex;
  }
  e.addEventListener(c_touchStart, f_rippleIn, false);
  e.addEventListener("blur", f_rippleOut, false);
});
document.addEventListener(c_touchEnd, f_rippleFocused, false);
