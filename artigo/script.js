const menu = document.getElementById('menuIcon');

menu.addEventListener('click', () => {
    if(menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
    } else {
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
    }
});