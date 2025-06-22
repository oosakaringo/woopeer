// JavaScript Document
var v_html=`
<section class="pd10">
<div class="bg-color_primary-container">
<h2 class="cam-border-bottom border-color_primary pd10 mb0 text-center">評価ボードでFPGAの検証を<span class="disp-iblock">低価格（安価）に！</span></h2>
<p class="pd10 mt0">
ハードウェア（hardware）の仕様によって、開発要素は様々です。想定される性能や回路規模、外部とのインターフェースの種類や数などによっては、無数に広がります。<br>
そこで登場するのがFPGA評価ボードです。VHDLやVerilog-HDLといった言語を使用してプログラミングすることで、様々な回路構成や性能、回路の規模などを何度でも実際のハードウェア(HW)として試す（比較する）ことができます。つまり、プログラミングによって、簡単にハードウェア構成の修正や変更などを行いつつ、最適な回路構成を決めることができるのです。<br>
各種インターフェースの評価にもFPGAボードは活躍してくれます。FMCモジュールが使えるコネクタが付いていれば、使用するインターフェースのモジュールに付け変えるだけで各種インターフェースの評価が可能になります。<br>
このような、開発・評価段階での高い自由度は、それぞれの条件で評価用の試作機を設計・製作することを考えれば、結果的に価格に大幅なメリットをもたらします。更にそれのみならず、短時間での開発・評価が同時に実現できるわけです。このように、安いなど様々な種類のFPGAが選べて、かつ各種インターフェースのモジュールが使えるFPGA評価ボードは、開発・評価の価格や自由度、時間短縮において大きなメリットがあると言えます。<br>
Digilent Zybo Z7: Zynq-7000 ARM/FPGA SoC 開発ボード（development boards）、Artix-7 35T Arty FPGA評価キット（kit）&nbsp;、ZedBoard Zynq-7000評価ボード、Spartan-6評価ボードなどは安く購入することも可能です。
</p>
</div>
</section>
`;
v_html+=`
<section class="pd10">
<div class="bg-color_primary-container">
<h2 class="cam-border-bottom border-color_primary pd10 mb0 text-center">入門編としておすすめの<span class="disp-iblock">FPGA評価ボードとは</span></h2>
<p class="pd10 mt0">
FPGAボードとひとくちに言っても、専用のダウンロードケーブルやUSB端子の有無、専用のコンフィギュレーションソフトによりROMへ書き込むことができるかどうかなど、シリーズによっていろいろあります。<br>
FPGA評価ボードのメリットは、開発者が自分で何度でも自由に回路構成を書き込む（コンフィギュレーション＝ROMからFPGAに書き込む場合とPCからFPGAに書き込む場合がある）ことができ、かつそれを高速で動作させられることです。しかし、目的によっては性能よりもコスト（価格）を抑えるデザインにしたい、逆にとにかく高性能な回路構成をコンフィギュレーションして実現したいなど、様々な要求があります。また、非常に高速なインターフェースが必要な場合や、低速だがとにかくたくさんのインターフェースが必要な場合もあるかもしれません。結局、おすすめのFPGA評価ボードというのは、専用のダウンロードケーブルやUSB端子の有無以外にも個人の目的によって変わってきます。開発対象の仕様に沿ってインターフェースが対応できることや、全体的な回路規模を想定した上で適切なFPGAやインターフェースが使える評価ボードを選ぶことが正しいのではないでしょうか。FPGA入門者や、自作による電子工作や学習のためにFPGAボードや開発キット（kit）をお探しの方も、まずは用途や使う目的、何を学習したいかなどを明確にしてみてください。
</p>
</div>
</section>
`;
v_html+=`
<section class="pd10">
<div class="bg-color_primary-container">
<h2 class="cam-border-bottom border-color_primary pd10 mb0 text-center">FPGA入門</h2>
<p class="pd10 mt0">
FPGAとは、「Field Programmable Gate Array（フィールド プログラマブル ゲート アレイ）」の略で、日本語で言い換えると「ユーザーがデバイス(半導体/IC)の入手後、開発現場でプログラミングをすることができるゲートアレイIC」となります。PLD（Programmable Logic Device）の１つであり、PLD はCPLD (Complex Programmable Logic Device) と FPGA (Field Programmable Gate Array) にわかれています。<br>
現在のFPGAデバイスのトレンドは、CPUコアを内蔵した「SoC FPGA」（SoC＝システムオンチップ）といったシリーズです。これまで、FPGAはどちらかというとASICやASSPであるCPUの補助処理や、高速、多量な処理をするコンパニオンチップという位置づけで、CPUにはできない部分をハードウェア(hardware)で処理するものでした。しかし、この2チップ構成にすると、CPUとFPGA間のインタフェースを設計する必要がある、基板の実装面積が増えてしまうなどの課題もありました。また、マーケットのニーズから、ハードウェアだけで表現できない複雑なアプリケーション(GUIや様々なネットワークプロトコルなど)をある程度の性能を保有したCPU上のソフトウェアで実装する必要があり、満を持してCPUコアを内蔵した『SoC FPGA』が登場したのです。これはARMを搭載したFPGAです。「インテル(Intel) ※旧アルテラ(ALTERA)」社の製品では『Cyclone® V SoC』や『Arria® 10 SoC』『MAX 10 FPGA』においてARM搭載のFPGAが採用されており、「ザイリンクス(XILINX)」社の製品では『Zynq®-7000 SoC』や『Zynq® UltraScale+™ MPSoC』『Spartan-6 FPGA』においてARM搭載のFPGAが採用されています。（富士ソフトでは『Cyclone® V SoC』『Arria® 10 SoC』『Zynq®-7000 SoC』『Zynq® UltraScale+™ MPSoC』を販売しています）。FPGA（およびCPLD）設計に関しては、たとえばアルテラ社製の統合開発ツール（Quartus Prime LiteやQuartus II など）が用意されていますが、このあたりの話についてはFPGA誕生の歴史についての記事や別の機会に紹介していきましょう。
</p>
</div>
</section>
`;
v_html+=`
<section class="pd10">
<div class="bg-color_primary-container">
<h2 class="cam-border-bottom border-color_primary pd10 mb0 text-center">豊富なFPGAボードの<span class="disp-iblock">インターフェース</span></h2>
<p class="pd10 mt0">
FPGAボードを選定する際の選択肢として、必要なインターフェースが搭載されているかも重要です。<br>
富士ソフトが販売しているFPGAボードは豊富なインターフェースを搭載しており、足りないインターフェースがある場合は、<br>
FMCコネクタを経由して、さまざまなインターフェース専用のFMCモジュールを拡張しご希望のインターフェース環境を構築することができます。
</p>
<h3 class="mb0">【イーサネット】</h3>
<p class="pd10 mt0">SFP+/QSFP+/QSFP28/CFP4/CFP8/CXPを対応している高速なネットワーク通信を可能にします。<br>
QSFP-DD対応製品も発売予定です。</p>
<h3 class="mb0">【PCIe】</h3>
<p class="pd10 mt0">PCI ExpresのGEN4、GEN3に対応しており、x16、x8サイズもございます。</p>
<h3 class="mb0">【USB】</h3>
<p class="pd10 mt0">デバッグ時に使用されるUSB/UARTインターフェースや、USB3.0ポートへアクセスする為のFMCモジュールも用意しております。</p>
<h3 class="mb0">【FMCインターフェース】</h3>
<p class="pd10 mt0">Vita57.1に準拠したFMC（LPC）/ FMC（HPC）コネクタ、及びVita57.4に準拠したFMC+コネクタを搭載しており<br>
さまざまなインターフェース専用のFMCモジュールを拡張できます。<br>
イーサネット、USB、Mini Pod、MiniSMP、RS485、ADC、DAC、DISPLAY PORT、M.2（SSD）など、各インターフェース専用のFMCモジュールを取り揃えております。</p>
</div>
</section>
`;
document.body.insertAdjacentHTML("beforeend",v_html);