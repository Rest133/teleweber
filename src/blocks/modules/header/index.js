function toggleMobileMenu() {
    document.querySelector('header').classList.toggle('active')
    document.body.classList.toggle('blocked')
}

document.querySelector('.menu-burger').onclick = toggleMobileMenu

document.querySelector('button[data-change-lang]').addEventListener('click', toggleMobileMenu)