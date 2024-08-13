const camposFormulario = document.querySelectorAll(".campo")
const botaoEnviar = document.querySelector(".btn-enviar-formulario")

botaoEnviar.addEventListener("click", (event) => {
    event.preventDefault()
    camposFormulario.forEach((input) => {
        if(input.value) {
            input.nextElementSibling.classList.remove("campo-invalido")
            input.classList.add("campo-valido")
        } else {
            input.classList.remove("campo-valido")
            input.classList.add("campo-invalido")
            input.nextElementSibling.classList.add("mostar-campo-obrigatorio")
        }
    })
})