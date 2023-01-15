let final = 0

let nota1 = Number(prompt("Ingrese la nota del primer trimestre"));
let nota2 = Number(prompt("Ingrese la nota del segundo trimestre"));
let nota3 = Number(prompt("Ingrese la nota del tercer trimestre"));

for(let i = 1; i <= nota1 ; i++){

    function notas (nota1, nota2, nota3){
        final = (nota1 + nota2 + nota3) / 3;
    }
    notas(nota1, nota2, nota3);
    break;
}

if(final >= 6){
        alert(`¡La nota final de todo el año es: ${final} y estás aprobado! =)`);
}
else{
    alert(`¡La nota final de todo el año es: ${final} y estás desaprobado! =()`)
}
