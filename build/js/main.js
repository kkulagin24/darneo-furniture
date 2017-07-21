var popupOpen = document.querySelector('.header-top__btns');


popupOpen.addEventListener('click', function(e) {
  if(e.target.dataset.popup) {
    var popup = document.getElementById(e.target.dataset.popup);
    popup.classList.add('overlay--show');
    var close = popup.querySelector('.feed-back__close');

 if(!close.classList.contains('js-ready')) {
      close.classList.add('js-ready');
    close.addEventListener('click', function() {
      popup.classList.remove('overlay--show');
    });
  }

  }
});

$(window).stellar({
  horizontalScrolling: false
});

$(document).ready(function (e) {
    $(".jq-mask").mask("+7 (999) 999-9999");

    $('.custom-checkbox').styler();

    $('.page-header__show-header').click(function(e){
        $('.main-menu,.header-top__right').removeClass('md-hidden');
    });
    $('.main-menu__close-header').click(function(e){
        $('.main-menu,.header-top__right').addClass('md-hidden');
    });

    $('.tabs__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
    });

    $('.tabs__content').on('afterChange', function(e, slick){
        setActiveTab($('.tabs__header').eq(slick.currentSlide));
    });

    $(document).on('click', '.tabs__header:not(.tabs__header--active)', function(e){
        var slickSlider = $('.tabs__content'),
            slideNumber = $(this).index();

        setActiveTab($(this));

        if(slickSlider.hasClass('slick-initialized')) {
            slickSlider.slick('slickGoTo', slideNumber);
        }
    });

    $('.pf-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.pf-slider__controls',
        adaptiveHeight: true
    });

    $('.timer').each(function () {
        var id = $(this).attr('id');
        $(this).final_countdown({
            start: Date.now() - 3600 * 24 * 7,
            end: Date.now() + 3600 * 24 * 7,
            now: Date.now(),
            selectors: {

                value_seconds: '#' + id + '.timer .clock-seconds .val',

                canvas_seconds: id + '-canvas-seconds',

                value_minutes: '#' + id + '.timer .clock-minutes .val',

                canvas_minutes: id + '-canvas-minutes',

                value_hours: '#' + id + '.timer .clock-hours .val',

                canvas_hours: id + '-canvas-hours',

                value_days: '#' + id + '.timer .clock-days .val',

                canvas_days: id + '-canvas-days'
            },
            seconds: {
                borderColor: '#01a5e6',
                borderWidth: '4'
            },
            minutes: {
                borderColor: '#01a5e6',
                borderWidth: '4'
            },
            hours: {
                borderColor: '#01a5e6',
                borderWidth: '4'
            },
            days: {
                borderColor: '#01a5e6',
                borderWidth: '4'
            }
        });
    });
});

function setActiveTab($clickedTab) {
    var container = $clickedTab.closest('.tabs__headers'),
        buttons = container.find('.tabs__header');

    buttons.removeClass('tabs__header--active');
    $clickedTab.addClass('tabs__header--active');
}