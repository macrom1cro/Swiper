// Объявляем переменную swiper в глобальной области видимости
let swiper;
let sliderInit = false;
const mediaSize = 320;

function initSlider() {
  if (sliderInit) return;

  swiper = new Swiper(".swiper", {
    slidesPerView: 1.2,
    slidesOffsetBefore: 16,
    spaceBetween: 16,
    pagination: { el: ".swiper-pagination", clickable: true },
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
