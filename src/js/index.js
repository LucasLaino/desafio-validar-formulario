const input = document.querySelectorAll(".input");
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");
const botao = document.getElementById("btn-enviar-formulario");

function erro(index) {
    input[index].classList.add("campo-nao-preenchido");
    campoObrigatorio[index].style.display = "block";
}

function removerErro(index) {
    input[index].classList.remove("campo-nao-preenchido");
    input[index].classList.add("campo-preenchido");
    campoObrigatorio[index].style.display = "none";
}

function validarNome() {
    if(input[0].value === "") {
        erro(0);
    }else {
        removerErro(0);
    }
}

function validarEmail() {
    if(input[1].value === "") {
        erro(1);
    }else {
        removerErro(1);
    }
}

function validarTelefone() {
    if(input[2].value === "") {
        erro(2);
    }else {
        removerErro(2);
    }
}

function validarMensagem() {
    if(input[3].value === "") {
        erro(3);
    }else {
        removerErro(3);
    }
}

botao.addEventListener("click", (event) => {
    event.preventDefault();
    validarNome();
    validarEmail();
    validarTelefone();
    validarMensagem();
})