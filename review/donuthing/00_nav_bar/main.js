const sidemenu = document.querySelector('.nav_sidemenu');
const menu = document.querySelector('.nav_menu');
const share = document.querySelector('.nav_share');

sidemenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  share.classList.toggle('active');
});
