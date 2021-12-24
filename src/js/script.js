$(document).ready(function () {
  $('.slider__top_wrapper').slick({
    prevArrow: "<div class='slider-prev'></div>",
    nextArrow: "<div class='slider-next'></div>",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1359,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        swipeToSlide: true,
      }
    }
    ]
  });

  $('.rating__slider').slick({
    prevArrow: "<div class='slider-prev'></div>",
    nextArrow: "<div class='slider-next'></div>",
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1599,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        swipeToSlide: true,
      }
    }
    ]
  });

  $('.slider_detail').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: 0,
    fade: true,
    draggable: false,
    asNavFor: '.slider_nav_wrapper'
  });

  $('.slider_nav_wrapper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider_detail',
    arrows: true,
    dots: false,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
    swipeToSlide: false,
    prevArrow: '<div class="slider_nav-prev"><svg width="19" height="10" viewBox="0 0 19 10" fill="#BEC2DC" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7744 9.78695C18.4736 10.071 17.9859 10.071 17.6851 9.78695L9.5 2.0574L1.31494 9.78695C1.01413 10.071 0.526419 10.071 0.225609 9.78695C-0.0751992 9.50288 -0.0751992 9.04232 0.225609 8.75825L8.81341 0.648374C9.1988 0.284438 9.8012 0.284438 10.1866 0.648374L18.7744 8.75825C19.0752 9.04231 19.0752 9.50288 18.7744 9.78695Z"/></svg></div>',
    nextArrow: '<div class="slider_nav-next"><svg width="19" height="10" viewBox="0 0 19 10" fill="#BEC2DC" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.225607 0.213051C0.526416 -0.0710172 1.01412 -0.0710173 1.31493 0.213051L9.5 7.9426L17.6851 0.213048C17.9859 -0.0710203 18.4736 -0.0710203 18.7744 0.213048C19.0752 0.497116 19.0752 0.957682 18.7744 1.24175L10.1866 9.35162C9.8012 9.71556 9.1988 9.71556 8.81341 9.35162L0.225607 1.24175C-0.0752021 0.957686 -0.0752022 0.49712 0.225607 0.213051Z"/></svg></div>',
    responsive: [{
      breakpoint: 1599,
      settings: {
        centerMode: true,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        vertical: false,
        centerMode: false,
        prevArrow: "<div class='slider-prev'></div>",
        nextArrow: "<div class='slider-next'></div>",
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        vertical: false,
        centerMode: true,
        arrows: false,
      }
    },
    ]
  });

  $('.slider_reviews').slick({
    prevArrow: "<div class='slider-prev'></div>",
    nextArrow: "<div class='slider-next'></div>",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 0,
    responsive: [{
      breakpoint: 1360,
      settings: {
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        vertical: false,
        centerMode: true,
        arrows: false,
        infinite: true,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
        vertical: false,
        centerMode: true,
        arrows: false,
        infinite: true,
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        vertical: false,
        centerMode: true,
        arrows: false,
        infinite: true,
      }
    },
    ]
  });


  // Шапка
  $(".mobile-menu-toggle").click(function () {
    $(".mobile-main-menu").toggle();
  });

  $(".mou-header-item").click(function (e) {
    e.preventDefault();
    $(".mou-header-fade").fadeToggle();
  });
  $('.header-close').click((e) => {
    e.preventDefault()
    $('.mou-header-fade').fadeOut()
  });

  // Селекты
  $('#sortSelect').select2({
    minimumResultsForSearch: -1,
    width: '300px',
  });

  $('#sortCategories').select2({
    minimumResultsForSearch: -1,
    width: '210px',
    dropdownCssClass: 'dropdow-categories'
  });

  $('#sortCity').select2({
    minimumResultsForSearch: -1,
    width: '188px',
    placeholder: "Выбор города",
    dropdownCssClass: 'dropdow-city'
  });

  // Читать далее
  var text = $('.read_more p');
  var btnShow = $('.read_more a');

  function showText() {
      if (text.height() > 300) {
          text.addClass('info__text_big');
          btnShow.show();
      } else {
          text.removeClass('info__text_big');
          btnShow.hide();
      }
  }

  showText()

  $(window).resize(function () {
      text.css('height', 'auto');
      showText();
  });

  btnShow.click(function () {
      if (btnShow.html() != "Свернуть") {
          text.animate({ height: text.get(0).scrollHeight }, 300);
          text.css("-webkit-line-clamp", "unset");
          text.removeClass('info__text_big');
          btnShow.html("Свернуть");
          return false;
      } else {
          var curHeight = text.height();
          text.height(curHeight).animate({ height: 286 }, 300, function () { text.css("-webkit-line-clamp", "11"); });
          text.css("height", "auto");
          text.addClass('info__text_big');
          btnShow.html("Читать полностью");
          return false;
      }
  })
})