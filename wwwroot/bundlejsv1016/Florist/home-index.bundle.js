"use strict";function loadSuggestProducts(){var e=LocalStorageHelper.Get(LocalStorageNamesEnum.UserCategoryList).sort(function(e,t){return 5*e.InOrderCount+3*e.CompleteCount+2*e.AddToCartCount+e.ViewCount>5*t.InOrderCount+3*t.CompleteCount+2*t.AddToCartCount+t.ViewCount?1:-1});e.length=Math.min(3,e.length);for(var t=document.querySelector("#formLazySuggestProduct #inputContainer"),a="",o=0;o<e.length;o++){a+='<input class="hide" type="text" name="CategoryLogModels['+o+'].CategoryId" value="'+e[o].CategoryId+'">'+('<input class="hide" type="number" name="CategoryLogModels['+o+'].ViewCount" value="'+e[o].ViewCount+'">')+('<input class="hide" type="number" name="CategoryLogModels['+o+'].AddToCartCount" value="'+e[o].AddToCartCount+'">')+('<input class="hide" type="number" name="CategoryLogModels['+o+'].InOrderCount" value="'+e[o].InOrderCount+'">')+('<input class="hide" type="number" name="CategoryLogModels['+o+'].CompleteCount" value="'+e[o].CompleteCount+'">')}t.innerHTML=a,document.getElementById("btnReloadSuggestProduct").click()}function loadUserViewedProduct(){var e=LocalStorageHelper.Get(LocalStorageNamesEnum.ViewProductClassificationIds);if(e&&e.length){for(var t=document.querySelector("#productViewedContainer"),a=0;a<e.length;a++){var o=e[a],n='<a href="[ProductUrl]" title="[ProductName]" class="_image-wrap tablet-margin -tablet-margin-bottom rounded-4 border-1 solid border-silver padding-5"> <img alt="[ProductName]" class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="[ProductThumnailUrl]"></a>';n=(n=(n=n.replace(/\[ProductUrl\]/g,o.ProductUrl)).replace(/\[ProductName\]/g,o.ProductName)).replace(/\[ProductThumnailUrl\]/g,o.ProductThumnailUrl),o=Site.HtmlToElement(n),t.appendChild(o[0])}Site.BeLazyRevalidate()}}var btnSearchProductName,btnLazyLoadProducts,tabs,imageCaptcha;function flashsaleCoutDown(e){var t=document.querySelector(e);if(t)for(var a=t.querySelectorAll("[data-flash-deal-count-down]"),o=0;o<a.length;o++){var n=Site.FindParent(a[o],"_p-product-widget");checkTimeCountDown(e+" [data-product-id='"+n.dataset.productId+"']")}}function loadProductSlider(e,t,a,o,n){new Swiper(e,{spaceBetween:0,slidesPerView:o,slidesPerColumn:n,navigation:{prevEl:t,nextEl:a}})}function submitProductWidgetAction(){}function init(){}function lazyLoadFlashsale(){document.getElementById("btnLazyLoadFlashSale").click()}function loadFlashSaleSwiper(){new Swiper("[data-sec-product-1] [data-col-3] ._id-listProduct",{spaceBetween:0,slidesPerView:Site.IsMobileBackend()?2:1,slidesPerColumn:3,navigation:{nextEl:"[data-col-3] ._swiper-button-next",prevEl:"[data-col-3] ._swiper-button-prev"}})}function loadSwipper(){var e=Site.IsMobileBackend()?2:5;new Swiper(".swiper-container-partner-name",{spaceBetween:0,slidesPerView:e,centeredSlides:!1,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next-brand",prevEl:".swiper-button-prev-brand"}});e=Site.IsMobileBackend()?1:2;new Swiper(".swiper-container-review",{spaceBetween:0,slidesPerView:e,centeredSlides:!1,loop:!1,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:"._swiper-button-prev",prevEl:"._swiper-button-next"}})}function lazyLoadProductCategory(){for(var e=document.querySelectorAll("[data-selector-lazyload-products] button"),t=0;t<e.length;t++)e[t].click()}document.addEventListener("DOMContentLoaded",function(){loadUserViewedProduct()}),document.addEventListener("DOMContentLoaded",function(){}),document.addEventListener("DOMContentLoaded",function(){init(),loadSwipper(),loadProductSlider("[data-sec-product-1] [data-col-1] ._id-listProduct","[data-sec-product-1] [data-col-1] ._swiper-button-prev","[data-sec-product-1] [data-col-1] ._swiper-button-next",Site.IsMobileBackend()?2:1,3),loadProductSlider("[data-sec-product-1] [data-col-2] ._id-listProduct","[data-sec-product-1] [data-col-2] ._swiper-button-prev","[data-sec-product-1] [data-col-2] ._swiper-button-next",Site.IsMobileBackend()?2:1,3),lazyLoadFlashsale(),lazyLoadProductCategory(),loadSuggestProducts()});