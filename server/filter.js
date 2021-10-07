const words = ["spray", "limit", "elite", "exuberant"];

//Ejemplo 1 for
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}

console.log("newArray", newArray);
console.log("Original", words);

//Ejemplo 2 filter
const rta = words.filter((item) => item.length >= 6);

console.log("rta", rta);
console.log("Original", words);

//Ejemplo 3 filter
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 260,
    delivered: false,
  },
];

const rta3 = orders.filter((item) => item.delivered);
console.log("rta3", rta3);

//Ejemplo 4
const rta4 = orders.filter((item) => item.delivered && item.total >= 100);
console.log("rta4", rta4);

//Ejemplo 5
const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search("Nico"));

//Ejemplo
const users = [
  {
    name: "Nicolas",
    lastname: "Aldama",
    age: "27",
  },
  {
    name: "Zulema",
    lastname: "hernandez",
    age: "27",
  },
  {
    name: "Santiago",
    lastname: "Corzo",
    age: "32",
  },
  {
    name: "Valentina",
    lastname: "Jimenez",
    age: "29",
  },
  {
    name: "Nicolas",
    lastname: "Vazquez",
    age: "30",
  },
];

const search2 = (query) => {
  return users.filter((item) => {
    return (
      item.name.includes(query) ||
      item.lastname.includes(query) ||
      item.age.includes(query)
    );
  });
};

console.log(search2("Vazquez"));

//filter retorna un array de elementos que cumplan con la condición.
