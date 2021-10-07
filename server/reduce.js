const totals = [1,2,3,4,5];

//Ejemplo for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}

console.log(sum);

//Ejemplo reduce
const rta = totals.reduce((sum, element) => sum + element, 0);

console.log('rta', rta);

//reduce, agarra un array y lo reduce a un solo valor.