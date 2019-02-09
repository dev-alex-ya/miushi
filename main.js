// require("slick-carousel");
$(document).ready(function() {

    $(".slider").slick({

        // normal options...
        slidesToShow: 4,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: "35px",
        mobileFirst: true,

        // the magic
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }
            
        ]
    });

    // $('.slider').slick();
});