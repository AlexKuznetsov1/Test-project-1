import "slick-carousel";

// включаем и отключаем слайдер для разных разрешений ------------------------------------------------------------------
function sliderResizeInit(elem) {
    function init() {
        if (window.matchMedia("(max-width: 767px)").matches && !elem.hasClass('slick-initialized')) {
            elem.slick({
                infinite: true,
                dots: true,
                arrows: false,
                swipeToSlide: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        } else if (!window.matchMedia("(max-width: 767px)").matches && elem.hasClass('slick-initialized')) {
            elem.slick('unslick');
        }
    }

    init();

    $(window).on('resize', function() {
        setTimeout(function() {
            init();
        }, 100);
    });
}//конец скрипта -------------------------------------------------------------------------------------------------------

$(document).ready(function() {

});