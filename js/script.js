$(document).ready(function(){
  $('.about__symbol').addClass('about__symbol--active');
  $("#phone-request").inputmask("+7(999)999-99-99");
  $("#phone-callback").inputmask("+7(999)999-99-99");

  $('.header__burger').click(function () {
    $(this).toggleClass('open');
    $('.header__menu').toggleClass('header__menu--burger');
  });

    $(".for-anchor").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 800);
    });

  $('.popup-open-request').click(function () {
    $('.popup--request').fadeIn();
    $('body').addClass('scroll-off');
    $('header, main, footer').addClass('blur');
  });

  $('.popup-open-callback').click(function () {
    $('.popup--callback').fadeIn();
    $('body').addClass('scroll-off');
    $('header, main, footer').addClass('blur');
  });

  $('.popup-close').click(function () {
    $('.popup').fadeOut();
    $('body').removeClass('scroll-off');
    $('header, main, footer').removeClass('blur');
  });

  $(document).mouseup(function (e) {
    var div = $(".popup__window");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.popup').fadeOut();
      $('body').removeClass('scroll-off');
      $('header, main, footer').removeClass('blur');;
    }
  }); 

  new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1350: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    loop: true,
    wrapperClass: 'slider__list',
    slideClass: 'slider__item',
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletClass: 'paginator__item',
      bulletActiveClass: 'paginator__item--active',
      clickable: true
    },
    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Первый слайд',
      lastSlideMessage: 'Последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  });

});
