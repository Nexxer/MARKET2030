$(document).ready(function () {
  $('.slider__top_wrapper').slick({
    prevArrow: "<div class='slider-prev'></div>",
    nextArrow: "<div class='slider-next'></div>",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    ]
  });

  $('.raiting__slider').slick({
    prevArrow: "<div class='slider-prev'></div>",
    nextArrow: "<div class='slider-next'></div>",
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

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
});