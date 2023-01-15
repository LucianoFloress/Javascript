let total = 0

let nota1 = prompt("Ingrese la nota del primer trimestre");
let nota2 = prompt("Ingrese la nota del segundo trimestre");
let nota3 = prompt("Ingrese la nota del tercer trimestre");

const ArrayNota1 = ["Primer trimestre"];
ArrayNota1.push(`La nota del primer trimestre es: ${nota1}.`);
console.log(ArrayNota1)

const ArrayNota2 = ["Segundo trimestre"];
ArrayNota2.push(`La nota del segundo trimestre es: ${nota2}.`);
console.log(ArrayNota2)

const ArrayNota3 = ["Tercer trimestre"];
ArrayNota3.push(`La nota del tercer trimestre es: ${nota3}.`);
console.log(ArrayNota3)

while (nota1 != 'ESC' && nota1 != 'esc'){
    total += Number(nota1);
    function suma (total){
        return total / 3;
        }
        nota1 = prompt("Ingrese esc para interrumpir"); 
}
alert(`Tu nota final es: ${suma(total)}`);