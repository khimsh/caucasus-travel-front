'use strict';

// ჰედერის ფონის ფერის ცვლილება
if (document.querySelector('.header--fixed')) {
  const header = document.querySelector('.header--fixed');

  document.addEventListener('scroll', () => {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      header.classList.add('header--colored');
    } else {
      header.classList.remove('header--colored');
    }
  });
}

// მობილური ნავიგაცია
const nav = document.querySelector('[data-nav]');
const openNavBtn = document.querySelector('[data-open-nav]');
const closeNavBtn = document.querySelector('[data-close-nav]');

openNavBtn.addEventListener('click', () => {
  nav.style.transform = 'scaleX(1)';
});

closeNavBtn.addEventListener('click', () => {
  nav.style.transform = 'scaleX(0)';
});

// დროფდაუნი
if (document.querySelector('[data-dropdown]')) {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('[data-dropdown-trigger]');
    const icon = trigger.querySelector('svg');
    const content = dropdown.querySelector('[data-dropdown-content]');
    const height = dropdown.querySelector(
      '[data-dropdown-height]'
    ).offsetHeight;

    trigger.addEventListener('click', () => {
      if (content.offsetHeight !== 0) {
        content.style.maxHeight = `0px`;
        icon.style.transform = `rotate(0deg)`;
      } else {
        content.style.maxHeight = `${height}px`;
        icon.style.transform = `rotate(180deg)`;
      }
    });
  });
}
