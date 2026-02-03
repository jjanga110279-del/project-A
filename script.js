// 팝업
const btn = document.querySelector(".popup button");
btn.onclick = () => {
  document.querySelector(".popup").style.display = "none";
};
c;

//메인 배너 가로스크롤
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".main-banner.swiper", {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
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
});
