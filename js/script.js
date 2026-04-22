(() => {
  const storageKey = "mittenederPreferredLanguage";
  const currentLanguage = document.documentElement.lang === "en" ? "en" : "de";

  const getPreferredLanguage = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  };

  const setPreferredLanguage = (language) => {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      // Browsing can continue normally if localStorage is unavailable.
    }
  };

  document.addEventListener("click", (event) => {
    const languageSwitch = event.target.closest(".language-switch");

    if (!languageSwitch) {
      return;
    }

    const targetLanguage = languageSwitch.getAttribute("hreflang");

    if (targetLanguage === "de" || targetLanguage === "en") {
      setPreferredLanguage(targetLanguage);
    }
  });

  if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
    return;
  }

  const normalizedPath = window.location.pathname.replace(/\/+$/, "/");
  const isGermanHome =
    currentLanguage === "de" &&
    (normalizedPath === "/" || normalizedPath.endsWith("/index.html"));

  if (!isGermanHome) {
    setPreferredLanguage(currentLanguage);
    return;
  }

  const userAgent = navigator.userAgent || "";
  const isBot =
    /bot|crawler|spider|crawling|googlebot|bingbot|duckduckbot|slurp|yandex|baiduspider|facebookexternalhit|twitterbot|linkedinbot/i.test(
      userAgent
    );

  if (isBot) {
    return;
  }

  const preferredLanguage = getPreferredLanguage();
  const browserLanguage =
    (navigator.languages && navigator.languages[0]) || navigator.language || "";
  const shouldUseEnglish =
    preferredLanguage === "en" ||
    (!preferredLanguage && browserLanguage.toLowerCase().startsWith("en"));

  if (shouldUseEnglish) {
    setPreferredLanguage("en");
    window.location.replace(`/en/${window.location.search}${window.location.hash}`);
    return;
  }

  setPreferredLanguage("de");
})();

const menuControl = document.getElementById("menu-control");
const nav = document.getElementById("menu");
const iconBase = menuControl && menuControl.getAttribute("src").includes("../")
  ? "../assets/icons/"
  : "assets/icons/";

menuControl.addEventListener("click", () => {
  nav.classList.toggle("menu-open");

  if (nav.classList.contains("menu-open")) {
    menuControl.src = `${iconBase}close.svg`;
    document.body.style.overflow = "hidden";
  } else {
    menuControl.src = `${iconBase}menu.svg`;
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
