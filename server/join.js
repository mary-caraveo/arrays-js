const elements = ['Fire', 'Air', 'Water'];

//Ejemplo con for
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length - 1) {
        rtaFinal = rtaFinal + element;
    } else {
    rtaFinal = rtaFinal + element + separator;
}
}
console.log('for', rtaFinal);

//Ejemplo con join
const rta = elements.join('--');
console.log('join', rta);

//Ejemplo
const title = 'curso de manipulación de arrays';
const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log('', urlFinal);

//join, sirve para unificar todo un array.
//split, separa los elementos con un espacio y los une con join (-).
//toLocaleLowerCase, devuelve todo en minusculas.