/*プリロード*/
var e_preloadShopStylesheet = document.createElement("link");
e_preloadShopStylesheet.rel = 'preload';
e_preloadShopStylesheet.href = 'evangelion_shop.css';
e_preloadShopStylesheet.as = 'style';
document.head.appendChild(e_preloadShopStylesheet);

/*SEOあと読み対策*/
let v_loadDeferred = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com"><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@900&amp;display=swap">';

var e_noscript = document.createElement("noscript");
e_noscript.id='deferred-content';
e_noscript.innerHTML=v_loadDeferred;
document.head.appendChild(e_noscript);

var loadDeferredContent = function() {
  var addStylesNode = document.getElementById("deferred-content");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.innerHTML;
  document.body.appendChild(replacement);
  addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
if (raf) raf(function() { window.setTimeout(loadDeferredContent, 0); });
 else window.addEventListener('load', loadDeferredContent);


/*GA読み込み*/
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R3P7D3FQPJ');

const a_nav = [{
    link: "comic",
    title: "comic"
  },
  {
    link: "music",
    title: "CD/DVD"
  },
  {
    link: "goods01",
    title: "figure"
  },
  {
    link: "goods",
    title: "goods"
  },
  {
    link: "fashion",
    title: "fashion"
  },
];
const v_navAll = a_nav.length;
let v_navHtml = '<ul class="nav-list css-swip max-w"><li><a href="/shop/evangelion/" class="ripple ripple-white top-icon"><img src="img/top_icon.png" alt="top_logo" width="50" height="50"></a></li>';
for (var v_i = 0; v_i < v_navAll; v_i++) {
  v_navHtml += '<li><a href="/shop/evangelion/' + a_nav[v_i].link + '.html" class="btn ripple ripple-white">' + a_nav[v_i].title + '</a></li>';
}
v_navHtml += '</ul>';
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('header-nav').innerHTML = v_navHtml;
});
const d_now=new Date();
const v_year=d_now.getUTCFullYear();
const v_footerHtml='<footer class="bg-black color-white text-center pd10 ff-serif mt20"><span class="logo">'+v_year+' evangelion SHOP</span></footer>';
function f_loadDataSet() {
  if (!a_loadJson || !document.getElementById('result')) {
    return;
  }
  const v_loadAll = a_loadJson.length;
  const v_resultHtml = '';
  const e_result = document.getElementById('result');
  const a_httpObj = new Array();
  const a_loadData = new Array();
  const v_fistSetNo = 3;
  let v_loaedAll = 0;
  for (var v_i = 0; v_i < v_loadAll; v_i++) {
    let v_json = a_loadJson[v_i];
    var v_loadUrl = "/shop/evangelion/data/" + v_json + ".json";
    a_httpObj[v_i] = new XMLHttpRequest();
    a_httpObj[v_i].onreadystatechange = function () {
      if ((this.readyState === 4) && (this.status === 200)) {
        var a_data = JSON.parse(this.responseText);
        a_loadData[a_data.name] = a_data;
        v_loaedAll++;
        if (v_loaedAll == v_loadAll) {
          f_setItems01();
        }
      }
    }
    a_httpObj[v_i].open("get", v_loadUrl, true);
    a_httpObj[v_i].setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    a_httpObj[v_i].send(null);
  }

  function f_setItems01() {
    for (var v_i = 0; v_i < v_loadAll; v_i++) {
      var v_setName = a_loadJson[v_i];
      var v_html = '<section class="pl10 pr10"><h1 class="ff-serif mt10 mb05">' + a_loadData[v_setName].title + '</h1><div class="bg-white css-swip css-not-swip shadow-lv1 js-items">';
      var v_all = a_loadData[v_setName].items.length;
      for (var v_ii = 0; v_ii < v_all; v_ii++) {
        if(v_i==0 && v_ii<v_fistSetNo){
          v_html += '<div goods-no="'+(v_ii+1)+'" class="mg05 ripple ripple-white js-item">' + a_loadData[v_setName].items[v_ii] + '</div>';
        }else{
          v_html += '<div goods-no="'+(v_ii+1)+'" class="mg05 ripple ripple-white js-item"><div class="dummy-img"></div></div>';
        }
      }
      v_html += '</div></section>';
      e_result.innerHTML += v_html;
      f_setImgRender(e_result);
    }
    setTimeout(f_setItems02,2000);
    let e_main=document.getElementsByTagName("main")[0];
    e_main.insertAdjacentHTML('afterend',v_footerHtml);
  }
  function f_setItems02() {
    for (var v_i = 0; v_i < v_loadAll; v_i++) {
      var v_setName = a_loadJson[v_i];
      var e_setItems02=document.querySelector("#result section:nth-child("+(v_i+1)+") .js-items");
      var v_html = '';
      var v_all = a_loadData[v_setName].items.length;
      var v_st = 0;
      if(v_i==0){
        v_st=v_fistSetNo;
      }
      for (var v_ii = v_st; v_ii < v_all; v_ii++) {
        e_setItems02.querySelector(".js-item:nth-child("+(v_ii+1)+")").innerHTML=a_loadData[v_setName].items[v_ii];
      }
      f_setImgRender(e_result);
      setTimeout(f_reSwip,4000);
    }
    f_rippleStart();
  }
  function f_reSwip(){
    document.querySelector(".css-not-swip").classList.remove("css-not-swip");
  }
  function f_setImgRender(e){
    var e_img=e.querySelectorAll('img');
    var v_imgAll=e_img.length;
    for(var v_i=0;v_i<v_imgAll;v_i++){
      e_img[v_i].setAttribute('loading', 'lazy');
      if(e_img[v_i].getAttribute("width")==1){
        e_img[v_i].setAttribute('height', '0px');
      }else{
        e_img[v_i].setAttribute('width', '250');
        e_img[v_i].setAttribute('height', '250');
        e_img[v_i].classList.add('goods-img');
      }
      e_img[v_i].setAttribute('alt', '');
    }
    var e_href=e.querySelectorAll('a');
    var v_hrefAll=e_href.length;
    for(var v_i=0;v_i<v_hrefAll;v_i++){
      e_href[v_i].setAttribute('aria-label', '商品ページへ');
      e_href[v_i].setAttribute('rel', 'noopener');
    }
  }
}