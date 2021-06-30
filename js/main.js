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
};

const closeMenu = () => {
  navbarContainer.classList.remove('navbar__container--active');
};

// Events

navbarToggler.addEventListener('click', toggleMenu);
navbarItemActive.addEventListener('click', closeMenu);

// Event for Scrolling

let scrolling = false;

window.addEventListener('scroll', () => {
  scrolling = true;
});

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    if (window.scrollY === 0) {
      navbar.classList.remove('navbar--scrolled');
      navbarTogglerIcon.classList.remove('toggler--scrolled');
    } else {
      navbar.classList.add('navbar--scrolled');
      navbarTogglerIcon.classList.add('toggler--scrolled');
    }
  }
}, 300);

// DYNAMIC SECTION FOR GUESTS
// Guests Object

const guestsArr = [
  {
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/guest-1.webp',
  }, {
    name: 'Jhon Doe',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/guest-1.webp',
  }, {
    name: 'Annya Taylor Chester',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/guest-1.webp',
  }, {
    name: 'Yin Lao',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, animi.',
    imgSrc: './assets/img/guests/guest-1.webp',
  }
]

// Selectors

const guestsList = document.querySelector('.guests__list');

// Function

const appendGuests = () => {
  for (let i = 0; i < guestsArr.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = 
      `<div class="guests__img-container">
        <span class="guests__decor-img"></span>
        <img src="${guestsArr[i].imgSrc}" alt="Photo of the first guest" class="guests__img">
      </div>
      <div class="guests__info">
        <hgroup>
          <h3 class="guests__name">${guestsArr[i].name}</h3>
          <h4 class="guests__role">${guestsArr[i].role}</h4>
        </hgroup>
        <span class="title-decor title-decor--small"></span>
        <p class="guests__desc">${guestsArr[i].desc}</p>
      </div>`;
    li.classList.add('guests__card')
    guestsList.appendChild(li);
  }  
}

// Call

window.onload = appendGuests;