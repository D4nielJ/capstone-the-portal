// N A B V A R
// Selectors

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar__toggler-container');
const navbarTogglerIcon = document.querySelector('.navbar__toggler');
const navbarContainer = document.querySelector('.navbar__container');
const navbarItemActive = document.querySelector('.navbar__item--active');

// functions

const toggleMenu = () => {
  navbarContainer.classList.toggle('navbar__container--active');
  navbarTogglerIcon.classList.toggle('toggler--active');
  body.classList.toggle('body--overflow');
}

const closeMenu = () => {
  navbarContainer.classList.remove('navbar__container--active');
}

// Events

navbarToggler.addEventListener('click', toggleMenu);
navbarItemActive.addEventListener('click', closeMenu);