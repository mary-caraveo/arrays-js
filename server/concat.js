const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

//Ejemplo con for
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

//Ejemplo con concat
const rta = elements.concat(othersElements);
console.log('concat', rta);

//Ejemplo
const rta2 = [...elements, ...othersElements];
console.log('...', rta2);

//Ejemplo
// const rta3 = [...elements,'random'];
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

//
// elements.push(othersElements);
const rta4 = elements.push(...othersElements);
console.log('elements', rta4);


//concat, es un metodo que nos sirve para fusionar arrays.
//concat, es inmutable.