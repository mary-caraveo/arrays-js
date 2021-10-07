const pets = ["cat", "dog", "bat"];

//Ejemplo con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}

console.log("for", includeInArray);

//Ejemplo con includes
const rta = pets.includes("dog");
console.log("includes", rta);

//includes, Indica si un elemento esta o no dentro del array.
//includes, no recibe un => como los demás.
