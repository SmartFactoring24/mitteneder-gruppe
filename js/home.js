/* Accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Swipers */

var swiper = new Swiper(".logo-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

var swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-2 .swiper-button-next",
    prevEl: ".swiper-2 .swiper-button-prev",
  },
});

var swiperLogos = new Swiper(".swiper-logos-large", {
  slidesPerView: 5,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiperBadges = new Swiper(".swiper-badges", {
  slidesPerView: 6,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

var swiperKunde = new Swiper(".kunde-swiper-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: "kunde-swiper-2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".kunde-swiper-2-outside .swiper-button-next",
    prevEl: ".kunde-swiper-2-outside .swiper-button-prev",
  },
});

const counters = document.querySelectorAll(".counter");
const duration = 2000; // 2 seconds
const interval = 20; // Update every 20ms
const steps = duration / interval;

const observerCounter = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("is intersecting");

        const counter = entry.target;
        counter.innerText = "0";
        const target = +counter.getAttribute("data-count");
        const increment = target / steps;
        let current = 0;
        let count = 0;

        const timer = setInterval(() => {
          count++;
          current += increment;
          counter.innerText = Math.round(current).toLocaleString("de-DE");

          if (count >= steps) {
            counter.innerText = target.toLocaleString("de-DE");
            clearInterval(timer);
          }
        }, interval);

        observerCounter.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => observerCounter.observe(counter));
