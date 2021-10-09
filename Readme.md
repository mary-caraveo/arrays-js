# Manipulación de Arrays en JavaScript

## Fundamentos del manejo de arrays

* **ForEach**
  * El metodo **forEach()**, realiza un recorrido de los elementos de un array.
* **Map**
  * El método **map()**, realiza la transformación de cada elemento en un nuevo array.
* **Map Reloaded**
  * Cuando trabajamos con objetos, **map()** y retornamos el mismo objeto, estamos copiando la referencia en memoria que tiene el objeto original que le aplicamos el **map()**. Esto provoca que como estamos modificando la referencia en memoria, el array original también sea modificado. Es decir, por más que **map()** sea inmutable en este punto estamos copiando la referencia en memoria y por eso hace el cambio en el original. Para evitarlo y evitar la referencia en memoria podemos realizar una copia, utilizamos el spread operator de ES6, donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.
* **Filter**
  * El método **filter()**, retorna un nuevo array de elementos que cumplan con la condición.
* **Reduce**
  * El método **reduce()**, toma un array y lo reduce a un solo valor.
* **Reduce Reloaded**
  * Devuelve un solo objeto, aunque contenga “muchos elementos” sigue siendo un solo elemento de tipo objeto, y es por eso que se dice que **reduce()** solo devuelve un único valor.

## Métodos en JavaScript

* **Some**
  * El método **some()** comprueba si al menos un elemento del array cumple con la condición, devuelve *true* o *false*.
* **Every**
  * Devuelve *true* o *false*, sí todos los elementos del array cumplen la condición.
* **Find y FindIndex**
  * El método **find()** devuelve el primer elemento del array que cumpla con la condición dada o devuelve *undefined* si es que no encuentra ningún elemento que cumpla los requisitos solicitados.
  * El método **findIndex()** devuelve el índice del primer elemento de un array que cumpla con la condición dada. En caso contrario devuelve -1.
* **Includes**
  * El método **includes()** determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
* **Join**
  * El método **join()** une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.
* **Concat**
  * El método **concat()** se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
* **Flat**
  * El método **flat()** crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
* **FlatMap**
  * El método **flatMap()** primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz.
* **Mutable functions**
  * Mutable es un tipo de variable que se puede cambiar. En JavaScript, solo los objetos y las matrices son mutables, no valores primitivos.

  * Un objeto mutable es un objeto cuyo estado puede modificarse después de su creación.

  * Los inmutables son los objetos cuyo estado no se puede cambiar una vez creado el objeto.

  *  Las cadenas y los números son inmutables.
* **Sort**
  * El método **sort()** ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

> Librería para saber si dos fechas colisionan entre sí.
>
> `npm i date-fns`

## Referencia
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
