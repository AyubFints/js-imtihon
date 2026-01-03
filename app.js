const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.contener_a');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});