const numbers = [1, 30, 49, 29, 10, 13];

//Ejemplo con for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break;
  }
}

console.log("for", rta);

//Ejemplo con find
const rta2 = numbers.find((item) => item === 30);
console.log("find", rta2);

//Ejemplo
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id === '🍔');
console.log("find", rta3);

//Ejemplo
const rta4 = products.findIndex((item) => item.id === '🍔');
console.log("findIndex", rta4);

//find solo retorna un objeto que cumpla con la condición,
//cuando no encuenta el elemento devuelve un undefine.

//findIndex busca la posición de ese elemento,
// si no encuentra el elemento retorna un -1.
