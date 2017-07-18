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

    $(document).on('click', '.tabs__header:not(.tabs__header--active)', function(e){
        var container = $(this).closest('.tabs__headers'),
            buttons = container.find('.tabs__header'),
            slickSlider = $('.tabs__content'),
            slideNumber = $(this).index();

        buttons.removeClass('tabs__header--active');
        $(this).addClass('tabs__header--active');

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

    $('.timer--1').final_countdown({
        start: Date.now() - 3600 * 24 * 7,
        end: Date.now() + 3600 * 24 * 7,
        now: Date.now(),
        selectors: {

            value_seconds: '.timer--1 .clock-seconds .val',

            canvas_seconds: 'canvas-seconds',

            value_minutes: '.timer--1 .clock-minutes .val',

            canvas_minutes: 'canvas-minutes',

            value_hours: '.timer--1 .clock-hours .val',

            canvas_hours: 'canvas-hours',

            value_days: '.timer--1 .clock-days .val',

            canvas_days: 'canvas-days'
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

    $('.timer--2').final_countdown2({
        start: Date.now() - 3600 * 24 * 7,
        end: Date.now() + 3600 * 24 * 7,
        now: Date.now(),
        selectors: {

            value_seconds: '.timer--2 .clock-seconds .val',

            canvas_seconds: 'canvas-seconds-2',

            value_minutes: '.timer--2 .clock-minutes .val',

            canvas_minutes: 'canvas-minutes-2',

            value_hours: '.timer--2 .clock-hours .val',

            canvas_hours: 'canvas-hours-2',

            value_days: '.timer--2 .clock-days .val',

            canvas_days: 'canvas-days-2'
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