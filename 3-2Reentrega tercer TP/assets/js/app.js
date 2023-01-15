function login(){
    let usuario = prompt("Ingrese su nombre de usuario")
    let contraseña = prompt("Ingrese la contraseña")

    if(usuario == 'Lautaro' || usuario == 'lautaro' && contraseña == '123'){
        alert(`Bienvenido ${usuario}!`)

        const notas = [];
        let nota = Number(prompt("ingrese las notas que quiere promediar o esc para finalizar"));

        while (!isNaN(nota)) {
        notas.push(nota);
        nota = Number(prompt("ingrese más notas o esc para finalizar"));
        }

        let suma = notas.reduce(function (e, p) {
        return (e + p);
        });

        resultado = suma / notas.length
        
        alert(`${usuario}, el promedio de las notas es: ${resultado.toFixed(2)}`);

    } else{
        alert("Verifique los datos ingresados")
        login();
    }   
}

login();