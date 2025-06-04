// Объявляем переменную swiper в глобальной области видимости
let swiper;
let sliderInit = false;
const mediaSize = 320;

function initSlider() {
  if (sliderInit) return;

  swiper = new Swiper(".swiper", {
    // a11y: {
    //   prevSlideMessage: "Previous slide",
    //   nextSlideMessage: "Next slide",
    // },
    slidesPerView: 1.5,
    grid: {
      rows: 1,
    },
    // loop: true,
    // autoHeight: true,
    // centerInsufficientSlides: true,
    // effect: "coverflow",
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },
    // autoplay: { delay: 5000 },
    // centeredSlides: true,
    // width: 340,
    // effect: "coverflow",
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },
    spaceBetween: 16,
    // height: 300,
    pagination: { el: ".swiper-pagination", clickable: true },
    // enabled: true,
  });

  sliderInit = true;
  console.log("Slider initialized");
}

function destroySlider() {
  if (!sliderInit || !swiper) return;

  swiper.destroy(true, true); // Полное уничтожение с очисткой всех событий

  // Дополнительно: возвращаем слайдер в исходное состояние
  swiper = null;
  sliderInit = false;

  console.log("Slider destroyed");
}

function checkWidth() {
  window.innerWidth <= mediaSize ? initSlider() : destroySlider();
}

// Добавляем троттлинг для оптимизации
let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(checkWidth, 100);
}

window.addEventListener("load", checkWidth);
window.addEventListener("resize", handleResize);
