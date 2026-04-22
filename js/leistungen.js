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

  if (document.documentElement.lang === "en") {
    Object.assign(servicesData, {
      steuern: {
        title: "Taxes",
        kicker: "Service area",
        intro:
          "We view your tax strategy together with wealth, risk and liquidity.",
        subsegments: [
          { label: "Strategic coordination", color: "#103c35" },
          { label: "Tax-efficient structures", color: "#145248" },
          { label: "Coordination with tax firms", color: "#1b6a5f" }
        ],
        bullets: [
          "Coordination with your tax advisor and relevant law firms",
          "Tax-efficient investment and real estate structures",
          "Support around income, wealth and holding structures"
        ]
      },
      investment: {
        title: "Investment",
        kicker: "Service area",
        intro:
          "From ETF savings plans to individual wealth structures, we build your investment concept around your goals.",
        subsegments: [
          { label: "Wealth building", color: "#145248" },
          { label: "Wealth protection", color: "#1b6a5f" },
          { label: "Professional investors", color: "#248474" }
        ],
        bullets: [
          "Individual portfolio and ETF concepts for wealth building and protection",
          "Support with one-off investments, savings plans and strategy changes",
          "Coordination with specialists for entrepreneurs, professional athletes and other sophisticated investors"
        ]
      },
      versicherungen: {
        title: "Insurance",
        kicker: "Service area",
        intro:
          "We protect what matters to you: professionally, transparently and without unnecessary complexity.",
        subsegments: [
          { label: "Income and earning power", color: "#1b6a5f" },
          { label: "Family and health", color: "#248474" },
          { label: "Assets and business", color: "#2f9d8b" }
        ],
        bullets: [
          "Protection for income, family, health and assets",
          "A concept instead of product sales: tailored private and business insurance combinations",
          "Ongoing support, claims guidance and regular coverage reviews"
        ]
      },
      immobilien: {
        title: "Real estate",
        kicker: "Service area",
        intro:
          "Real estate as part of your strategy, from financing to long-term structuring.",
        subsegments: [
          { label: "Financing", color: "#248474" },
          { label: "Wealth building", color: "#2f9d8b" },
          { label: "Portfolio growth", color: "#145248" }
        ],
        bullets: [
          "Financing concepts with access to the full banking market",
          "Real estate as a component of wealth building and retirement planning",
          "Support with purchases, refinancing and portfolio expansion"
        ]
      },
      vollmachten: {
        title: "Powers of attorney and wills",
        kicker: "Service area",
        intro:
          "So everything is arranged in exceptional situations: legally sound and easy to understand.",
        subsegments: [
          { label: "Power of attorney", color: "#103c35" },
          { label: "Living will", color: "#145248" },
          { label: "Succession and inheritance", color: "#1b6a5f" }
        ],
        bullets: [
          "Guidance on living wills, powers of attorney and emergency folders",
          "Coordination with notaries and inheritance law specialists",
          "Structuring of private wealth and business succession"
        ]
      }
    });
  }

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
  let isFadingToIntro = false;

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
    if (isFadingToIntro) {
      return;
    }

    const token = ++detailAnimationToken;
    setActiveSegment(null);
    detail.getAnimations().forEach((animation) => animation.cancel());

    if (!wheelSection || !wheelSection.classList.contains("is-detail-visible")) {
      isFadingToIntro = false;
      detail.setAttribute("aria-hidden", "true");
      return;
    }

    if (!detail.animate) {
      isFadingToIntro = false;
      wheelSection.classList.remove("is-detail-visible");
      detail.setAttribute("aria-hidden", "true");
      return;
    }

    isFadingToIntro = true;

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
      detail.getAnimations().forEach((animation) => animation.cancel());
      if (wheelSection) {
        wheelSection.classList.remove("is-detail-visible");
      }
      isFadingToIntro = false;
      detail.setAttribute("aria-hidden", "true");
    };
  }

  function renderDetail(key) {
    const data = servicesData[key];
    if (!data) return;

    isFadingToIntro = false;
    detail.getAnimations().forEach((animation) => animation.cancel());
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
    wrapper.addEventListener("mouseover", (event) => {
      const target = event.target;
      const previousTarget = event.relatedTarget;
      const enteredNonSegment =
        target instanceof Element && !target.closest(".service-segment");
      const cameFromSegment =
        previousTarget instanceof Element &&
        wrapper.contains(previousTarget) &&
        !!previousTarget.closest(".service-segment");

      if (enteredNonSegment && cameFromSegment) {
        showIntro();
      }
    });

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

