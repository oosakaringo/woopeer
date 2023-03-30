const v_headerHtml=`
<nav class="container-xxl flex-wrap flex-md-nowrap"> <a target="_blank" rel="noopener" href="https://www.sfpc-japan.com/" class="col-4 col-sm-2" 　aria-label="SFTPトップへ"><img src="files/img/top_logo.webp" alt="SFTPロゴ" width="250" height="85" class="w-100" style="max-width: 160px; height: auto"></a>
<div class="sfpc-menu">
<div>
<button onclick="f_navbar()" type="button" class="btn-close d-lg-none rounded-circle" aria-label="Close"></button>
<ul class="m-0 p-0 d-lg-flex justify-content-end align-items-center">
<li><a target="_blank" rel="noopener" href="https://www.sfpc-japan.com/" class="text-decoration-none">HOME</a></li>
<li><a target="_blank" rel="noopener" href="https://www.sfpc-japan.com/about" class="text-decoration-none">SFPCとは</a></li>
<li><a target="_blank" rel="noopener" href="https://www.sfpc-japan.com/info" class="text-decoration-none">お問い合わせ</a></li>
<li><a target="_blank" rel="noopener" href="donate_edit.html" class="btn btn-success rounded-pill">寄付する</a></li>
</ul>
</div>
</div>
<button onclick="f_navbar()" class="btn btn-outline-light btn-lg p-0 border-primary lh-1 d-lg-none rounded-circle" style="width: 50px;height: 50px;" aria-label="menu-button"><i class="bi bi-list fs-1"></i></button>
</nav>
`;
let e_header;
document.addEventListener("DOMContentLoaded",function(){
  e_header=document.querySelector('header');
  e_header.innerHTML=v_headerHtml;
});
function f_navbar(){
  e_header.classList.toggle('sfpc-menu-on');
}