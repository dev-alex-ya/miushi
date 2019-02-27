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


    $('body').showMoreItems();
    // $( "#accordion" ).accordion();
    var icons = {
        header: "iconClosed",    // custom icon class
        activeHeader: "iconOpen" // custom icon class
    };
    $( "#accordion" ).accordion({
            icons: icons
        }
    );

    
});