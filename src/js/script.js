let btn = document.querySelector('button.btn-menu');
let options = document.querySelector('ul#flexlist-mobile');
let submit = document.querySelector('input[type="submit"]');

btn.addEventListener('click', function () {
    Menu()
});

options.addEventListener('click', function () {
    Menu()
});

submit.addEventListener('click', function(){
    Alertar();
})


function Menu() {
    let menu = document.querySelector('div.flexlist-div');
    if (menu.classList.contains('opened')) {
        menu.classList.remove('opened');
    } else {
        menu.classList.add('opened');
    }

}



function Alertar(){
    if (checarNome_TxtArea() == true && checarEmail() == true) {
        alert("Email enviado com sucesso!")
        console.log("As duas funções são True")
    }
}

function checarNome_TxtArea(e){
    let nome = document.querySelector("input#inome")
    let e_mail = document.querySelector("input#iemail")
    let msg = document.querySelector("textarea#imsg")

    if(nome.value == "" && msg.value == ""){
        e.preventDefault();
        console.log("checarNome_TxtArea = falso")
        return false;
    }else{
        console.log("checarNome_TxtArea = true")
        return true;
        checarEmail()
    }
}

function checarEmail() {
    if(checarNome_TxtArea() == true){
        if (document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 || document.forms[0].email.value.indexOf('.') == -1) {
            alert("Por favor, informe um email válido!");
            console.log("checarEmail = falso")
            return false;
        }else{
            console.log("checarEmail = true")
            return true;
        }
    }
}