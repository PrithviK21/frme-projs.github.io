const menubtn = document.querySelector('.menu-btn');

menubtn.addEventListener('click', function() {
    let menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
})