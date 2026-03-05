console.log("MENU JS CARREGOU");

document.addEventListener('DOMContentLoaded', () => {

  const menu = document.querySelector('.all');
  const openBtn = document.getElementById('menu');
  const closeBtn = document.getElementById('close-button');

  function openMenu() {
    menu.classList.add('active');
  }

  function closeMenu() {
    menu.classList.remove('active');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

});