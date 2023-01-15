document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Samsung J2 Prime',
            precio: 15000,
            imagen: '/assets/img/samsung j2 prime.jpg'
        },
        {
            id: 2,
            nombre: 'Motorola E7 Plus',
            precio: 28000,
            imagen: '/assets/img/moto e7 plus.jpg'
        },
        {
            id: 3,
            nombre: 'Xiaomi Redmi Note 8',
            precio: 25000,
            imagen: '/assets/img/xiaomi redmi note 8.jpg'
        },
        {
            id: 4,
            nombre: 'Iphone 14 Pro Max',
            precio: 700000,
            imagen: '/assets/img/iphone 14 pro max.jpg'
        },
        {
            id: 5,
            nombre: 'Samsung S22 Ultra',
            precio: 360000,
            imagen: '/assets/img/s22 ultra.jpg'
        },
        {
            id: 6,
            nombre: 'Iphone Xs',
            precio: 120000,
            imagen: '/assets/img/iphone xs.jpg'
        },
        {
            id: 7,
            nombre: 'Pocophone F3',
            precio: 90000,
            imagen: '/assets/img/poco f3.jpg'
        },
        {
            id: 8,
            nombre: 'Samsung Galaxy Fold 3',
            precio: 400000,
            imagen: '/assets/img/galaxy fold 3.jpg'
        }
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');

            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');

            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;

            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);

            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa}${info.precio}`;

            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('div');
            miNodo.classList.add('carrito');
            miNodo.innerHTML = `
            <img class=imgCarrito src="${miItem[0].imagen}"> ${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'botoncito');
            miBoton.textContent = 'X';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();

    }

    function calcularTotal() { 
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});

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