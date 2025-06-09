"use strict";

/* DOM Elements */
const body = document.body;
const button = document.getElementById("toggle-theme");
const label = document.getElementById("strong-text");

/* Themes */
const themes = {
  light: {
    name: "Light",
    cssClass: "light-theme",
  },
  dark: {
    name: "Dark",
    cssClass: "dark-theme",
  },
};

/* EventListener - Document - DOMContentLoaded */
document.addEventListener("DOMContentLoaded", () => {
  /* Get Current Theme */
  let currentTheme = JSON.parse(localStorage.getItem("theme"));

  /* Set Default Light Theme */
  currentTheme = currentTheme === null ? themes.light : currentTheme;

  /* Set Body Class */
  body.classList.add(currentTheme.cssClass);

  /* Set Label Text */
  label.innerText = currentTheme.name;

  /* Set Current Theme in localStorage */
  localStorage.setItem("theme", JSON.stringify(currentTheme));
});

/* EventListener - Button - Click */
button.addEventListener("click", function () {
  /* Get Current Theme */
  let currentTheme = JSON.parse(localStorage.getItem("theme"));

  /* Change Dark or Light Theme */
  currentTheme =
    currentTheme.name === themes.light.name ? themes.dark : themes.light;

  /* Remove Body Classes */
  document.body.classList.remove(themes.dark.cssClass, themes.light.cssClass);

  /* Set Body Class */
  document.body.classList.add(currentTheme.cssClass);

  /* Set Label Text */
  label.innerText = currentTheme.name;

  /* Set Current Theme in localStorage */
  localStorage.setItem("theme", JSON.stringify(currentTheme));
});
