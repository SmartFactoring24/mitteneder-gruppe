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

// --------------------- Service Wheel Logic ---------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const servicesData = {
    steuern: {
      title: "Steuern",
      kicker: "Leistungsbereich",
      intro:
        "Wir denken Deine Steuerstrategie immer im Zusammenspiel mit Vermögen, Risiko und Liquidität.",
      subsegments: [
        { label: "Strategische Abstimmung", color: "#103c35" },
        { label: "Steueroptimierte Strukturen", color: "#145248" },
        { label: "Begleitung mit Kanzleien", color: "#1b6a5f" }
      ],
      bullets: [
        "Abstimmung mit Deiner Steuerberatung und relevanten Kanzleien",
        "Steueroptimierte Investment- und Immobilienstrukturen",
        "Begleitung rund um Einkommen, Vermögen & Holding-Strukturen"
      ]
    },
    investment: {
      title: "Investment",
      kicker: "Leistungsbereich",
      intro:
        "Vom ETF-Sparplan bis zur individuellen Vermögensstruktur – wir bauen Dein Investmentkonzept auf Deine Ziele.",
      subsegments: [
        { label: "Vermögensaufbau", color: "#145248" },
        { label: "Vermögensschutz", color: "#1b6a5f" },
        { label: "Professionelle Anleger", color: "#248474" }
      ],
      bullets: [
        "Individuelle Depot- und ETF-Konzepte für Vermögensaufbau & Vermögensschutz",
        "Begleitung bei Einmalanlagen, Sparplänen und Strategiewechseln",
        "Koordination mit Spezialisten für professionelle Anleger (z. B. Unternehmer, Profisportler)"
      ]
    },
    versicherungen: {
      title: "Versicherungen",
      kicker: "Leistungsbereich",
      intro:
        "Wir schützen das, was Dir wichtig ist – professionell, transparent und ohne unnötigen Ballast.",
      subsegments: [
        { label: "Einkommen & Arbeitskraft", color: "#1b6a5f" },
        { label: "Familie & Gesundheit", color: "#248474" },
        { label: "Sachwerte & Unternehmen", color: "#2f9d8b" }
      ],
      bullets: [
        "Absicherung von Einkommen, Familie, Gesundheit & Sachwerten",
        "Konzept statt Produktverkauf: passgenaue Kombination aus Privat- und Gewerbeversicherungen",
        "Laufende Betreuung, Schadenbegleitung und regelmäßige Aktualitätschecks"
      ]
    },
    immobilien: {
      title: "Immobilien",
      kicker: "Leistungsbereich",
      intro:
        "Immobilien als Baustein Deiner Strategie – von der Finanzierung bis zur Strukturierung.",
      subsegments: [
        { label: "Finanzierung", color: "#248474" },
        { label: "Vermögensaufbau", color: "#2f9d8b" },
        { label: "Portfolioausbau", color: "#145248" }
      ],
      bullets: [
        "Finanzierungskonzepte mit Zugriff auf den gesamten Bankenmarkt",
        "Immobilien als Baustein für Vermögensaufbau & Altersvorsorge",
        "Begleitung bei Ankauf, Anschlussfinanzierung und Portfolioausbau"
      ]
    },
    vollmachten: {
      title: "Vollmachten & Testamente",
      kicker: "Leistungsbereich",
      intro:
        "Damit in Ausnahmesituationen alles geregelt ist – rechtlich sauber und für Dich verständlich.",
      subsegments: [
        { label: "Vorsorgevollmacht", color: "#103c35" },
        { label: "Patientenverfügung", color: "#145248" },
        { label: "Nachfolge & Erbe", color: "#1b6a5f" }
      ],
      bullets: [
        "Beratung zu Patientenverfügung, Vorsorgevollmachten & Notfallordner",
        "Koordination mit Notaren und Fachanwälten für Erbrecht",
        "Strukturierung von Vermögens- und Unternehmensnachfolge"
      ]
    }
  };

  const segments = document.querySelectorAll(".service-segment");
  const detail = document.getElementById("serviceWheelDetail");
  const detailKicker = document.getElementById("serviceWheelDetailKicker");
  const detailTitle = document.getElementById("serviceWheelDetailTitle");
  const detailIntro = document.getElementById("serviceWheelDetailIntro");
  const detailList = document.getElementById("serviceWheelDetailList");
  const detailSubsegments = document.getElementById("serviceWheelSubsegments");
  const wheelSection = document.querySelector(".service-wheel-section");
  let pinnedKey = null;
  let detailAnimationToken = 0;

  if (!segments.length || !detail) {
    return;
  }

  function setActiveSegment(key) {
    segments.forEach((seg) => {
      seg.classList.toggle(
        "is-active",
        seg.getAttribute("data-service") === key
      );
    });
  }

  function showIntro() {
    detailAnimationToken += 1;
    setActiveSegment(null);
    if (wheelSection) {
      wheelSection.classList.remove("is-detail-visible");
    }
    detail.setAttribute("aria-hidden", "true");
  }

  function renderDetail(key) {
    const data = servicesData[key];
    if (!data) return;

    setActiveSegment(key);
    if (wheelSection) {
      wheelSection.classList.add("is-detail-visible");
    }
    detail.setAttribute("aria-hidden", "false");

    detailKicker.textContent = data.kicker || "Leistungsbereich";
    detailTitle.textContent = data.title;
    detailIntro.textContent = data.intro;

    detailList.innerHTML = "";
    data.bullets.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      detailList.appendChild(li);
    });

    detailSubsegments.innerHTML = "";
    data.subsegments.forEach((sub, index) => {
      const item = document.createElement("span");
      item.className = "service-wheel-subsegment-inline";
      item.textContent = sub.label;
      item.style.color = sub.color || "#103c35";
      detailSubsegments.appendChild(item);
    });
  }

  function animateDetailSwap(key) {
    const token = ++detailAnimationToken;

    if (!wheelSection || !wheelSection.classList.contains("is-detail-visible")) {
      renderDetail(key);
      return;
    }

    if (!detail.animate) {
      renderDetail(key);
      return;
    }

    const fadeOut = detail.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(12px)" }
      ],
      {
        duration: 140,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    fadeOut.onfinish = () => {
      if (token !== detailAnimationToken) return;

      renderDetail(key);

      detail.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 220,
          easing: "ease-out",
          fill: "forwards"
        }
      );
    };
  }

  function activate(key, pinSelection) {
    animateDetailSwap(key);
    if (pinSelection) {
      pinnedKey = key;
    }
  }

  segments.forEach((seg) => {
    const key = seg.getAttribute("data-service");

    seg.addEventListener("mouseenter", () => {
      activate(key, false);
    });

    seg.addEventListener("focus", () => {
      activate(key, false);
    });

    seg.addEventListener("click", () => {
      activate(key, true);
    });

    seg.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate(key, true);
      }
    });
  });

  const wheel = document.querySelector(".service-wheel-visual");
  if (wheel) {
    wheel.addEventListener("mouseleave", () => {
      showIntro();
    });
  }

  const wrapper = document.querySelector(".service-wheel-svg-wrapper");
  if (wrapper) {
    wrapper.addEventListener("focusout", (event) => {
      if (!wrapper.contains(event.relatedTarget)) {
        showIntro();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      pinnedKey = null;
      showIntro();
    }
  });

  showIntro();
});

