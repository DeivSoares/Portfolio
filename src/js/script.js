let btn = document.querySelector('button.btn-menu');
let options = document.querySelector('ul#flexlist-mobile');

btn.addEventListener('click', function () {
    Menu()
});

options.addEventListener('click', function () {
    Menu()
});


function Menu() {
    let menu = document.querySelector('div.flexlist-div');
    if (menu.classList.contains('opened')) {
        menu.classList.remove('opened');
    } else {
        menu.classList.add('opened');
    }

}