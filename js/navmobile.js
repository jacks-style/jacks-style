const OPEN_NAV_MOBILE = document.querySelector(".nav-mobile__btn--open"); // Przycisk otwierania
const NAV_MOBILE_CONTAINER = document.querySelector(".nav-mobile--opened"); // Otwarta nawigacja mobilna
const CLOSE_NAV_MOBILE = document.querySelector(".nav-mobile__btn--close"); // Przycisk zamykania
const NAV_MOB_LIST = document.querySelectorAll(".nav-mobile--opened li a"); // linki do fragmentów strony

// Otwieranie
function Open_nav_mob() {
  NAV_MOBILE_CONTAINER.style.display = "block";
}

OPEN_NAV_MOBILE.addEventListener("click", Open_nav_mob);

// Zamykanie przyciskiem zamykania
function Close_nav_mob() {
  NAV_MOBILE_CONTAINER.style.display = "none";
}

CLOSE_NAV_MOBILE.addEventListener("click", Close_nav_mob);

// Zamykanie linkami do fragmentów strony
NAV_MOB_LIST.forEach((e) => {
  e.addEventListener("click", Close_nav_mob);
});
