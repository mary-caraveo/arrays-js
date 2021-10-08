const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Ejemplo con for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}

console.log("for", newArray);

//Ejemplo con flat
const matrizTwo = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const rta = matrizTwo.flat(3);
console.log("flat", rta);

//
//Ejemplo con flat
const matrizThree = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2, 5, 6, [54, 34]], 25, 26]],
    [7, 8, 9],
  ];

function flatArray(item, res = []) {
    if (!Array.isArray(item)) {
        return res.push(item);
    }else{
        item.forEach((element) => {
            flatArray(element, res);
        });
    }
        return res;
    }

    console.log(flatArray(matrizThree));

//flat, se trata de manipular arrays dentro de un array,
//para volver un array unico a una sola línea.
