// 팝업
const btn = document.querySelector(".popup button");
btn.onclick = () => {
  document.querySelector(".popup").style.display = "none";
};
document.querySelector(".popup").style.display = "none";
//메인 배너 가로스크롤
const swiper = new Swiper(".main-banner.swiper", {
  loop: true,
  speed: 800,
  //autoplay: {
  //  delay: 4000,
  //  disableOnInteraction: false,
  //},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  observer: true,
  observeParents: true,
  watchOverflow: true,
  on: {
    resize: function () {
      this.update();
    },
  },
});
