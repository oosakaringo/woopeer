// JavaScript Document
var a_fpga={"title_01":"TUL社 FPGAボード製品一覧","title_02":"Xilinx対応 FPGAボード",content:[{"title":"ZYNQ®対応 FPGAボード",content:[{"name":"PYNQ™-Z2仕様","img":"PYNQ-Z2.jpg","link":"/product_detail/6687/","text":"PYNQ™-Z2は、PYNQ™プロジェクトをサポートするFPGA小型評価ボードです。初代モデルのPYNQ™-Z1から、Raspberry Piコネクタや、アナログ・デバイセズ社のオーディオ・コーデック(ADAU1761)などが追加されています。"}]},{"title":"Kintex® UltraScale™対応 FPGAボード",content:[{"name":"TUL KU115","img":"TUL_KU115.jpg","link":"/product_detail/6740/","text":"TUL社のFPGA PCIeアクセラレータカードは、データセンターアプリケーション向けのプログラマブルアクセラレータとしてザイリンクス社のFPGAを使用します。<br>このカードは2つのQSFP28コネクタで40Gbイーサネットに対応したKintex® UltraScale™ KU115で構成されています。"}]},{"title":"Virtex® UltraScale™+対応 FPGAボード",content:[{"name":"【BTU9P】 FPGAアクセラレータ（ Water Cooling Edition）","img":"BTU9P.png","link":"/product_detail/8436/","text":"ザイリンクスのVirtex® UltraScale+ PCIeアクセラレータボードであるBTU9Pは、機械学習、データ分析、データマイニング、ブロックチェーンアプリケーション、ビデオ処理などの計算集約型アプリケーションを高速化するように設計されています。コンフィギュレーションオプションには、 Micro-AB USB JTAG コンフィグレーションポート (FT4232HQ U65ブリッジ)があります。"}]}]};
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