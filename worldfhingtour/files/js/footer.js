const n_now=new Date();
const v_year=n_now.getFullYear();
const v_footerHtml=`
<img src="files/img/footer_bg.svg" alt="" width="300" height="150" class="position-absolute start-0 top-0 w-100 bg-footer-img bd-gray-800">
<div class="position-relative">
<div class="text-center text-success"> <img src="files/img/main_logo_gold.svg" width="80" height="120" alt="">
<p class="small ls-1 mb-1">Fishing Passport</p>
<p class="smaller lh-1 mb-0">World FishingTours</p>
<p class="small mb-4">釣りパス</p>
</div>
<div class="col-10 col-lg-8 col-xl-6 mx-auto">
<div class="row d-flex flex-wrap mb-4">
<a href="../boarding_list/" class="d-block col-6 p-2" target="_blank" rel="noopener"><img src="files/img/banner02.png" alt="WEB乗船名簿01" width="1381" height="212" class="img-fluid"></a>
<a href="../boarding_list/" class="d-block col-6 p-2" target="_blank" rel="noopener"><img src="files/img/banner02.png" alt="WEB乗船名簿02" width="1381" height="212" class="img-fluid"></a>
<a href="../boarding_list/" class="d-block col-6 p-2" target="_blank" rel="noopener"><img src="files/img/banner02.png" alt="WEB乗船名簿03" width="1381" height="212" class="img-fluid"></a>
<a href="../boarding_list/" class="d-block col-6 p-2" target="_blank" rel="noopener"><img src="files/img/banner02.png" alt="WEB乗船名簿04" width="1381" height="212" class="img-fluid"></a>
<a href="../boarding_list/" class="d-block col-6 p-2" target="_blank" rel="noopener"><img src="files/img/banner02.png" alt="WEB乗船名簿05" width="1381" height="212" class="img-fluid"></a>
</div>
<div class="list-group list-group-flush mb-4">
<a href="index.html" class="list-group-item bg-transparent text-white border-secondary">サービス</a>
<a href="../fishing_passport/" class="list-group-item bg-transparent text-white border-secondary" target="_blank" rel="noopener">パスポート発行</a>
<a href="mypage.html" class="list-group-item bg-transparent text-white border-secondary">マイページ</a>
<a href="find_01.html" class="list-group-item bg-transparent text-white border-secondary">ツアーを探す</a>
<a href="privacy.html" class="list-group-item bg-transparent text-white border-secondary">プライバシーポリシー</a>
<a href="#" class="list-group-item bg-transparent text-white border-secondary">お問い合わせ</a>
</div>
<ul class="ps-0 smaller py-4">
<li class="d-block mb-3"> <img src="files/img/icon_map.svg" width="20" height="20" alt="" class="me-3">〒000-0000 □□□□□□□□□□□□□</li>
<li class="d-block mb-3"> <img src="files/img/icon_phone.svg" width="20" height="20" alt="" class="me-3">TEL: 0000-00-0000 </li>
<li class="d-block mb-3 row">
<a href="###" class="p-3"><img src="files/img/icon_twitter.svg" width="20" height="20" alt="twitter"></a>
<a href="###" class="p-3"><img src="files/img/icon_facebook.svg" width="20" height="20" alt="facebook"></a>
<a href="###" class="p-3"><img src="files/img/icon_instagram.svg" width="20" height="20" alt="instagram"></a>
</li>
</ul>
</div>
<div class="border-top py-2 border-secondary">
<p class="col-10 col-lg-8 col-xl-6 mx-auto smaller mb-0">&copy;${v_year} Fishing passport</p>
</div>
</div>
`;
document.querySelector('footer').innerHTML=v_footerHtml;