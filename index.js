// ABOUT ME ANIMATION
const animations = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "showAnimation 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animations("animation"));
window.addEventListener("scroll", () => animations("about-me-footer"));

// PROJECTS ANIMATION
const animationTwo = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "animation2 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};

const animationThree = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "animation3 1s .6s none";
    animationEffect.style.animationFillMode = "both";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animationTwo("projects-text"));
window.addEventListener("scroll", () => animationThree("projects-list"));

// SKILLS AIMATION
const animationFour = (elementId) => {
  let animationEffect = document.getElementById(elementId);
  let scrollPosition = animationEffect.getBoundingClientRect().top;
  let screenSize = window.innerHeight;

  if (scrollPosition < screenSize - 100) {
    animationEffect.style.animation = "animation4 1s none";
    animationEffect.style.opacity = 1;
  } else {
    animationEffect.style.transition = "all .3s ease";
    animationEffect.style.opacity = 0;
    animationEffect.style.animation = "";
  }
};
window.addEventListener("scroll", () => animationFour("skills-text"));
window.addEventListener("scroll", () => animationTwo("languages"));

// CONTACT ANIMATION
document.getElementById("contact").addEventListener("click", () => {
  document.documentElement.scrollTop = 4000;
});

const contactAnimation = () => {
  const animation = document.getElementById("contact-animation");
  if (document.documentElement.scrollTop > 2420) {
    animation.style.animation = "socialMedia 1s none";
    animation.style.opacity = 1;
  } else {
    animation.style.animation = "hideSocialMedia 1s none";
    animation.style.opacity = 0;
  }
};
window.addEventListener("scroll", () => contactAnimation());

// MENU ICON TOGGLE
window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 400) {
    document.getElementById("show-menu-icon").style.transform = "scale(1)";
  } else {
    document.getElementById("menu-checkbox").checked = false;
    document.getElementById("show-menu-icon").style.transform = "scale(0)";
  }
};
