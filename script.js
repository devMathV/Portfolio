function mudouTamanho() {
    if (window.innerWidth >= 705) {
        menu.style.display = 'flex'
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
    } else {
        menu.style.display = 'none'
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
}

function clickItem() {
    if (menu.style.display = 'block' && window.innerWidth <= 705) {
        menu.style.display = 'none'
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
}

function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
    } else {
        menu.style.display = 'block'
        menuIcone.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
}

const navLinks = document.querySelectorAll('ul#menu a.link');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});