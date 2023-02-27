
var modal = document.getElementById("loginmdl");
function mdl() {
    modal.style.display = "block";
  }


$(document).ready (function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
        }
    })
});