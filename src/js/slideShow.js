const Methods = {
  init() {
    Methods.slideShowGallery();
    Methods.slideShowQuemSomos();
    Methods.slideMenu();
    Methods.slideBoxInfo();
  },
  slideShowGallery() {
    const slideGallery = document.querySelector(".slide-gallery");
    if (slideGallery) {
      $(slideGallery).slick({
        lazyLoad: "ondemand",
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: true,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            },
          },
        ],
      });
    }
  },
  slideShowQuemSomos() {
    const slideQuemSomos = document.querySelector(".slider-quemSomos");
    if (slideQuemSomos) {
      $(slideQuemSomos).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
    }
  },
  slideMenu() {
    const slideMenu = document.querySelector(".destaque__produto-slide");

    if (slideMenu) {
      $(slideMenu).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  },
  slideBoxInfo() {
    const slideBoxInfo = document.querySelector(".container-mobile-info");

    if (slideBoxInfo) {
      $(slideBoxInfo).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
      });
    }
  },
};

export default {
  init: Methods.init,
};
