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