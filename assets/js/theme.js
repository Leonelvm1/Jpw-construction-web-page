"use strict";
  
// Prealoder
function prealoader() {
    if ($('#loader').length) {
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    };
}

// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}

// Theme-banner slider 
function BannerSlider() {
    if ($("#main-banner-slider").length) {
        $("#main-banner-slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 7000,
            navigation: {
                arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    style: "uranus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: -15,
                    v_offset: 30,
                    space: 10,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }

            },
            responsiveLevels: [2220, 1183, 975, 751],
            gridwidth: [1170, 970, 770, 350],
            gridheight: [756, 756, 756, 700],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    };
}


// Theme-banner slider 
function BannerSliderTwo() {
    if ($("#main-banner-slider-two").length) {
        $("#main-banner-slider-two").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 7000,
            navigation: {
                arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 60
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    style: "uranus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: -15,
                    v_offset: 30,
                    space: 10,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }

            },
            responsiveLevels: [2220, 1183, 975, 751],
            gridwidth: [1170, 970, 770, 350],
            gridheight: [920, 920, 920, 700],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    };
}






// Fancybox 
function FancypopUp() {
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(0, 0, 0, 0.6)'
                    }
                }
            }
        });
    };
}

// Fancybox Video
function FancypopUpVideo() {
    if ($(".fancy_video").length) {
        $(".fancy_video").fancybox({
            maxWidth: 1080,
            maxHeight: 720,
            fitToView: false,
            width: '95%',
            height: '85%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none'
        });
    };
}

// Theme Slider
function themeSlider() {
    if ($('.theme-slider').length) {
        $('.theme-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 333500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                651: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        })
    }
}

// Client Slider
function clientSlider() {
    if ($('.client-slider-wrapper').length) {
        $('.client-slider-wrapper').owlCarousel({
            loop: true,
            nav: true,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                651: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        })
    }
}


// Partner Slider
function partnerSlider() {
    if ($('.partner-slider').length) {
        $('.partner-slider').owlCarousel({
            loop: true,
            nav: false,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1250,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                651: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        })
    }
}

// Mixitup gallery
function mixitupGallery() {
    if ($("#mixitup-list").length) {
        $("#mixitup-list").mixItUp()
    };
}

// Counter function
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function() {
            timer.countTo();
        })
    }
}

// Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    }
}



//Contact Form Validation
function contactFormValidation() {
    if ($('.form-validation').length) {
        $('.form-validation').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                sub: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo("slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
    }
}

// Close suddess Alret
function closeSuccessAlert() {
    if ($('.closeAlert').length) {
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        });
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        })
    }
}


// Sticky header
function stickyHeader() {
    if ($('.main-menu').length) {
        var sticky = $('.main-menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

    };
}


// toggle menu for mobile
function mobileDropdown() {
    if ($('.main-menu').length) {
        $('.main-menu nav ul li.dropdown-holder').append(function() {
            return '<i class="fa fa-angle-down" aria-hidden="true"></i>';
        });
        $('.main-menu nav ul li.dropdown-holder .fa').on('click', function() {
            $(this).parent('li').children('ul').slideToggle();
        });
    }
}




// Accordion panel
function themeAccrodion() {
    if ($('.theme-accordion > .panel').length) {
        $('.theme-accordion > .panel').on('show.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.addClass("active-panel");

        });

        $('.theme-accordion > .panel').on('hidden.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.removeClass("active-panel");
            //setProgressBar(heading.get(0).id);
        });

    };
}

// DOM ready function
jQuery(document).on('ready', function() {
    (function($) {
        removePlaceholder();
        BannerSlider();
        BannerSliderTwo();
        wowAnimation();
        FancypopUp();
        FancypopUpVideo();
        themeSlider();
        clientSlider();
        mixitupGallery();
        partnerSlider();
        CounterNumberChanger();
        scrollToTop();
        contactFormValidation();
        closeSuccessAlert();
        mobileDropdown();
        themeAccrodion();
    })(jQuery);
});


// Window load function
jQuery(window).on('load', function() {
    (function($) {
        prealoader()
    })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
    })(jQuery);
});



//carousel
$(document).ready(function() {
$('.owl-carousel1').owlCarousel({
loop: true,
margin: 10,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: true
},

414: {
items:1,
nav: false
},

600: {
items: 2,
nav: false
},
1000: {
items: 2,
nav: false,
loop: false,
margin: 20
}
}
})
})
//carousel



//carousel
$(document).ready(function() {
$('.owl-carousel2').owlCarousel({
loop: true,
margin: 10,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: true
},
600: {
items: 2,
nav: false
},
1000: {
items: 3,
nav: true,
loop: false,
margin:0
}
}
})
})
//carousel






//carousel
$(document).ready(function() {
$('.owl-carousel3').owlCarousel({
loop: true,
margin: 10,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: false
},
600: {
items: 2,
nav: false
},
1000: {
items: 4,
nav: true,
loop: false,
margin:0
}
}
})
})
//carousel



//carousel
$(document).ready(function() {
$('.owl-carousel4').owlCarousel({
loop: true,
margin: 10,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: true
},
600: {
items: 1,
nav: true
},
1000: {
items: 1,
nav: false,
loop: false,
margin:0
}
}
})
})
//carousel





//carousel
$(document).ready(function() {
$('.news-events').owlCarousel({
loop: true,
margin: 10,
responsiveClass: true,
responsive: {
0: {
items: 1,
nav: false
},
600: {
items: 2,
nav: true
},
1000: {
items: 4,
nav: true,
loop: false,
margin:30
}
}
})
})
//carousel





