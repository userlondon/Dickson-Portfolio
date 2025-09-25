'use strict';

// //////////////////////////////////////////////////////////////////////////////
// STICKY

const heroSection = document.getElementById('home');
const body = document.body;

const obs = new IntersectionObserver(
  entries => {
    body.classList.toggle('sticky', !entries[0].isIntersecting);
  },

  {
    // viewport
    root: null,
    threshold: 0,
    rootMargin: '-1px',
  }
);
obs.observe(heroSection);

// //////////////////////////////////////////////////////////////////////////////
// NAVIGATION
const navChild = document.querySelectorAll('.nav_list li');

if (navChild.length > 0) {
  navChild[0].classList.add('active');
}

navChild.forEach(child => {
  child.addEventListener('click', function () {
    // first remove active class from all nav items
    navChild.forEach(i => i.classList.remove('active'));
    // add active to each of them when click
    this.classList.add('active');
  });
});

// MOBILE NAVIGATION

const navIcons = document.querySelectorAll('.link-icon');

if (navIcons.length > 0) {
  navIcons[0].classList.add('current');
}

navIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    navIcons.forEach(l => l.classList.remove('current'));

    this.classList.add('current');
  });
});

// //////////////////////////////////////////////////////////////////////////////
// FORM CONTACT
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || tel === '' || message === '') {
    alert('Please fill in all spaces');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent successfully`);

  contactForm.reset();
});

// //////////////////////////////////////////////////////////////////////////////
// OVERLAY
// const thumb = document.getElementById('thumb');
const thumb = document.querySelectorAll('.thumb');
const overlay = document.getElementById('overlay');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.getElementById('close');

thumb.forEach(img => {
  img.addEventListener('click', () => {
    fullImage.src = img.src; //load same image (can be bigger version)
    overlay.style.display = 'flex';
  });
});

// close when clicking x or esc
closeBtn.addEventListener('click', function () {
  overlay.style.display = 'none';
});

// close when clicked outside image
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// or
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    overlay.style.display = 'none';
  }
});

// IMAGES
const imgLoad = document.querySelectorAll('.lazy');

imgLoad.forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('loaded');
  });
});
