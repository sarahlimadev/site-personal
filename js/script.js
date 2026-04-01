const btnMenu = document.querySelector('.btn-menu-mobile');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

const linksMenu = document.querySelectorAll('.menu a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
    });
});