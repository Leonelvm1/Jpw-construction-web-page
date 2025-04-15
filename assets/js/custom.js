// assets/js/custom.js
$(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
      items: 1,
      loop: false,
      nav: true,
      dots: true,
      autoplay: false,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 1 }
      }
    });
  });