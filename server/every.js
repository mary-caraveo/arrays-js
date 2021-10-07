const numbers = [1, 30, 49, 29, 10, 13];

//Ejemplo con for
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40) {
        rta = false;
    }
}

console.log('for', rta);

//Ejemplo con every
const rta2 = numbers.every((item) => item <= 40);
console.log('every', rta2);

//Every imprime true o false si todos cumplen con la condición.