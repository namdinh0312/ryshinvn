"use strict";function FileUpload(){this.InputElement=null,this.PreviewBoxElement=null,this.CurentImageBox=null,this.Form=null,this.MaxFile=null,this.StoredFiles=[],this.CurentFiles=[],this.CurentPreviewImages=[],this.Extend=function(e,t,i,n,a,l,s,o,r,c,m,d){this.InputElement=n,this.AcceptExtention=n.accept.split(","),this.PreviewBoxElement=l,this.CurentImageBox=a,this.Form=s,this.UniqueControlName=m?"CurentFilePaths":"NewFiles"+m,this.MaxFile=o||2,this.MaxFileSize=d||5242880,this.InputChangeCallBack=void 0!==r?r:null,this.InputElement.addEventListener("change",this.InputChange),(this.InputElement.fileUpload=this).FileReader=new FileReader,this.IsCreateInputName=c||!1,this.HostCdn=e||"",this.CurentFiles=t||[],this.CurentPreviewImages=i||[],this.Process()},this.Process=function(){if(this.CurentImageBox)for(var t=this,e=0;e<this.CurentFiles.length;e++){var i=this.CurentFiles[e],n=this.CurentPreviewImages[e],a=document.createElement("div");a.className="col-3 gutter-10 _p-item";var l=document.createElement("figure");l.className="_max-height-200 relative hover-children-show";var s=document.createElement("button");s.className="absolute hide tablet-show -border width-100 height-100 _fill-silver-opacity text-strong",s.innerText="CLICK ĐỂ XÓA",s.type="button",s.dataset.file=i,s.dataset.notClose="I",s.addEventListener("click",function(e){t.RemoveCurentFile(e,t.InputElement)});var o,r=i.substring(i.lastIndexOf("/")+1);if(i.type.match("image.*"))o="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' version='1'><path d='M128 0c-18 0-32 14-32 32v448c0 18 14 32 32 32h320c18 0 32-14 32-32V128L352 0H128z' fill='#e2e5e7'/><path d='M384 128h96L352 0v96c0 18 14 32 32 32z' fill='#b0b7bd'/><path fill='#cad1d8' d='M480 224l-96-96h96z'/><path d='M416 416c0 9-7 16-16 16H48c-9 0-16-7-16-16V256c0-9 7-16 16-16h352c9 0 16 7 16 16v160z' fill='#f15642'/><path d='M400 432H96v16h304c9 0 16-7 16-16v-16c0 9-7 16-16 16z' fill='#cad1d8'/><text y='375' x='212' style='line-height:1.25;text-align:center' font-weight='400' font-size='147' font-family='sans-serif' letter-spacing='0' word-spacing='0' text-anchor='middle' stroke-width='3'><tspan style='line-height:1.25;-inkscape-font-specification:'monospace Bold';text-align:center' y='375' x='212' font-weight='700' font-family='monospace' fill='#fff'>"+r.substring(r.indexOf(".")+1)+"</tspan></text></svg>";else o="<img class='_max-width-100-percent'   onerror='this.src=\"/images/shared/no-image.svg\"'   src='"+t.HostCdn+n+"' alt='"+r+"' data-file='"+r+"' /><figcaption class='padding-5 text-center _text-ellipsis'>"+r+"</figcaption>";if(t.IsCreateInputName)o+="<input type='text' class='_hidden'    name='"+t.UniqueControlName+"' value="+i+(t.Form?" form='"+t.Form.id+"'":"")+"></input>";l.innerHTML=o,l.insertBefore(s,l.childNodes[0]),a.appendChild(l),t.CurentImageBox.appendChild(a)}},this.InputChange=function(e){var s=e.target.fileUpload,t=e.target.files,i=Array.prototype.slice.call(t);s.PreviewBoxElement.innerHTML="",s.StoredFiles=[];for(var n=0;n<i.length;n++){var a=i[n];if(a.size>s.MaxFileSize)Site.NotifyFormFailed("Lỗi","File không được lớn hơn "+s.MaxFileSize/1048576+" mb");else if(s.StoredFiles.push(a),s.PreviewBoxElement===s.CurentImageBox&&(s.CurentFiles=[],s.CurentImageBox.innerHTML=""),s.StoredFiles.length+s.CurentFiles.length<=s.MaxFile){var l=new FileReader;l.onload=function(e){var t=event.target,i=document.createElement("div");i.className="gutter-10 _p-item";var n=document.createElement("figure");n.className="_max-height-200 relative hover-children-show";var a,l=document.createElement("button");(l.className="absolute hide -border width-100 height-100 _fill-silver-opacity text-strong",l.type="button",l.innerText="CLICK ĐỂ XÓA",l.dataset.file=t.name,l.dataset.notClose="I",l.addEventListener("click",function(e){s.RemoveFile(e,s.InputElement)}),t.fileType.match("image.*"))?a="<img class='width-100 _max-width-100-percent' src='"+e.target.result+"' alt='"+t.name+"' data-file='"+t.name+"' /><figcaption class='padding-5 text-center _text-ellipsis'>("+t.size%1e3+" kb) "+t.name+"</figcaption>":a="<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 512 512' version='1'><path d='M128 0c-18 0-32 14-32 32v448c0 18 14 32 32 32h320c18 0 32-14 32-32V128L352 0H128z' fill='#e2e5e7'/><path d='M384 128h96L352 0v96c0 18 14 32 32 32z' fill='#b0b7bd'/><path fill='#cad1d8' d='M480 224l-96-96h96z'/><path d='M416 416c0 9-7 16-16 16H48c-9 0-16-7-16-16V256c0-9 7-16 16-16h352c9 0 16 7 16 16v160z' fill='#f15642'/><path d='M400 432H96v16h304c9 0 16-7 16-16v-16c0 9-7 16-16 16z' fill='#cad1d8'/><text y='375' x='212' style='line-height:1.25;text-align:center' font-weight='400' font-size='147' font-family='sans-serif' letter-spacing='0' word-spacing='0' text-anchor='middle' stroke-width='3'><tspan style='line-height:1.25;-inkscape-font-specification:'monospace Bold';text-align:center' y='375' x='212' font-weight='700' font-family='monospace' fill='#fff'>"+t.name.substring(t.name.indexOf(".")+1)+"</tspan></text></svg><figcaption class='padding-5 text-center _text-ellipsis'>("+t.size%1e3+" kb) "+t.name+"</figcaption>";s.IsCreateInputName&&(a+="<input type='text' class='_hidden' name='"+s.UniqueControlName+"[]' value="+t.name+(s.Form?" form='"+s.Form.id+"'":"")+"></input>");n.innerHTML=a,n.insertBefore(l,n.childNodes[0]),i.appendChild(n),s.PreviewBoxElement.appendChild(i)},l.size=a.size,l.fileType=a.type,l.name=a.name,l.readAsDataURL(a)}}s.InputChangeCallBack&&s.InputChangeCallBack(s.StoredFiles)},this.RemoveCurentFile=function(e){for(var t=e.target.dataset.file,i=0;i<this.CurentFiles.length;i++)if(this.CurentFiles[i]===t){this.CurentFiles.splice(i,1);break}Site.FindParent(e.target,"_p-item").remove()},this.RemoveFile=function(e,t){for(var i=e.target.dataset.file,n=0;n<this.StoredFiles.length;n++)if(this.StoredFiles[n].name===i){this.StoredFiles.splice(n,1);break}Site.FindParent(e.target,"_p-item").remove(),Site.ClearInputFile(t)},this.Init=function(e,t,i,n,a,l,s,o,r,c,m,d){var h=document.querySelector(n),u=document.querySelector(l),p=document.querySelector(a),g=document.querySelector(s);null!=h&&null!=u||console.warn(n+" or "+u+": NULL"),this.Extend(e,t,i,h,p,u,g,o,r,c,m,d)}}var imputDocumentFile,btnLazyLoadProducts,imageCaptcha,fileUploadNewReview;function initContactForm(){(imageCaptcha=document.querySelector("[data-captcha-container] ._image-wrap"))&&imageCaptcha.addEventListener("click",function(e){reloadImage()})}function innitFileUpload(){var e=(imputDocumentFile=document.getElementById("inputDetailFromFile")).dataset.curentPathFiles&&""!==imputDocumentFile.dataset.curentPathFiles?[imputDocumentFile.dataset.curentPathFiles]:null,t=imputDocumentFile.dataset.curentShowingImages&&""!==imputDocumentFile.dataset.curentShowingImages?[imputDocumentFile.dataset.curentShowingImages]:null,i=imputDocumentFile.dataset.maxFile&&""!==imputDocumentFile.dataset.maxFile?+imputDocumentFile.dataset.maxFile:3,n=imputDocumentFile.dataset.maxFile&&""!==imputDocumentFile.dataset.maxSize?+imputDocumentFile.dataset.maxSize:5;(fileUploadNewReview=new FileUpload).Init(null,e,t,"#inputDetailFromFile","#newReviewContainer","#newReviewContainer","#frmContact",i,console.log("change"),!0,"DetailFormFile",n)}function clearform(){$("#frmContact")[0].reset();var e=document.getElementById("newReviewContainer");e&&(e.innerHTML="")}function reloadImage(){var e=new Date;$("#img-captcha").attr("src","/get-captcha-image?"+e.getTime())}function initMap(){var e=document.getElementById("mapContainer");if(e){var t={lat:+e.dataset.lat,lng:+e.dataset.lng},i=new google.maps.Map(document.getElementById("mapContainer"),{center:t,zoom:15,disableDefaultUI:!0});new google.maps.Marker({map:i,position:t,title:e.dataset.title})}}function initCoperationIndex(){}document.addEventListener("DOMContentLoaded",function(){initCoperationIndex(),initContactForm()}),window.onload=function(){};