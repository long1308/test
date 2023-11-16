$(document).ready(function () {
    $(".colection-hm5__slider").slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      dots: true,
      nextArrow: $(".slide-prev__magazine"),
      prevArrow: $(".slide-next__magazine"),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
  