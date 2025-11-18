const menuControl = document.getElementById("menu-control");
const nav = document.getElementById("menu");

menuControl.addEventListener("click", () => {
  nav.classList.toggle("menu-open");

  if (nav.classList.contains("menu-open")) {
    menuControl.src = "assets/icons/close.svg";
    document.body.style.overflow = "hidden";
  } else {
    menuControl.src = "assets/icons/menu.svg";
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");
  const slideInElements = document.querySelectorAll(".slide-in");

  const observerOptions = { threshold: 0.1 };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((element) => {
    fadeInObserver.observe(element);
  });

  const slideInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  slideInElements.forEach((element) => {
    slideInObserver.observe(element);
  });

  const slideInLeft = document.querySelectorAll(".slide-in-left");

  const slideInLeftObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  slideInLeft.forEach((element) => {
    slideInLeftObserver.observe(element);
  });

  const zoomIn = document.querySelectorAll(".zoom-in");

  const zoomInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  zoomIn.forEach((element) => {
    zoomInObserver.observe(element);
  });

  const slideUp = document.querySelectorAll(".slide-up");

  const slideUpObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  slideUp.forEach((element) => {
    slideUpObserver.observe(element);
  });
});
