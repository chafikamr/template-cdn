!function(){"use strict";jQuery,function(){$(".owl-carousel1").owlCarousel({loop:!0,center:!0,margin:0,responsiveClass:!0,nav:!1,responsive:{0:{items:1,nav:!1},680:{items:2,nav:!1,loop:!1},1000:{items:3,nav:!0}}})}()}(),$(".checkbtn").click(function(){$("body").toggleClass("fixedPosition")}),$(document).ready(function(){$(".quantity-right-plus").click(function(t){t.preventDefault();var n=parseInt($("#quantity").val());$("#quantity").val(n+1)}),$(".quantity-left-minus").click(function(t){t.preventDefault();var n=parseInt($("#quantity").val());n>0&&$("#quantity").val(n-1)})});let goo=document.querySelectorAll('input[name="radio-3"]');0!=goo.length&&goo.forEach(function(t,n){t.addEventListener("change",function(){document.getElementById("forminator-field-textarea-1").style.display=2==n?"block":"none"})});
