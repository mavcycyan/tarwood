$(document).ready(function() {
    $('header a[href^="#"], footer a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    $(".fancybox,.gal").fancybox();

    $('.js-callback').fancybox({
        href: '#modal-callback',
        wrapCSS: 'modal-window-wrap',
        closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;">&times;</a>'
    });

    $('.js-prod-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.js-menu-btn').click(function(){
        // $('.js-menu').fadeIn();
        $('.js-menu').css('left', '-100%').css('display', 'block').animate({
            left: 0
        });
    });
    $('.js-menu-cls').click(function(){
        // $('.js-menu').fadeOut();
        $('.js-menu').animate({
            left: '-100%'
        }, 400, function(){
                $('.js-menu').css('display', 'none')
            });
    });
    $('.js-phone').mask('+9 (9999) 99-99-99');

    /*test*/
    $('.js-form').submit(function(e){
        e.preventDefault();
        $('.js-form-hidden').fadeIn();
        setTimeout( function() {
            $('.js-form-hidden').fadeOut();
        }, 4000)
    });
    /*test*/
});