const v_headerHtml=`
<div class="p-2 container d-flex justify-content-between align-items-center">
<a href="index.html" class="text-decoration-none">
<h1 class="mb-0"><img src="files/img/main_logo_2.svg" alt="FISHING PASSPORT WEB乗船名簿" width="140" height="60" style="margin: -10px 0;"></h1>
</a>
<div class="d-flex">
<button class="btn btn-sm btn-menu p-0 text-primary bg-language dropdown-toggle" type="button" id="dropdown_language" data-bs-toggle="dropdown" aria-expanded="false"> <img src="files/img/icon_language.svg" alt="" width="20" height="20"><br>
<span class="smaller">JP</span></button>
<a href="mypage.html" class="btn btn-sm btn-menu p-0"><img src="files/img/mypage.svg" alt="" width="50" height="50"></a>
<a href="for_captain.html" class="btn btn-sm btn-menu p-0"><img src="files/img/captain.svg" alt="" width="50" height="50"></a>
<button class="btn btn-sm btn-menu p-0 text-white bg-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#modal_menu"><img src="files/img/icon_menu.svg" alt="" width="22" height="20"><br>
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
<div class="offcanvas-header border-bottom border-color-nomal bg-dark-light text-primary">
<h5 class="mb-0">MENU</h5>
<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body bg-dark-light text-primary">
<div class="list-group list-group-flush border-bottom border-color-nomal">
<a href="index.html" class="list-group-item bg-transparent text-primary">サービス</a>
<a href="apply.html" class="list-group-item bg-transparent text-primary">パスポート発行</a>
<a href="check.html" class="list-group-item bg-transparent text-primary">チェックイン</a>
<a href="mypage.html" class="list-group-item bg-transparent text-primary">マイページ</a>
<a href="find.html" class="list-group-item bg-transparent text-primary">遊漁船を探す</a>
<a href="privacy.html" class="list-group-item bg-transparent text-primary">PRIVACY POLICY</a>
</div>
<ul class="d-flex ps-0 my-5 ls-2">
<li class="d-block col-4 border-end border-primary"><a href="#JP" class="btn d-block py-0 btn-active">JP</a> </li>
<li class="d-block col-4 border-end border-primary"><a href="#EN" class="btn d-block py-0">EN</a> </li>
<li class="d-block col-4"><a href="#CN" class="btn d-block py-0">CN</a> </li>
</ul>
<div class="d-grid gap-2 my-3"> <a href="#LP"><img src="files/img/banner01.png" alt="" width="1381" height="212" class="img-fluid"></a> </div>
</div>
</div>
`;
let e_header;
document.addEventListener("DOMContentLoaded",function(){
e_header=document.querySelector('header');
e_header.innerHTML=v_headerHtml;
  e_header.insertAdjacentHTML('afterend', v_offcanvas);
});