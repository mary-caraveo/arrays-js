const letters = ['a', 'b', 'c'];

//Opción 1
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

//Opción 2
letters.forEach(item => console.log('forEach', item))