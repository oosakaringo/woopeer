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
let v_navHtml = '<ul class="nav-list css-swip max-w"><li><a href="/shop/evangelion/" class="ripple ripple-white top-icon"><img src="img/top_icon.png" alt="top_logo" width="50px" height="50px"></a></li>';
for (var v_i = 0; v_i < v_navAll; v_i++) {
  v_navHtml += '<li><a href="/shop/evangelion/' + a_nav[v_i].link + '.html" class="btn ripple ripple-white">' + a_nav[v_i].title + '</a></li>';
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
      var v_html = '<section class="pl10 pr10"><h1 class="ff-serif mt10 mb05">' + a_loadData[v_setName].title + '</h1><div class="bg-white css-swip shadow-lv1">';
      var v_all = a_loadData[v_setName].items.length;
      for (var v_ii = 0; v_ii < v_all; v_ii++) {
        if(v_ii<v_fistSetNo){
          v_html += '<div goods-no="'+(v_ii+1)+'" class="mg05 ripple ripple-white js-item">' + a_loadData[v_setName].items[v_ii] + '</div>';
        }else{
          v_html += '<div goods-no="'+(v_ii+1)+'" class="mg05 ripple ripple-white js-item"><div class="dummy-img"></div></div>';
        }
      }
      v_html += '</div></section>';
      e_result.innerHTML += v_html;
      f_setImgRender(e_result,0);
    }
    setTimeout(f_setItems02,1000);
  }
  function f_setItems02() {
    for (var v_i = 0; v_i < v_loadAll; v_i++) {
      var v_setName = a_loadJson[v_i];
      var e_setItems02=document.querySelector("#result section:nth-child("+(v_i+1)+") .css-swip");
      var v_html = '';
      var v_all = a_loadData[v_setName].items.length;
      if(v_all > v_fistSetNo){
        for (var v_ii = v_fistSetNo; v_ii < v_all; v_ii++) {
          e_setItems02.querySelector(".js-item:nth-child("+(v_ii+1)+")").innerHTML=a_loadData[v_setName].items[v_ii];
        }
        f_setImgRender(e_result,v_fistSetNo);
      }
    }
    f_rippleStart();
  }
  function f_setImgRender(e, v_st){
    var e_img=e.querySelectorAll('img');
    var v_imgAll=e_img.length;
    for(var v_i=v_st;v_i<v_imgAll;v_i++){
      e_img[v_i].setAttribute('loading', 'lazy');
      if(e_img[v_i].getAttribute("width")==1){
        e_img[v_i].setAttribute('height', '0px');
      }else{
        e_img[v_i].setAttribute('width', '180px');
        e_img[v_i].setAttribute('height', '250px');
        e_img[v_i].classList.add('goods-img');
      }
      e_img[v_i].setAttribute('alt', '');
    }
    var e_href=e.querySelectorAll('a');
    var v_hrefAll=e_href.length;
    for(var v_i=v_st;v_i<v_hrefAll;v_i++){
      e_href[v_i].setAttribute('aria-label', '商品ページへ');
      e_href[v_i].setAttribute('rel', 'noopener');
    }
  }
}
/*GA読み込み*/
var j_GA = document.createElement('script');
j_GA.src = "https://www.googletagmanager.com/gtag/js?id=G-R3P7D3FQPJ";
document.head.appendChild(j_GA);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R3P7D3FQPJ');
