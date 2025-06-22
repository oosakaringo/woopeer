// JavaScript Document
var a_headItems01=[{"name":"エッジAIコンサルテーション","link":"https://www.fsi-embedded.jp/product/fsi/edge-ai-consultation/"},{"name":"Stereo Vision IP Suite（販売終了）","link":"https://www.fsi-embedded.jp/product/fsi/stereo-vision/"},{"name":"AUTOSAR 開発体験キット","link":"https://www.fsi-embedded.jp/product/fsi/adtk/"},{"name":"+F FS040U","link":"https://www.fsi-embedded.jp/product/fsi/fsmobile/"},{"name":"Androidソリューション","link":"https://www.fsi-embedded.jp/product/fsi/android_solution/"},{"name":"MISSION","link":"http://www.fsi.co.jp/project/e/products/mission/index.html?_ga=2.41431714.1016544420.1496629140-797837237.1477369883"},{"name":"FS KAREN","link":"http://www.fsi.co.jp/project/e/products/karen/index.html?_ga=2.16610998.1016544420.1496629140-797837237.1477369883"}];
var a_headItems02=[{"name":"富士ソフト","link":"/product/fsi/"},{"name":"AVAL DATA","link":"/product/aval-data/"},{"name":"Avery Design Systems","link":"/product/avery-design-systems/"},{"name":"BittWare","link":"/product/bittware/"},{"name":"COMCORES","link":"/product/comcores/"},{"name":"Crucial IP","link":"/product/crucial-ip/"},{"name":"DAVE Embedded Systems","link":"/product/dave-embedded-systems/"},{"name":"DELL EMC","link":"/product/dell-emc/"},{"name":"Digital Core Design","link":"/product/digital-core-design/"},{"name":"HiTech Global","link":"/product/hitech-global/"},{"name":"IntelliProp","link":"/product/intelliprop/"},{"name":"IOxOS","link":"/product/ioxos/"},{"name":"IPCLOCK","link":"/product/ipclock/"},{"name":"MACNICA","link":"/product/macnica/"},{"name":"Microtronix","link":"/product/microtronix/"},{"name":"Mixel","link":"/product/mixel/"},{"name":"NDR","link":"/product/ndr/"},{"name":"NECプラットフォームズ","link":"/product/nec-platforms/"},{"name":"NORTHWEST LOGIC","link":"/product/northwest-logic/"},{"name":"PathPartner","link":"/product/pathpartner/"},{"name":"BlackBerry QNX","link":"/product/qnx/"},{"name":"System-On-Chip","link":"/product/system-on-chip/"},{"name":"TES Electronic Solutions","link":"/product/tes-electronic-solutions/"},{"name":"TUL","link":"/product/tul/"},{"name":"YUAN","link":"/product/yuan/"},{"name":"画像技研","link":"/product/gazou-giken/"},{"name":"ギズモインターナショナル","link":"/product/gizmo/"},{"name":"高度圧縮技術研究所","link":"/product/isct/"},{"name":"長瀬産業","link":"/product/nagase-sangyo/"},{"name":"ニューテック","link":"/product/newtech/"},{"name":"ポートウェルジャパン","link":"/product/portwell/"},{"name":"ECS","link":"/product/ecs/"},{"name":"SIKUR","link":"/product/sikur/"},{"name":"Bluespec","link":"/product/bluespec/"},{"name":"ARBOR Technology","link":"/product/arbor/"},{"name":"MiTAC Computing Technology","link":"/product/mitac/"},{"name":"Micro-Star International","link":"/product/msi/"},{"name":"Embedian","link":"/product/embedian/"},{"name":"Hardent","link":"/product/hardent/"},{"name":"SECO","link":"/product/seco/"},{"name":"Veridify Security","link":"/product/veridify-security/"},{"name":"Rambus","link":"/product/rambus/"},{"name":"Dolphin","link":"/product/dolphin/"},{"name":"Andes Technology","link":"/product/andes-technology/"},{"name":"Kontron","link":"/product/kontron/"},{"name":"SolidRun Ltd.","link":"/product/solidrun/"},{"name":"AVNET","link":"/product/avnet/"}];
function f_setItems(a_items){
  var v_all=a_items.length;
  var v_html="";
  for(var v_i=0;v_i<v_all;v_i++){
    v_html+='<li><a href="'+a_items[v_i].link+'" target="_blank" rel="noopener" class="pt05 pb05 under_link">'+a_items[v_i].name+'</a></li>';
  }
  return v_html;
}
var v_html=`
<header class="bg-white pl10 pr10 pos-sticky-top cam-border-bottom border-color_primary">
  <div class="max-w pos-relative"> <a href="http://www.fsi.co.jp/" target="_blank" rel="noopener" class="flex"> <img src="../img/logo-group.png" alt="FUJISOFT" width="210" height="62" class="logo-group w20"> </a>
    <div class="flex flex-jc-between flex-ai-center"> <a href="/" class="logo-site ripple">
      <picture>
        <source media="(min-width:768px)" srcset="../img/logo-site.png" width="1006" height="120">
        <img src="../img/logo-site.svg" alt="富士ソフト 組み込み開発" width="300" height="61" class="mb05 mt05 w100"> </picture>
      </a>
      <ul class="flex flex-jc-between mt0 mb05 ml05 pd0 w40 small pc-disp-none">
        <li> <a href="https://www.fsi-embedded.jp/contact/?contact_type=normal" class="btn-icon ripple ripple-white">
          <svg class="emoticons fill-primary" viewBox="0 0 24 24">
            <use xlink:href="#mail-svg"></use>
          </svg>
          メール</a></li>
        <li> <a href="https://www.fsi-embedded.jp/board/tel:0120593111" class="btn-icon ripple ripple-white">
          <svg class="emoticons fill-primary" viewBox="0 0 24 24">
            <use xlink:href="#mobile-svg"></use>
          </svg>
          電話</a></li>
        <li> <span class="btn-icon js-op_menu ripple ripple-white hamburger">
          <svg class="emoticons fill-primary" viewBox="0 0 24 24">
            <use xlink:href="#hamburger-svg"></use>
          </svg>
          <span class="hamburger-text">メニュー</span></span></li>
      </ul>
    </div>
    <nav class="op-nav move">
      <p class="fb text-center font-ll pc-disp-none">FSI Embedded</p>
      <ul class="pl0 mg0 pc-flex flex-jc-between flex-ai-center pc-top-menu">
        <li><a href="/technology/" target="_blank" rel="noopener" class="flex flex-ai-center pc-jc-center"><span class="bg-color_primary color-white flex font-xl mr05 pc-disp-none">
          <svg viewBox="0 0 24 24">
            <use xlink:href="#next-svg"></use>
          </svg>
          </span>組み込み開発力</a></li>
        <li>
          <dl class="mg0 hover-op">
            <dt class="hover-op-btn flex flex-ai-center pc-jc-center"> <span class="bg-color_primary color-white flex font-xl mr05 js-op-content pc-disp-none">
              <svg viewBox="0 0 24 24">
                <use xlink:href="#add-svg"></use>
              </svg>
              </span> <a href="/product/" target="_blank" rel="noopener">組み込み製品情報</a> </dt>
            <dd class="ml20 op-content pc-hover-op-content move">
              <div class="max-w w100 pc-flex">
                <dl class="mg0">
                  <dt class="hover-op-btn flex flex-ai-center"><span class="bg-color_primary color-white flex font-xl mr05 js-op-content pc-disp-none">
                    <svg viewBox="0 0 24 24">
                      <use xlink:href="#add-svg"></use>
                    </svg>
                    </span><a href="/product/fsi/" target="_blank" rel="noopener" class="pt05 pb05 under_link">富士ソフト製品から探す</a></dt>
                  <dd class="op-content">
                    <ul class="pl0 pc-block-wrp">`+f_setItems(a_headItems01)+`</ul>
                  </dd>
                </dl>
                <dl class="mg0">
                  <dt class="hover-op-btn flex flex-ai-center"><span class="bg-color_primary color-white flex font-xl mr05 js-op-content pc-disp-none">
                    <svg viewBox="0 0 24 24">
                      <use xlink:href="#add-svg"></use>
                    </svg>
                    </span><a href="/product_list/maker/" target="_blank" rel="noopener" class="pt05 pb05 under_link">メーカーから探す</a></dt>
                  <dd class="op-content">
                    <ul class="pl0 pc-list-wrp pc-flex flex-wrap">`+f_setItems(a_headItems02)+`</ul>
                  </dd>
                </dl>
              </div>
            </dd>
          </dl>
        </li>
        <li><a href="/results/" target="_blank" rel="noopener" class="flex flex-ai-center pc-jc-center"><span class="bg-color_primary color-white flex font-xl mr05 pc-disp-none">
          <svg viewBox="0 0 24 24">
            <use xlink:href="#next-svg"></use>
          </svg>
          </span>受託開発実績</a></li>
        <li><a href="/embedded_news/" target="_blank" rel="noopener" class="flex flex-ai-center pc-jc-center"><span class="bg-color_primary color-white flex font-xl mr05 pc-disp-none">
          <svg viewBox="0 0 24 24">
            <use xlink:href="#next-svg"></use>
          </svg>
          </span>組み込み業界情報</a></li>
        <li><a href="/news/" target="_blank" rel="noopener" class="flex flex-ai-center pc-jc-center"><span class="bg-color_primary color-white flex font-xl mr05 pc-disp-none">
          <svg viewBox="0 0 24 24">
            <use xlink:href="#next-svg"></use>
          </svg>
          </span>更新情報</a></li>
      </ul>
      <div class="sub-menu">
        <div class="max-w pc-flex flex-jc-end">
          <form action="https://www.fsi-embedded.jp/product_list/" target="_blank" rel="noopener" class="flex ">
            <input id="hamb_freeword" type="text" name="freeword" placeholder="製品検索" value="" class="w100">
            <button type="submit" class="btn bg-color_primary color-white font-l" aria-label="検索">
            <svg viewBox="0 0 24 24">
              <use xlink:href="#search-svg"></use>
            </svg>
            </button>
          </form>
          <a href="https://www.fsi-embedded.jp/contact/?contact_type=normal" class="btn bg-color_primary color-white ripple ripple-white fb sp-disp-none ml025" target="_blank" rel="noopener">
          <svg class="emoticons fill-primary" viewBox="0 0 24 24">
            <use xlink:href="#mail-svg"></use>
          </svg>
          お問い合わせ</a> <a href="https://www.fsi-embedded.jp/kumico/newsletter_member/" class="btn color-white bg-color_secondary ripple ripple-white fb sp-disp-none" target="_blank" rel="noopener">メルマガ会員登録</a> </div>
      </div>
      <div class="en-btn">
        <div class="max-w text-right"><a href="/en/product_list/category/industrial-pc/panel-pc/" class="btn btn-outlined color_primary ripple" target="_blank" rel="noopener">English</a></div>
      </div>
    </nav>
  </div>
</header>
`;
document.body.insertAdjacentHTML("beforeend",v_html);
var e_header=document.querySelector('header');
var e_pcHoverOpContent=document.querySelector('.pc-hover-op-content');
window.addEventListener('scroll', function(){
  e_pcHoverOpContent.style.top=(e_header.getBoundingClientRect().y+200)+"px";
});