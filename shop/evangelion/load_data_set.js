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
let v_navHtml = '<ul class="nav-list css-swip max-w"><li><a href="/shop/evangelion/" class="ripple top-icon"><img src="img/top_icon.png" alt="top_logo"></a></li>';
for (var v_i = 0; v_i < v_navAll; v_i++) {
  v_navHtml += '<li><a href="/shop/evangelion/' + a_nav[v_i].link + '.html" class="btn ripple">' + a_nav[v_i].title + '</a></li>';
}
v_navHtml += '</ul>';
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('header-nav').innerHTML = v_navHtml;
});

function f_loadDataSet() {
  if (!a_loadJson || !document.getElementById('result')) {
    return;
  }
  const v_loadAll = a_loadJson.length;
  const v_resultHtml = '';
  const e_result = document.getElementById('result');
  const a_httpObj = new Array();
  const a_loadData = new Array();
  const v_fistSetNo = 8;
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
          f_setItems02();
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
      var v_html = '<section class="pl10 pr10"><h1 class="ff-serif mt10 mb05">' + a_loadData[v_setName].title + '</h1><div class="bg-white css-swip shadow-lv1">';
      var v_all = a_loadData[v_setName].items.length;
      if(v_all>v_fistSetNo){
        v_all=v_fistSetNo;
      }
      for (var v_ii = 0; v_ii < v_all; v_ii++) {
        v_html += '<div goods-no="'+(v_ii+1)+'" class="mg05 ripple ripple-white">' + a_loadData[v_setName].items[v_ii] + '</div>';
      }
      v_html += '</div></section>';
      e_result.innerHTML += v_html;
    }
  }
  function f_setItems02() {
    for (var v_i = 0; v_i < v_loadAll; v_i++) {
      var v_setName = a_loadJson[v_i];
      var v_html = '';
      var v_all = a_loadData[v_setName].items.length;
      if(v_all > v_fistSetNo){
        for (var v_ii = v_fistSetNo; v_ii < v_all; v_ii++) {
          v_html += '<div goods-no="'+(v_ii+1)+'" class="mg05 ripple ripple-white">' + a_loadData[v_setName].items[v_ii] + '</div>';
        }
        document.querySelector("#result section:nth-child("+(v_i+1)+") .css-swip").insertAdjacentHTML('beforeend', v_html);
      }
    }
    var e_resultImg=e_result.querySelectorAll('img');
    var v_resultImgAll=e_resultImg.length;
    for(var v_i=0;v_i<v_resultImgAll;v_i++){
      e_resultImg[v_i].setAttribute('loading', 'lazy');
      e_resultImg[v_i].setAttribute('alt', '');
    }
    f_rippleStart();
  }
}
