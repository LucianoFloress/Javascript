const productos = [
    {id: 1, nombre: "Samsung J2 Reacondicionado", precio: 9000},
    {id: 2, nombre: "Motorola E7 Plus", precio: 15000}
];
const arreglo = [
    {id: 1, nombre: "Módulo", precio: 12000},
    {id: 2, nombre: "Cámara trasera", precio: 8000},
    {id: 3, nombre: "Batería", precio: 5000},
    {id: 4, nombre: "Pin de carga", precio: 4000}
];

let carrito  = [];

let entrada0 = prompt("Bienvenido! Ingrese su nombre de usuario")
let entrada = prompt(`Hola ${entrada0} que desea realizar? \n-Comprar \n-Reparar \n-Nada`)

while (entrada != 'comprar' && entrada != 'reparar' && entrada != 'nada'){
    alert("Por favor ingrese una opcion válida")
    entrada = prompt(`Hola ${entrada0} que desea realizar? \n-Comprar \n-Reparar`)
}

if (entrada == 'nada'){
    alert("Gracias por visitarnos, hasta luego!")
}

while (entrada == 'comprar' || entrada == 'si'){
    let celulares = prompt("Nuestra lista de productos disponibles\n\nSeleccione que dispositivos quiere comprar \n1 - Samsung J2 Reacondicionado $9000\n2 - Motorola E7 Plus $15000");

    if (celulares == '1' || celulares == '2'){
        switch(celulares){
            case "1":
                carrito.push(productos[0])
                break
            case "2":
                carrito.push(productos[1])
                break
            default:
                break
        }
    } else {
        alert("Ingresó una opción inválida")
    }

    entrada = prompt("¿Desea seguir comprando?")
    
    while (entrada == "no"){
        let msg = 'Sus productos son los siguientes:\n'
        carrito.forEach ((x) => {
            msg += x.nombre+' $'+x.precio+'\n'
        })
        alert(msg)
        const total = carrito.reduce((acc, el) => acc + el.precio, 0)
        alert(`El total de su compra es: ${total}`);
        alert(`Muchas gracias por su compra ${entrada0}, lo esperamos en otra oportunidad`);
    break;
    }
}

while (entrada == 'reparar' || entrada == 'si'){
    let arreglos = prompt("Seleccione que elemento desea arreglar \n1 - Módulo $12000\n2 - Cámara trasera $8000\n3 - Batería $5000\n4 - Pin de carga $4000");

    if (arreglos == '1' || arreglos == '2' || arreglos == '3' || arreglos == '4'){
        switch(arreglos){
            case "1":
                carrito.push(arreglo[0])
                break
            case "2":
                carrito.push(arreglo[1])
                break
            case "3":
                carrito.push(arreglo[2])
                break
            case "4":
                carrito.push(arreglo[3])
                break
            default:
                break
        }
    } else {
        alert("Ingresó una opción inválida")
    }

    entrada = prompt("¿Desea comprar algo más?")
    
    while (entrada == "no"){
        let msg1 ='Sus productos son los siguientes:\n'
        carrito.forEach ((c) => {
            msg1 += c.nombre+' $'+c.precio+'\n';
        })
        alert(msg1);
        const total2 = carrito.reduce((acc, el) => acc + el.precio, 0)
        alert(`El total de su compra es: ${total2}`);
        alert(`Muchas gracias por su compra ${entrada0}, lo esperamos en otra oportunidad`);
    break;
    }
    
}

let bienvenida = document.createElement("div")
bienvenida.innerHTML =`<h3>Bienvenido, ${entrada0}!!</h3>`
bienvenida.classList.add('bienvenida')
document.body.appendChild(bienvenida);

let subt = document.createElement("div");
subt.innerHTML = `<h3>Nos especializamos en lo que es reparacion y venta de celulares. Trabajamos con todas las marcas! Samsung, Motorola, Xiaomi, Iphone, etc. No dudes en consultar por cualquier duda. La mejor reparacion al mejor precio.\n</h3>`
subt.classList.add('subt')
document.body.appendChild(subt);

let stockC = document.createElement("div");
stockC.innerHTML = `<h3>Dispositivos disponibles en stock:\n</h3>`
stockC.classList.add('stock')
document.body.appendChild(stockC);
for (let producto of productos){
    let listado1 = document.createElement("div");
    listado1.innerHTML = `<h4>${producto.id} - ${producto.nombre} $${producto.precio}</h4>`;
    listado1.classList.add('listado')
    document.body.appendChild(listado1);
}

let stockR = document.createElement("div");
stockR.innerHTML = `<h3>Arreglo que realizamos por el momento:\n</h3>`
stockR.classList.add('stock')
document.body.appendChild(stockR);
for (let producto of arreglo){
    let listado2 = document.createElement("div");
    listado2.innerHTML = `<h4>${producto.id} - ${producto.nombre} $${producto.precio}</h4>`;
    listado2.classList.add('listado')
    document.body.appendChild(listado2);
}
