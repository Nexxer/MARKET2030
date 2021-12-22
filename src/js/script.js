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

  $('.raiting__slider').slick({
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
})