const burger = document.querySelector(".menu__head-burger");
const menuHead = document.querySelector(".menu__head");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  menuHead.classList.toggle("active");
  nav.classList.toggle("navActive");
});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    enabled: true,
    delay: 1,
  },
  speed: 3000,
});

// MOVE

const text = document.querySelector(".explain__text");
const links = document.querySelectorAll(".explain__navigation a");
const divText = document.querySelectorAll(".explain__text_div");

const heightOfDiv = Array.from(divText, (item) => item.clientHeight);

const updateLinksColor = () => {
  const { scrollTop } = text;
  const currentPosition = heightOfDiv.reduce((acc, height, index) => {
    if (
      scrollTop > heightOfDiv.slice(0, index + 1).reduce((a, b) => a + b, 0)
    ) {
      return index + 1;
    }
    return acc;
  }, 0);

  links.forEach((link, index) => {
    if (index <= currentPosition) {
      link.style.color = "#808aa7";
    } else {
      link.style.color = "black";
    }
  });
};

const updateProgressBar = () => {
  const { scrollTop, scrollHeight } = text;

  const scrollPercent = (scrollTop / (scrollHeight - 500)) * 100 + "%";

  document
    .querySelector(".explain__status")
    .style.setProperty("height", scrollPercent);
};

text.addEventListener("scroll", updateLinksColor);
text.addEventListener("scroll", updateProgressBar);

// DATE

const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
