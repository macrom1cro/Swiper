// Объявляем переменную swiper в глобальной области видимости
let swiper;
let sliderInit = false;
const mediaSize = 320;

function initSlider() {
  if (sliderInit) return;

  swiper = new Swiper(".swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: { el: ".swiper-scrollbar" },
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
