const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.contains("light-theme")
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}

function enableLightMode() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}

function setThemePreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
}

document.onload = setThemePreference();


const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  }
  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});