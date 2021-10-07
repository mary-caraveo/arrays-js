// Ejemplo con for
const letters = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('original', letters);
console.log('new', newArray);

//Ejemplo con map
const letters = ['a', 'b', 'c'];
const newArray = letters.map(item => item + '++')

console.log('original', letters);
console.log('new', newArray);

//Map realiza la transformación de cada elemento con un nuevo array.
//Map es inmutable, no modifica el array original si no que crea uno nuevo.
//Una vez que se corra map va a obtener siempre el mismo numero de elementos.