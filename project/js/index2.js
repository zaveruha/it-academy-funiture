(function() {

    var input              = document.getElementById('username'); //вибираємо необхідні елементи input
    var form               = document.getElementById('form');////вибираємо необхідні елементи  form
    var elem               = document.createElement('div'); // створюємо новий елемент div
    elem.id            = 'notify'; // присвоюємо даному елементу id із значенням 'notify'
    elem.style.display = 'none'; // присвоїли даному новому блоку display: none.

    form.appendChild(elem);// вставили новий DIV  в форму

    input.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            input.className    = 'invalid';
            elem.textContent   = 'Enter the number of digits e.g. 5';
            elem.className     = 'error';
            elem.style.display = 'block';
        }
    });

    input.addEventListener('input', function(event){
        if ( 'block' === elem.style.display ) {
            input.className = '';
            elem.style.display = 'none';
        }
    });



    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if  (isNaN(count)){
            count='0';
        }
        $input.val(0);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $("[data-fancybox]").fancybox({
        // Options will go here
    });


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




})();