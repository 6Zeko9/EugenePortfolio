function app() {
    const buy = document.querySelectorAll('h3.Buy')
    const TovarNameText = document.querySelector('.name').textContent;
    const Cena = document.querySelector('.Cena').textContent;
    buy.forEach((buy) => {
        buy.addEventListener('click', () => {
            localStorage.setItem('myCat', TovarNameText);
        })
    })
}
app()