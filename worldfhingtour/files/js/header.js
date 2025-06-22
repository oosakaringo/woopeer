const v_headerHtml=`
<div class="p-2 container d-flex justify-content-between align-items-center"> <a href="index.html" class="text-decoration-none">
<div class="d-flex align-items-center"><img src="files/img/main_logo.svg" alt="" width="50" height="50">
<h1 class="mb-0"><svg data-name="釣パス" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 35" preserveAspectRatio="none" width="112" height="35"><title>World FishingTours 釣パス</title><g data-name="釣パス" fill="#fff" font-family="SourceHanSansJP-Medium-83pv-RKSJ-H,'Source Han Sans JP',sans-serif" font-weight="500"><text transform="translate(0 10.6)" font-size="12"><tspan x="0" y="0">World FishingTours</tspan></text><text transform="translate(-.08 30.41)" font-size="17.72" letter-spacing="-.05em"><tspan x="0" y="0">釣パス</tspan></text><text transform="translate(50 23.78)" font-size="7.8"><tspan x="0" y="0">Fishing Passport</tspan></text></g></svg></h1>
</div>
</a>
<div class="d-flex">
<button class="btn btn-sm btn-menu p-0 text-primary bg-language dropdown-toggle" type="button" id="dropdown_language" data-bs-toggle="dropdown" aria-expanded="false"> <img src="files/img/icon_language.svg" alt="" width="20" height="20"><br>
<span class="smaller">JP</span></button>
<a href="mypage.html" class="btn btn-sm btn-menu px-0 text-white bg-login"> <img src="files/img/icon_login.svg" alt="" width="20" height="20"><br>
<span class="smaller">LOGIN</span></a>
<button class="btn btn-sm btn-menu p-0 text-white bg-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#modal_menu"> <img src="files/img/icon_menu.svg" alt="" width="22" height="20"><br>
<span class="smaller">MENU</span></button>
<ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdown_language">
<li><a class="dropdown-item" href="#JP">日本語</a></li>
<li><a class="dropdown-item" href="#EN">English</a></li>
<li><a class="dropdown-item" href="#CN">中文</a></li>
</ul>
</div>
</div>
`;
const v_offcanvas=`
<div class="offcanvas offcanvas-end" id="modal_menu" tabindex="-1"aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header border-bottom border-dark-light bg-light text-primary py-2 pe-2">
<h5 class="mb-0">MENU</h5>
<button type="button" class="btn p-1 text-primary" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-lg fs-4"></i></button>
</div>
<div class="offcanvas-body bg-light text-primary">
<div class="list-group list-group-flush border-bottom border-dark-light">
<a href="index.html" class="list-group-item bg-transparent text-primary border-dark-light">サービス</a>
<a href="../fishing_passport/" class="list-group-item bg-transparent text-primary border-dark-light" target="_blank" rel="noopener">パスポート発行</a>
<a href="mypage.html" class="list-group-item bg-transparent text-primary border-dark-light">マイページ</a>
<a href="find_01.html" class="list-group-item bg-transparent text-primary border-dark-light">ツアーを探す</a>
<a href="index.html" class="list-group-item bg-transparent text-primary border-dark-light">お知らせ</a>
<a href="privacy.html" class="list-group-item bg-transparent text-primary">PRIVACY POLICY</a>
</div>
<ul class="d-flex ps-0 my-5 ls-2">
<li class="d-block col-4 border-end border-primary"><a href="#JP" class="btn d-block py-0 text-primary btn-active">JP</a> </li>
<li class="d-block col-4 border-end border-primary"><a href="#EN" class="btn d-block py-0 text-primary">EN</a> </li>
<li class="d-block col-4"><a href="#CN" class="btn d-block py-0 text-primary">CN</a> </li>
</ul>
<div class="d-grid gap-2 my-3"> <a href="../boarding_list/" target="_blank" rel="noopener"><img src="files/img/banner02.png" alt="WEB乗船名簿" width="1381" height="212" class="img-fluid"></a> </div>
</div>
</div>
`;
let e_header;
document.addEventListener("DOMContentLoaded",function(){
e_header=document.querySelector('header');
e_header.innerHTML=v_headerHtml;
  e_header.insertAdjacentHTML('afterend', v_offcanvas);
});