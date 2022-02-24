const menu = document.querySelector('.btn-menu');
const close = document.querySelector('.btn-close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});
