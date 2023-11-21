var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");
console.log(tabLinks);
tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  el.preventDefault();
  var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + electronic).classList.add("active");

  btn.classList.add("active");
}

$(document).ready(function () {
  $(".slider__bestsellers").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: $(".slide-prev__bestsellers"),
    prevArrow: $(".slide-next__bestsellers"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
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
$(document).ready(function () {
  $(".slider__featured").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: $(".slide-prev__featured"),
    prevArrow: $(".slide-next__featured"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
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
$(document).ready(function () {
  $(".slider__sales").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: $(".slide-prev__sales"),
    prevArrow: $(".slide-next__sales"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
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