const bars = document.querySelector('header .container > div:nth-child(2)');
const sideMenu = document.querySelector('#side-menu');
const closeMenuBtn = document.querySelector('#side-menu .right i');

bars.addEventListener('click', e => {
  sideMenu.classList.add('show');
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', e => {
  sideMenu.classList.remove('show');
  document.body.style.height = 'auto';
  document.body.style.overflow = 'auto';
});