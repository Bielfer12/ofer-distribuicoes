let menu = document.querySelector('.all')
const closeBtn = document.getElementById('close-button');

function openMenu() {
    // console.log('clicou')
    menu.classList.add('active');
  }

    closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });