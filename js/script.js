function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('.main-header');
  if (selectHeader.classList.contains('scroll-up-sticky') && selectHeader.classList.contains('sticky-top') && selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 30 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}
document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);

AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30
});