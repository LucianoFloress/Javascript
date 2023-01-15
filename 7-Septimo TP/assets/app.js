const productos = [
    {id:1, producto:"Samsung J2 Reacondicionado", precio: 9000},
    {id:2, producto:"Motorola E7 Plus Nuevo", precio: 15000}
];

const carrito =[];

const abrirModal = document.querySelector(".btn_a");
const cerrarModal = document.querySelector(".cerrarModal");
const modal = document.querySelector(".modal")

abrirModal.addEventListener("click", (event)=>{
    event.preventDefault();
    modal.showModal();
})

cerrarModal.addEventListener("click", ()=>{
    modal.close();
})


const abrirModal2 = document.querySelector(".btn_b");
const cerrarModal2 = document.querySelector(".cerrarModal2");
const modal2 = document.querySelector(".modal2")

abrirModal2.addEventListener("click", (event)=>{
    event.preventDefault();
    modal2.showModal();
})

cerrarModal2.addEventListener("click", ()=>{
    modal2.close();
})


const formulario = document.querySelector("form")
const nombre = document.querySelector(".formName")
const mail = document.querySelector(".formMail")

formulario.addEventListener("submit", validarFormulario)

function validarFormulario (e){
    e.preventDefault()
    let btnEnviar = document.createElement("div")
    btnEnviar.innerHTML = `<h4 class="btnText">Su nombre de usuario es: ${nombre.value} y le enviaremos la información al correo: ${mail.value}. Muchas gracias!`
    document.body.appendChild(btnEnviar);
}

const boton1 = document.querySelector('.agregarCarrito1');
boton1.addEventListener('click', ()=>{
    const celu1 = JSON.stringify(productos[0])
    localStorage.setItem("Celular reacondicionado", celu1);
})

const boton2 = document.querySelector('.agregarCarrito2');
boton2.addEventListener('click', ()=>{
    const celu2 = JSON.stringify(productos[1])
    localStorage.setItem("Celular nuevo", celu2);
})
