document.querySelector('.menu-burger').onclick = () => {
    document.querySelector('header').classList.toggle('active')
    document.body.classList.toggle('blocked')
}
