(function ($) {
    var _duration = 1000,
        _easing = "easeOutCubic",
        _width = window.innerWidth,
        _windowWidth = window.innerWidth,
        _windowHeight = window.innerHeight,
        _spmode = 960,
        _speed = 1000;

    if (_width <= _spmode) {
    }
    // loading after
    window.onload = function () {
        slideBanner();
    };

    function slideBanner () {
        let $slide = $(".js-slide-banner");
        $slide.on('init reInit', function () {
            $slide.find('.slick-slide').first().addClass('is-zoomed');
        });
        $slide.slick({
            dots: false,
            arrows: false,
            slideToShow: 1,
            slideToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
            fade: true
        });
        $slide.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            setTimeout(function () {
                $slide.find('.slick-slide').not('.slick-active').removeClass('is-zoomed');
            }, 100)
            $slide.find('.slick-slide').eq(currentSlide).addClass('is-zoomed');
        });
    }

    //resize after
    window.onresize = function () {
        _width = $(window).width();
        if (_width <= _spmode) {
            // slideNavList(".side_header", false, false);
        }
    };

    window.onscroll = function () {
    };

})(jQuery);
