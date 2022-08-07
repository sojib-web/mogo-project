$(function () {


    $('.countup').counterUp({
        delay: 10,
        time: 2000
    });

    //     $(".slider_active").slick({
    //
    //        arrows: true,
    //        autoplay: true,
    //        autoplaySpeed: 4000,
    //        dots: true,
    //        prevArrow: '.left_arrow',
    //        nextArrow: '.right_arrow'
    //
    //    });

    $('.slick_slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow'
    });

    var scroll = new SmoothScroll('a[href*="#"]');

    //     PREALODER PART START 
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


});
