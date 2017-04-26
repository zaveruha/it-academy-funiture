$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});




$(function () {

    var $newSlider = $('.main-slider-wrapper');

    $newSlider.slick({
        slidesToShow: 4,
        // autoplay: true,
        // autoplaySpeed:2300,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.main-slider-button_pre') .on('click', function (event) {
        event.preventDefault();
        $newSlider.slick('slickPrev');
    });
    $('.main-slider-button_next') .on('click', function (event) {
        event.preventDefault();
        $newSlider.slick('slickNext');
    });

});


$( function() {
    $( "#tabs" ).tabs();
} );