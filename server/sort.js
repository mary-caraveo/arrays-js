//
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

//
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);

//
const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

words.sort((a, b) => a.localeCompare(b));
console.log(words);

//
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2021, 4, 1, 15),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 10),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2021, 3, 1, 20),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 5, 1, 8),
  },
];

//
orders.sort((a, b) => b.total - a.total);
console.log(orders);

//Reto
orders.sort((a, b) => b.date.getTime() - a.date.getTime());
console.log({ orders });

//sort es un metodo para realizar ordenamiento dentro de los arrays.
//sort, es mutable del array original
