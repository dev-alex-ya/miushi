$(document).ready(function() {

    $('.carousel').carousel({
        interval: false
    })

    $(".slider").slick({
        mobileFirst: true,       
        infinite: true,
        responsive: [
            {
              breakpoint: 320,
              settings: {
                centerMode: true,
                centerPadding: '30px',
                // slidesToShow: 1,
                // slidesToScroll: 1,
                dots: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                centerMode: true,
                centerPadding: '63px',
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
              }
            },
            {
              breakpoint: 1070,
              settings: {
                // centerMode: true,
                // centerPadding: '10px',
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            }
            
        ]
    });

    $('input[type="number"]').niceNumber({

        // auto resize the number input
        autoSize: true,
      
        // the number of extra character
        autoSizeBuffer: 1,
      
        // custom button text
        buttonDecrement: "",
        buttonIncrement: "",
      
        // 'around', 'left', or 'right'
        // buttonPosition: 'around'
        
    });

    $('.show-more').showMore({
        minheight: 640,
        buttontxtmore: 'Показать ещё',
        buttontxtless: 'Скрыть',
        animationspeed: 1000
    });

    $('body').showMoreItems();
    // $( "#accordion" ).accordion();
    var icons = {
        header: "iconClosed",    // custom icon class
        activeHeader: "iconOpen" // custom icon class
    };
    // $( "#accordion" ).accordion({
    //         icons: icons
    //     }
    // );

    //hamburger start
    let trigger = $('.hamburger');
    let target = $( trigger.attr("target") );
    let btnClose = $('#closeMenu');
    // btnClose.html('');
    let overlay = $('.overlay');
    let isClosed = false;

    trigger.click(function () {
        hamburgerCross();
    });

    btnClose.click(function() {
        hamburgerCross();
    });

    function hamburgerCross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            target.hide();
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            target.show();
            isClosed = true;
        }
    }
 
    function openMenu () {

    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
    //hamburger end
    



    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: false,
      watchOverflow: false,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      slidesPerView: 4,
      spaceBetween: 40,
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: "true",
      },
      breakpoints: {
        1169: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 2.3,
          centeredSlides: true,
          spaceBetween: 30,
        },
        // 767: {
        //   slidesPerView: 2,
        //   centeredSlides: true,
        //   spaceBetween: 30,
        // },
        575: {
          slidesPerView: 2.3,
          centeredSlides: true,
          spaceBetween: 30,
        },
        520: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 30,
        },
        435: {
          slidesPerView: 1.35,
          centeredSlides: true,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1.2,
          centeredSlides: true,
          spaceBetween: 30,
        }
      }
    });
});