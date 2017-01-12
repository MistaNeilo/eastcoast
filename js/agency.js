// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a').click(function(){
    //         $('.navbar-toggle:visible').click();
    // });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) { // this refers to window
            $('.top-bar').hide();
        } else {
            $('.top-bar').show();
        }
    });
    // if window width greater that 768, allow menu to use hover for dropdown
    if ($(window).width() > 768){
        $('.dropdown').hover(function(){
            $('.dropdown-toggle', this).trigger('click');
        });
    }



})(jQuery); // End of use strict
