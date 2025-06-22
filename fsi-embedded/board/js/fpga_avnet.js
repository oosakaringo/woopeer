// JavaScript Document
var a_fpga={"title":"AVNET社 FPGAボード製品一覧",content:[{"title":"Xilinx対応 FPGAボード",content:[{"name":"EK-U1-VCU108-G-J","img":"714f0d53236db24f760fbc1af30549f7.jpg","link":"/product_detail/10342/","text":"Virtex UltraScale FPGA VCU108 評価キットは、Virtex UltraScale デバイスで達成できるかつてないレベルの性能、システム統合、および帯域幅を評価するための完全開発環境です。"},{"name":"EK-U1-KCU116-G-J","img":"2352175b99caeeb15d90e0f636253fe5.jpg","link":"/product_detail/10347/","text":"Kintex UltraScale+ FPGA KCU116 評価キットは、Kintex UltraScale+ の機能、特に Kintex クラス アーキテクチャの 28Gbps トランシーバーの性能を評価するのに最適です。"},{"name":"EK-Z7-ZC706-G-J","img":"f94fb147d660f7f757665349405e32b1.jpg","link":"/product_detail/10351/","text":"Zynq-7000 SoC ZC706 評価キットは、ハードウェア、デザイン ツール、IP、検証済みリファレンス デザイン (ターゲット デザインを含む) の基本コンポーネントをすべて揃え、完全なエンベデッド プロセッシング プラットフォームと PCIe を含むトランシーバーベースデザインを可能にします。"},{"name":"EK-U1-KCU105-G-J","img":"b7bcdd4e4e5f1aea1e93a6cada202c69.jpg","link":"/product_detail/10355/","text":"Kintex UltraScale FPGA KCU105評価キットは、最先端のKintex UltraScale All Programmable FPGAを評価するための完璧な開発環境です。"},{"name":"EK-Z7-ZC702-G-J","img":"d2c8549bb52437831f185976542701ac.jpg","link":"/product_detail/10359/","text":"Zynq®-7000 SoC ZC702 評価キットは、ハードウェア、デザイン ツール、IP、検証済みリファレンス デザイン (ターゲット デザインを含む) の基本コンポーネントをすべて揃えた完全なエンベデッド プロセッシング プラットフォームです。"},{"name":"EK-U1-ZCU102-G-J","img":"c91704ec0e94c2728b87f8083964e80d.jpg","link":"/product_detail/10363/","text":"ZCU102 評価キットでは、オートモーティブ、産業、ビデオ、および通信アプリケーション向けデザインを素早く完成させることが可能です。"},{"name":"DK-U1-VCU110-G-J","img":"692dfa998f28b430311f47cc538b9cde.jpg","link":"/product_detail/10367/","text":"Virtex UltraScale FPGA VCU110 開発キットは、Virtex UltraScale デバイスで達成できるかつてないレベルの性能、システム統、および帯域幅を評価するための完全開発環境です。"},{"name":"EK-U1-VCU118-G-J","img":"66c4b76b8e2907e04713e90ac01c6bdf.jpg","link":"/product_detail/10371/","text":"Virtex UltraScale+ FPGA VCU118 評価キットは、最先端の Virtex UltraScale+ FPGA の評価に最適な開発環境です。"},{"name":"EK-U1-ZCU104-G-J","img":"3d0e3850dbd5efe3e035215f105061e3.jpg","link":"/product_detail/10375/","text":"ZCU104 評価キットを利用すると、監視システム、先進運転支援システム (ADAS)、マシン ビジョン、Augmented Reality (AR)、ドローン、医療画像のような、エンベデッド ビジョン アプリケーション向けの設計を今すぐに始められます。"},{"name":"CK-U1-VCU1287-G-J","img":"370ea7f92b8b3aca7893ff76d584f0fa.jpg","link":"/product_detail/10379/","text":"VCU1287特性評価キットは、Virtex UltraScale XCVU095-FFVB2104E FPGAで利用可能な32 GTH（16 Gbps）および32 GTY（30 Gbps）トランシーバーの特性評価および評価に必要なすべてを提供します。"},{"name":"EK-U1-ZCU106-G-J","img":"0e7a70e39a9e9b8808e35f92d94b9297.jpg","link":"/product_detail/10382/","text":"ZCU106評価キットを使用すると、設計者はビデオ会議、監視、高度運転支援システム（ADAS）、ストリーミングおよびエンコードアプリケーションの設計をすぐに開始できます。"},{"name":"EK-U1-ZCU111-G-J","img":"6f3dc5d108d8e3c30b2d089dacb17335-1.jpg","link":"/product_detail/10386/","text":"Zynq UltraScale+ RFSoC ZCU111 評価キットでは、ワイヤレス、ケーブル アクセス、早期警戒機 (EW)/レーダー、そのほか高性能 RF アプリケーションに対応する RF クラスのアナログ設計を今すぐ開始できます。"}]}]};
var v_html=`
<section class="mb20">
<div class="bg-color_tertiary-container">
<h2 class="pd10 mb0 text-center">`+a_fpga.title+`</h2>
`;

var a_items=a_fpga.content;
var v_itemsAll=a_items.length;
for(var v_i=0;v_i<v_itemsAll;v_i++){
  var a_itemsItems=a_items[v_i];
  v_html+=`
<h3 class="text-center pl10 pr10 mt0">`+a_itemsItems.title+`</h3>
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