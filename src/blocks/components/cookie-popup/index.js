function cookieHandler() {
    const cookiePopup = document.querySelector('.popup.cookie')
    if (!cookiePopup) return
    if (localStorage.getItem('twCookie') === 'y') cookiePopup.classList.remove('active')
    document.querySelector('.cookie__btn').onclick = () => {
        cookiePopup.classList.remove('active')
        localStorage.setItem('twCookie', 'y')
    }
}

cookieHandler()