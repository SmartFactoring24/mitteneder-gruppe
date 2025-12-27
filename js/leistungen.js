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
  const labelButtons = document.querySelectorAll(".service-wheel-label-btn");
  const popup = document.getElementById("servicePopup");
  const popupBackdrop = document.getElementById("servicePopupBackdrop");
  const popupClose = document.getElementById("servicePopupClose");
  const popupKicker = document.getElementById("servicePopupKicker");
  const popupTitle = document.getElementById("servicePopupTitle");
  const popupIntro = document.getElementById("servicePopupIntro");
  const popupList = document.getElementById("servicePopupList");
  const popupSubwheelGroup = document.getElementById("servicePopupSubwheel");

  if (!segments.length || !popup) {
    return;
  }

  function setActiveSegment(key) {
    segments.forEach((seg) => {
      seg.classList.toggle(
        "is-active",
        seg.getAttribute("data-service") === key
      );
    });

    labelButtons.forEach((btn) => {
      btn.classList.toggle(
        "is-active",
        btn.getAttribute("data-service") === key
      );
    });
  }

  function openPopup(key) {
    const data = servicesData[key];
    if (!data) return;

    setActiveSegment(key);

    popupKicker.textContent = data.kicker || "Leistungsbereich";
    popupTitle.textContent = data.title;
    popupIntro.textContent = data.intro;

    // Liste
    popupList.innerHTML = "";
    data.bullets.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      popupList.appendChild(li);
    });

    // Sub-Wheel zeichnen
    popupSubwheelGroup.innerHTML = "";
    const r = 70;
    const circumference = 2 * Math.PI * r;
    const segmentFraction = 1 / data.subsegments.length;
    const visible = circumference * segmentFraction * 0.8;
    const gap = circumference * segmentFraction * 0.2;

    data.subsegments.forEach((sub, index) => {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("r", r.toString());
      circle.setAttribute("fill", "none");
      circle.setAttribute("stroke-width", "18");
      circle.setAttribute("stroke-linecap", "round");
      circle.setAttribute("stroke", sub.color || "#103c35");
      circle.setAttribute(
        "stroke-dasharray",
        `${visible.toFixed(2)} ${(circumference - visible).toFixed(2)}`
      );

      const rotation = -90 + (360 * segmentFraction * index);
      circle.setAttribute(
        "transform",
        `rotate(${rotation.toFixed(2)})`
      );
      circle.style.opacity = "0.95";
      circle.style.animation = "serviceSubsegmentIn 0.35s ease-out forwards";
      circle.style.animationDelay = `${index * 80}ms`;

      popupSubwheelGroup.appendChild(circle);
    });

    popup.classList.add("is-open");
  }

  function closePopup() {
    popup.classList.remove("is-open");
    segments.forEach((seg) => seg.classList.remove("is-active"));
    labelButtons.forEach((btn) => btn.classList.remove("is-active"));
  }

  // Hover: nur Highlight
  segments.forEach((seg) => {
    const key = seg.getAttribute("data-service");
    seg.addEventListener("mouseenter", () => {
      setActiveSegment(key);
    });
    seg.addEventListener("mouseleave", () => {
      segments.forEach((s) => s.classList.remove("is-active"));
      labelButtons.forEach((b) => b.classList.remove("is-active"));
    });
    seg.addEventListener("click", () => openPopup(key));
  });

  labelButtons.forEach((btn) => {
    const key = btn.getAttribute("data-service");
    btn.addEventListener("mouseenter", () => setActiveSegment(key));
    btn.addEventListener("mouseleave", () => {
      segments.forEach((s) => s.classList.remove("is-active"));
      labelButtons.forEach((b) => b.classList.remove("is-active"));
    });
    btn.addEventListener("click", () => openPopup(key));
  });

  // Popup schließen
  if (popupBackdrop) {
    popupBackdrop.addEventListener("click", closePopup);
  }
  if (popupClose) {
    popupClose.addEventListener("click", closePopup);
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.classList.contains("is-open")) {
      closePopup();
    }
  });
});

