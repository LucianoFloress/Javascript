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

if (entrada == 'comprar'){
    alert("Nuestra lista de productos disponibles");
    let celusVenta = productos.map ((a) => a.id+" - "+a.nombre+" $"+a.precio+"\n");
    alert(celusVenta);
} else if (entrada == 'reparar'){
    alert("Por favor indique que falla quiere reparar");
    let celArreglo = arreglo.map ((a) => a.id+" - "+a.nombre+" $"+a.precio+"\n");
    alert(celArreglo);
} else if (entrada == 'nada'){
    alert("Gracias por visitarnos, hasta luego!")
};

while (entrada == 'comprar' || entrada == 'si'){
    let celulares = prompt("Seleccione que dispositivos quiere comprar \n1 - Samsung J2 Reacondicionado $9000\n2 - Motorola E7 Plus $15000");
    let precio1 = 0

    if (celulares == '1' || celulares == '2'){
        switch(celulares){
            case "1":
                precio1 = 9000
                break
            case "2":
                precio1 = 15000
                break
            default:
                break
        }
    carrito.push({celulares, precio1})
    } else {
        alert("Ingresó una opción inválida")
    }

    entrada = prompt("¿Desea seguir comprando?")
    
    while (entrada == "no"){
        carrito.forEach ((x) => {
            alert(`Producto: ${x.celulares}  Precio: ${x.precio1}`)
        })
        const total = carrito.reduce((acc, el) => acc + el.precio1, 0)
alert(`el total de su compra es: ${total}`);
alert(`Muchas gracias por su compra ${entrada0}, lo esperamos en otra oportunidad`);
    break;
    }
}

while (entrada == 'reparar' || entrada == 'si'){
    let arreglos = prompt("Seleccione que elemento desea arreglar \n1 - Módulo $12000\n2 - Cámara trasera $8000\n3 - Batería $5000\n4 - Pin de carga $4000");
    let precio2 = 0

    if (arreglos == '1' || arreglos == '2' || arreglos == '3' || arreglos == '4'){
        switch(arreglos){
            case "1":
                precio2 = 12000
                break
            case "2":
                precio2 = 8000
                break
            case "3":
                precio2 = 5000
                break
            case "4":
                precio2 = 4000
                break
            default:
                break
        }
    carrito.push({arreglos, precio2})
    } else {
        alert("Ingresó una opción inválida")
    }

    entrada = prompt("¿Desea comprar algo más?")
    
    while (entrada == "no"){
        carrito.forEach ((c) => {
            alert(`Producto: ${c.arreglos}  Precio: ${c.precio2}`)
        })
        const total2 = carrito.reduce((acc, el) => acc + el.precio2, 0)
alert(`el total de su compra es: ${total2}`);
alert(`Muchas gracias por su compra ${entrada0}, lo esperamos en otra oportunidad`);
    break;
    }
    
}