"use strict";var myList,txtPhone,txtAddress,txtId,txtFullName,phoneNumberCleave,btnReloadShopingCartcartDetail,txtCode,txtDiscountcartDetail,txtDiscountCode,btnSubmitLoadDiscountCode,frmShipInfo,btnSearchWard,txtVnLocationName,txtVnLocationId,spanDataShipAddress;function showAnimation(){}function initPayment(){myList=document.getElementById("mylist"),txtPhone=document.getElementById("OrderViewModel_PhoneNumber"),(txtAddress=document.getElementById("OrderViewModel_Address")).addEventListener("keyup",function(e){updateRealAddress()}),txtId=document.getElementById("OrderViewModel_ShippingAddressId"),txtFullName=document.getElementById("OrderViewModel_FullName"),btnSearchWard=document.getElementById("btnSearchWard"),txtVnLocationName=document.getElementById("OrderViewModel_VnLocationName"),txtVnLocationId=document.getElementById("OrderViewModel_VnLocationId"),txtVnLocationName.addEventListener("keyup",function(e){updateVnLocation(),updateRealAddress()}),txtDiscountCode=document.getElementById("OrderViewModel_DiscountCode"),spanDataShipAddress=document.querySelector("[data-ship-address]"),txtDiscountCode.addEventListener("keyup",function(e){uploadCart(e.target.value)})}function processListItemShopingCartcartDetail(){}function uploadCart(e){8===e.length&&(txtCode=document.getElementById("txtCode"),txtDiscountcartDetail=document.getElementById("txtDiscountcartDetail"),txtCode.value=e,txtDiscountcartDetail.value=e,(btnReloadShopingCartcartDetail=document.getElementById("btnReloadShopingCartcartDetail")).click(),(btnSubmitLoadDiscountCode=document.getElementById("btnSubmitLoadDiscountCode")).click())}function loadCleave(){var e=document.getElementById("OrderViewModel_PhoneNumber");phoneNumberCleave=new Cleave(e,{numericOnly:!0,delimiters:[" "," "," "],blocks:[4,3,5]})}function loadAutoComplete(){new Awesomplete("#OrderViewModel_FullName",{filter:function(e,t){return Awesomplete.FILTER_CONTAINS(e,t.match(/[^\|]*$/)[0])},item:function(e,t){return Awesomplete.ITEM(e,t.match(/[^\|]*$/)[0])},replace:function(e){var t=this.input.value.match(/^.+\|\s*|/)[0];this.input.value=t+e.value.split("=")[1]}}),document.getElementById("OrderViewModel_FullName").addEventListener("awesomplete-selectcomplete",function(e){var t=e.text.value.split("=")[0];e.target.value=e.text.value.split("=")[1];for(var n=0;n<myList.options.length;n++){var a=myList.options[n];a.id===t&&(txtPhone.value=a.dataset.phone,txtAddress.value=a.dataset.address,txtId.value=t,console.log("autocomplet"),loadCleave())}}),document.getElementById("OrderViewModel_FullName").addEventListener("change",function(e){console.log("change"),loadCleave()})}function updateRealAddress(){spanDataShipAddress.innerHTML=txtAddress.value?(txtAddress.value+", "+txtVnLocationName.value).trim():txtVnLocationName.value}function loadLocationAutoComplete(){$("#OrderViewModel_VnLocationName").autocomplete({appendTo:"#suggestListLocationContainer",serviceUrl:"/shopingcart/searchlocationcomplete",deferRequestBy:100,minChars:3,noCache:!0,onSelect:function(e){updateRealAddress(e),txtVnLocationId.value=e.data.id,updateVnLocation()},showNoSuggestionNotice:!0,noSuggestionNotice:"Không tìm thấy địa chỉ",formatResult:function(e,t){return"<div class='padding-5  _cursor-poiter' level="+e.data.level+" data-vnlocation-id='"+e.data.id+"'>"+e.value+"</div>"},lookupFilter:function(e,t,n){return new RegExp("\\b"+$.Autocomplete.utils.escapeRegExChars(n),"gi").test(e.value)},onSearchStart:function(e){Site.AddClassElement(btnSearchWard,"active"),txtVnLocationId.value=""},onSearchComplete:function(e,t){Site.RemoveClassElement(btnSearchWard,"active")}})}function updateVnLocation(){var e=txtVnLocationId.value,t=document.querySelector("#frmLazyLoadShopingCartcartDetail [name=vnLocationId]");document.querySelector("#frmLazyLoadShopingCartcartDetail [data-order-message]");if(e){if(e!=t.value){t.value=e;var m=document.querySelector("[data-weight]");AjaxRequest.SendRequestGetJson("POST","shopingcart/getshipfree",{vnLocationId:e,sumdiscount:m.dataset.sumReal,totalWeight:m.dataset.weight},function(e,t){var n=JSON.parse(e),a=document.getElementById("message"),o=document.getElementById("suggestMessage"),d=document.getElementById("delShipPrice"),i=document.getElementById("shipPrice"),l=document.getElementById("delTotal"),r=document.getElementById("total");a.innerText=n.message,o.innerText=n.suggestMessage;var c=n.normalShipPrice-(0===n.maxSupportNormalShipPrice?n.normalShipPrice:n.maxSupportNormalShipPrice)*n.shipDiscountPercent/100;d.parentNode.classList.add(0<n.shipDiscountPercent?"visible":"hidden"),d.innerText=WNumbHelper.GetFrNumber(n.normalShipPrice),i.innerText=WNumbHelper.GetFrNumber(c);var u=+m.dataset.sumReal,s=+m.dataset.sumTemp;l.parentNode.classList.add(0<n.shipDiscountPercent||u!==s?"visible":"hidden"),l.innerText=WNumbHelper.GetFrNumber(n.normalShipPrice+s),r.innerText=WNumbHelper.GetFrNumber(u+c)})}}else t&&(t.value="")}document.addEventListener("DOMContentLoaded",function(){initPayment(),loadCleave(),loadAutoComplete(),loadLocationAutoComplete(),(btnReloadShopingCartcartDetail=document.getElementById("btnReloadShopingCartcartDetail")).click(),updateRealAddress()});