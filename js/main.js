




// Добавление отступа при фиксированной шапке
if (document.querySelector("._js_top_padding")) {
  const menuBody = document.querySelector('.menu__body');
  const bannerContainer = document.querySelector('.banner__container');
  const hero = document.querySelector('._js_top_padding');
  const header = document.querySelector('#header');
  hero.style.paddingTop = `${header.offsetHeight}px`;
  menuBody.style.top = `${header.offsetHeight}px`;
  bannerContainer.style.top = `${header.offsetHeight}px`;

  $(window).resize(function () {
    hero.style.paddingTop = `${header.offsetHeight}px`;
    bannerContainer.style.top = `${header.offsetHeight}px`;
    menuBody.style.top = `${header.offsetHeight}px`;

  });
}



if (document.querySelector(".products__r")) {
  const hero = document.querySelector('.products__r');
  const header = document.querySelector('#header');
  hero.style.top = `${header.offsetHeight}px`;

  $(window).resize(function () {
    hero.style.top = `${header.offsetHeight}px`;

  });
}


$(document).ready(function () {
  // $('.input_phone').inputmask('+7 (999) 999-99-99');

  // *********************
  $(function () {
    let body = $('body');
    // let header = $('.header');
    body.addClass('loaded');

    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 1) {
    //     header.addClass('header_fixed');
    //   } else {
    //     header.removeClass('header_fixed');
    //   }
    // });
  })


  // *********************
  $('.icon-menu').click(function (e) {
    $('html').toggleClass('_open');
    // console.log(this)
  });


  // *********************
  $('.dropdown .menu__link').click(function (e) {
    $(this).toggleClass("_open")
  });


  $(window).resize(function () {
    if (window.screen.width > 992) {
      $('html').removeClass('_open');
      $('.dropdown .menu__link').removeClass('_open');
    }
  });

  $(function () {
    $(".datepicker").datepicker({
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      dateFormat: "dd-mm-yy",
      dayNamesMin: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
    });
  });



  $('[data-fancybox]').fancybox({
    clickSlide: 'false',
    clickOutside: 'false',
    touch: false
  });




  $('.reviews_video__sl').slick({
    dots: true,
    infinite: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 2000,
        }
      }
    ]
  });



});






