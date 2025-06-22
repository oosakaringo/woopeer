const n_now=new Date();
const v_year=n_now.getFullYear();
const v_footerHtml=`
<div class="container">
<div class="row border-bottom mb-4">
<div class="col-5 col-md-3 col-lg-2 mb-4"><a target="_blank" rel="noopener" href="https://www.sfpc-japan.com/" aria-label="SFTPトップへ"><img src="files/img/top_logo.webp" alt="SFTPロゴ" width="250" height="85" class="w-100" style="height: auto;"></a></div>
<div class="col-12 col-md-4 row">
<ul class="lh-lg small col-6">
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="http://www.sfpc-japan.com/event" class="text-white text-decoration-none">イベント情報</a></li>
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="https://note.com/sfpc/" class="text-white text-decoration-none">note</a></li>
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="https://sfpctag.mystrikingly.com/" class="text-white text-decoration-none">タグ＆リリース</a></li>
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="http://www.sfpc-japan.com/about" class="text-white text-decoration-none">S.F.P.C とは</a></li>
</ul>
<ul class="lh-lg small col-6">
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="http://www.sfpc-japan.com/info" class="text-white text-decoration-none">問い合わせ</a></li>
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="http://sfpc.mystrikingly.com/8" class="text-white text-decoration-none">寄付する</a></li>
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="http://sfpc.mystrikingly.com/7" class="text-white text-decoration-none">協賛する</a></li>
<li class="d-block mb-2"><a target="_blank" rel="noopener" href="http://www.sfpc-japan.com/1" class="text-white text-decoration-none">プライバシーポリシー</a></li>
</ul>
</div>
<ul class="col-12 col-md-3 d-flex justify-content-end justify-content-md-start">
<li class="d-block"><a target="_blank" rel="noopener" href="https://www.facebook.com/sfpc1/" class="btn btn-success btn-lg p-2 lh-1 me-3 rounded-circle" aria-label="SFTP Facebookへ"><i class="bi bi-facebook"></i></a></li>
<li class="d-block"><a target="_blank" rel="noopener" href="http://twitter.com/" class="btn btn-success btn-lg p-2 lh-1 me-3 rounded-circle" aria-label="twitterへ"><i class="bi bi-twitter"></i></a></li>
<li class="d-block"><a target="_blank" rel="noopener" href="https://www.instagram.com/sfpcjapan/" class="btn btn-success btn-lg p-2 lh-1 me-3 rounded-circle" aria-label="SFTP Instagramへ"><i class="bi bi-instagram"></i></a></li>
</ul>
</div>
<p>${v_year} © S.F.P.C</p>
</div>
`;
document.querySelector('footer').innerHTML=v_footerHtml;