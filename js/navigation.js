//Menu para movil
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
//funcion alert al enviar el formulario
function showAlert(){


    swal("Gracias Capo", "Intentaré responderte lo antes posible", "success");

}showAlert();