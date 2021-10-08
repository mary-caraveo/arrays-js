const users = [
  { userId: 1, userName: "Tom", attributes: ["Nice", "cute"] },
  { userId: 2, userName: "Mike", attributes: ["Lovely"] },
  { userId: 3, userName: "Nico", attributes: ["Nice", "cool"] },
];

//Ejemplo con flay y map
const rta = users.map((user) => user.attributes).flat();
console.log("map-flat", rta);

//Ejemplo con flatMap
const rta2 = users.flatMap((user) => user.attributes);
console.log("flatMap", rta2);

//Ejemplo
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const dates = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});

console.log(dates);

//flatmap, tiene la función entre un flat de alinear todo el array
// y un map de irlo transformando a medida que lo va aplanando.
