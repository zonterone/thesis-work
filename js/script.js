$(document).ready(function () {
  $(".about__symbol").addClass("about__symbol--active");
  $('input[type="tel"]').inputmask("+7(999)999-9999");

  $(".header__burger").click(function () {
    $(this).toggleClass("open");
    $(".header__menu").toggleClass("header__menu--burger");
  });

  $(".for-anchor").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
      scrollTop: top
    }, 800);
  });

  $(".popup-open-request").click(function () {
    $(".popup--request").fadeIn();
    $("body").addClass("scroll-off");
    $("header, main, footer").addClass("blur");
  });

  $(".popup-open-callback").click(function () {
    $(".popup--callback").fadeIn();
    $("body").addClass("scroll-off");
    $("header, main, footer").addClass("blur");
  });

  function popupClose() {
    $(".popup").fadeOut();
    $("body").removeClass("scroll-off");
    $("header, main, footer").removeClass("blur");
  }

  $(".popup-close").click(popupClose);

  $(document).mouseup(function (e) {
    var div = $(".popup__window");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup").fadeOut();
      $("body").removeClass("scroll-off");
      $("header, main, footer").removeClass("blur");
    }
  });

  $("form").each(function () {
    jQuery.validator.addMethod("checkMask", function (value, element) {
      return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });
    jQuery.validator.addMethod("email", function (value, element) {
        return /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,6}$/.test(value)
    });
    $(this).validate({
      focusInvalid: false,
      rules: {
        phone: {
          required: true,
          checkMask: true,
        },
        name: {
          required: true,
          rangelength: [2, 50],
        },
        email: {
          required: true,
          email: true,
          rangelength: [2, 50],
        },
      },
      messages: {
        name: {
          required: "Поле 'Имя' обязательно к заполнению",
          rangelength: "Введите не менее 2-х символов в поле 'Имя'",
        },
        phone: {
          required: "Номер телефона обязателен к заполнению",
          checkMask: "Номер телефона обязателен к заполнению",
        },
        email: {
          required: "Поле 'Email' обязательно к заполнению",
          email: "Необходим формат адреса email",
        },
      },
      submitHandler(form) {
        $.ajax({
          type: "POST",
          url: "/mail.php",
          data: $(form).serialize(),
        }).done(() => {
          popupClose();
          $("form").trigger("reset");
          console.log("ok");
          alert("Заявка отправлена!");
        });
        return false;
      },
    });
  });

  new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1350: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
    wrapperClass: "slider__list",
    slideClass: "slider__item",
    pagination: {
      el: ".slider__pagination",
      type: "bullets",
      bulletClass: "paginator__item",
      bulletActiveClass: "paginator__item--active",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider__button--next",
      prevEl: ".slider__button--prev",
    },
    a11y: {
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
      firstSlideMessage: "Первый слайд",
      lastSlideMessage: "Последний слайд",
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },
  });
});