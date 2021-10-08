const letters = ['a', 'b', 'c'];

//Ejemplo con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

//Ejemplo con forEach
letters.forEach(item => console.log('forEach', item))

//forech, nos sirve para realizar un recorrido de los elementos de un array