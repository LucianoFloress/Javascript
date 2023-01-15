const endForm = document.querySelector('.endForm')

const div = document.createElement("div")
    div.innerHTML=`
    <h4 class="subtitulo">Datos de contacto</h4>
    <input type="email" placeholder=" Email" class="inputs">    
    <h4 class="subtitulo">Datos de facturación</h4>
    <select class="selects">
        <option value="AR">Argentina</option>
        <option value="BR">Brasil</option>
        <option value="CL">Chile</option>
        <option value="CO">Colombia</option>
        <option value="MX">Mexico</option>
        <option value="DE">Alemania</option>
        <option value="SA">Arabia Saudita</option>
        <option value="EU">Estados Unidos</option>
    </select>
    <input type="text" placeholder=" DNI o CUIL" class="inputs1">    
    <p class="parrafo">Persona que pagará el pedido</p>
    <input type="text" placeholder=" Nombre" class="inputs1">
    <input type="text" placeholder=" Apellido" class="inputs1">
    <input type="text" placeholder=" Teléfono" class="inputs1">  
    <p class="parrafo">Domicilio de la persona que pagará el pedido</p>
    <input type="text" placeholder=" Calle" class="inputs1">
    <input type="text" placeholder=" Número"class="inputs1">
    <input type="text" placeholder=" Departamento (Opcional)" class="inputs1">
    <input type="text" placeholder=" Barrio (Opcional)" class="inputs1">
    <input type="text" placeholder=" Ciudad" class="inputs1">
    <input type="text" placeholder=" Código Postal" class="inputs1">
    <select class="selects">
        <option value="Capital Federal">Capital Federal</option>
        <option value="Gran Buenos Aires">Gran Buenos Aires</option>
        <option value="Catamarca">Catamarca</option>
        <option value="Chaco">Chaco</option>
        <option value="Chubut">Chubut</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Corrientes">Corrientes</option>
        <option value="Entre Ríos">Entre Ríos</option>
        <option value="Formosa">Formosa</option>
        <option value="Jujuy">Jujuy</option>
        <option value="La Pampa">La Pampa</option>
    </select>
    `
    endForm.append(div);
;

const compraFinalizada = document.querySelector('#boton-finalizar');
compraFinalizada.addEventListener('click', (e)=>{
    e.preventDefault();
    Swal.fire(
        '¡Muchas gracias!',
        'Pronto recibirá sus productos',
        'success'
    )
    setTimeout(function(){
        window.location.href = "./index.html"
    }, 4000);
})

const finalizarCompra = document.querySelector('#boton-finalizar');

finalizarCompra.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.clear();
})