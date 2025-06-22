// JavaScript Document
var a_fpga={"title_01":"IOxOS社 FPGAボード製品一覧","title_02":"Xilinx対応 FPGAボード",content:[{"title":"Kintex® UltraScale™対応 FPGAボード",content:[{"name":"IFC_1410","img":"IFC_1410.jpg","link":"/product_detail/6677/","text":"IFC_1410 は、HPCVITA57.1 準拠の2 つのFMC スロットを搭載したミッドサイズ（4HP）のダブ幅MTCA.4 準拠のAMC ユニットです。"},{"name":"IFC_1420","img":"IFC_1420.jpg","link":"/product_detail/6640/","text":"IFC_1420は、ミッドサイズ（4HP）のダブル幅MTCA.4 準拠のAMCユニットで、データ収集機能とHPC VITA57.1準拠のFMC スロットを搭載しています。"},{"name":"IFC_1211","img":"IFC_1211.jpg","link":"/product_detail/6659/","text":"IFC_1211は、FPGAとVITA 42.3 XMC、PMC、VITA57.1 FMC拡張スロットを備えた、柔軟な6UのVME64xベースのFPGAボードです。"}]},{"title":"Xilinx Artix-7対応 FPGAボード",content:[{"name":"PEV_7912","img":"PEV_7912.jpg","link":"/product_detail/6660/","text":"PEV_7912は拡張機能を備え、最新のPCI-SIGの「PCI Express外部ケーブル仕様」に完全準拠したXilinx Artix-7 FPGA搭載の6U VME64x PCI Express-VMEブリッジボードです。<br>オンボードのPCI Expressバスインフラストラクチャを拡張し、銅線と光ファイバー標準ケーブルの両方を使用してVMEクレートの境界を越えることができます。"},{"name":"VDC_7920","img":"VDC_7920.jpg","link":"/product_detail/6636/","text":"VDC_7920は、 Xilinx Artix-7を搭載し、拡張機能を備えた6U VME64xデュアルPMC / XMCキャリアボードです。PCI Express GEN2およびSATA接続を介して最大4つのPMC / XMCスロットと、追加のストレージメディアを制御できます。独自のALTHEA 7910ソリューション、PCI Express to VME64xブリッジを搭載しており、コスト、性能、消費電力面で極めて競争力のあるCOTSを提供します。"}]}]};
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
<a href="https://www.fsi-embedded.jp`+a_itemsItems[v_ii].link+`" class="disp-block bg-white ripple-white ripple" target="_blank" rel="noopener">
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