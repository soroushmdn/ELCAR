/*@@@@@@@@@@@@@@ show menu @@@@@@@@@@@@@@*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

/*@@@@@@@@@@@@@@ remove menu @@@@@@@@@@@@@@*/

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*@@@@@@@@@@@@@@ change header background @@@@@@@@@@@@@@*/

window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

//  @@@@@@@@@@@@@@@@@@ scrollup @@@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 100) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2500);
};

//  @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const popularSwiper = new Swiper('.popular__swiper', {
  spaceBetween: 23,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    765: {
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 40,
    },
  },
});

/*@@@@@@@@@@@@@@@@@ kunkalabs.com/mixitup/  @@@@@@@@@@@@@@@@@*/

let mixerFeatured = mixitup('.featured__container', {
  selectors: {
    target: '.featured__card',
  },
  animation: {
    duration: 300,
  },
});

/* active-featured class for filters button */
const featuredFilters = document.querySelectorAll('.featured__filter');

featuredFilters.forEach((f) => {
  f.addEventListener('click', activeFeatured);
});

function activeFeatured() {
  featuredFilters.forEach((f) => {
    f.classList.remove('active-featured'),
      this.classList.add('active-featured');
  });
}

//  @@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 400,
});

sr.reveal(
  `.home__container ,.popular__swiper,.features__car-img ,.featured__filters,.featured__container `
);
sr.reveal(`.features__card `, {
  interval: 200,
  delay: 800,
});

sr.reveal(`.footer__content `, {
  interval: 200,
});

sr.reveal(`.about__group,.offer__data`, { origin: 'left' });
sr.reveal(`.about__data ,.offer__img`, { origin: 'right' });
