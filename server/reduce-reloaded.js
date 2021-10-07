//Ejemplo 1
const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(rta);

//Ejemplo 2

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(rta2);

//Reto
const items = [
  1, 2, 5, 8, 1, 2, 3, 5, 9, 7, 7, 5, 2, 3, 10, 2, 5, 4, 6, 7, 2, 2, 6, 8, 9,
];

const reduceReloaded = items.reduce(
  (obj, item) => {
    if (item <= 5) {
      obj["1-5"] += 1;
    } else if (item <= 8) {
      obj["6-8"] += 1;
    } else {
      obj["9-10"] += 1;
    }
    return obj;
  },
  {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
  }
);

console.log(reduceReloaded);
