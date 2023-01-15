const reparaciones = document.querySelector('.reparaciones')

fetch("/assets/json/data.json")
.then((res)=>res.json())
.then((data)=>{
  data.forEach((reparacion)=>{
    const div = document.createElement("div")
    div.innerHTML=`
        <div class="rep1">
            <h4>${reparacion.nombre1}</h4>
            <p>${reparacion.descripcion1}</p>
        </div>
        <div class="rep2">
            <h4>${reparacion.nombre2}</h4>
            <p>${reparacion.descripcion2}</p>
        </div>
        <div class="rep3">
            <h4>${reparacion.nombre3}</h4>
            <p>${reparacion.descripcion3}</p>
        </div>
        <div class="rep4">
            <h4>${reparacion.nombre4}</h4>
            <p>${reparacion.descripcion4}</p>
        </div>`
        reparaciones.append(div)
  })
})

const soporteTecnico = document.querySelector('.atencionCliente');
soporteTecnico.addEventListener('click', (e)=>{
  e.preventDefault();
  Swal.fire({
        text: "Ingrese su correo electronico para que le podamos brindar soporte técnico",
        input: "email",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
    });
})