let click = new Event('click')
let buttonSVG = document.getElementById('menu-button') //OK
let lista = document.getElementById('flexlist-mobile')
let button = document.getElementById('navbar-mobile-button') // OK
let menu = document.getElementById('mobile') // OK

button.addEventListener('click', function () {
    button.style.display = 'none'
    menu.style.display = 'flex'
})

lista.addEventListener('click', function () {
    button.style.display = 'flex'
    menu.style.display = 'none'
})

lista.addEventListener('click', function () {
    lista.dispatchEvent(click)
})