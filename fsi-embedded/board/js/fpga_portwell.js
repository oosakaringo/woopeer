// JavaScript Document
var a_fpga={"title_01":"ポートウェルジャパン社 FPGAボード製品一覧","title_02":"Intel対応 FPGAボード",content:[{"title":"Arria® 対応 FPGAボード",content:[{"name":"MIES-XHN5A10","img":"MIES-XHN5A10.png","link":"/product_detail/7578/","text":"Arria ® 10 GX 1150、DDR4 SDRAM 16GBを搭載したアクセラレーションカードです。<br>ラックマウントシステムに実装するために、68mm x 200mmのコンパクトな設計です。<br>PCIex8カードとして使用するだけでなく、スタンドアロンとしても使用できます。"},{"name":"MIES-XHN5A10-NIC","img":"MIES-XH5A10-NIC.png","link":"/product_detail/7583/","text":"Arria ® 10 GX 1150、DDR4 SDRAM 16GBを搭載したアクセラレーションカードです。<br>ラックマウントシステムに実装するために、68mm x 168mmのコンパクトな設計です。"}]}]};
var v_html=`
<section class="mb20">
<div class="bg-color_tertiary-container">
<h2 class="pd10 mb0 text-center">`+a_fpga.title_01+`</h2>
<h3 class="pl10 pr10 mt0 text-center">`+a_fpga.title_02+`</h3>
`;
var a_items=a_fpga.content;
var v_itemsAll=a_items.length;
for(var v_i=0;v_i<v_itemsAll;v_i++){
  var a_itemsItems=a_items[v_i];
  v_html+=`
<h4 class="bg-color_secondary color-white text-center pl10 pr10 mb0 ml05 mr05">`+a_itemsItems.title+`</h4>
<div class="pd05 flex flex-wrap sp1 pc4">
`;
  var a_itemsItems=a_items[v_i].content;
  var v_itemsItemsAll=a_itemsItems.length;
  for(var v_ii=0;v_ii<v_itemsItemsAll;v_ii++){
    v_html+=`
<a href="https://www.fsi-embedded.jp`+a_itemsItems[v_ii].link+`" class="disp-block bg-white ripple ripple-white" target="_blank" rel="noopener">
<div class="text-center"><img src="../board/img/`+a_itemsItems[v_ii].img+`" width="244" height="144" alt="" loading="lazy"></div>
<p class="text-center pl05 pr05 fb">`+a_itemsItems[v_ii].name+`</p>
<p class="pl05 pr05 small">`+a_itemsItems[v_ii].text+`</p>
</a>
`;
  }
  v_html+="</div>";
}
v_html+="</div></section>";
document.body.insertAdjacentHTML("beforeend",v_html);