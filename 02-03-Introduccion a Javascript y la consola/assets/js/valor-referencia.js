//Copiar objetos en JavaScript

/*A diferencia de los datos primitivos (string, number…), los objetos en JavaScript se copian por referencia. Cuando a una variable le asignamos un objeto ya creado anteriormente, en realidad no estamos haciendo una copia del valor idéntico de este objetos, si no que estamos apuntando a él. Es lo que se conoce como copia por referencia, y también se aplica en otros casos, como con los arrays y las funciones.

La consecuencia de este tipo de copia es que si modificamos el objeto, estaremos modificando también la copia (modificar a través de sus propiedades, no reasignar).*/




let a = 10;

let b = a;

a = 30;

console.log ({a, b});

let juan = { nombre:'Juan' };
let ana = { ...juan };   
ana.nombre = 'Ana';

console.log ({juan, ana})

const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre( peter );

console.log({peter, tony});





/*
Algunas propiedades del spread operator:

-Podemos añadir un array dentro de otro sin que el resultado sean arrays anidados
*/
var midArray = [3, 4];var arr = [1, 2, midArray, 5, 6];//arr → [1, 2, [3, 4], 5, 6]

/*
- podemos sumar arrays, hacer copias, añadir nuevos elementos…
-También podemos usar el spread operator para pasar elementos de un array como parámetros de una función. Veamos un ejemplo con el método Math.max(), que devuelve el número más alto de todos aquellos parámetros que se le pasa.

*/
//Añadir nuevos elementos
const numbers = [ 1 , 2 , 3]
const newNumbers = [...numbers, 4]
// newNumbers → [1, 2, 3, 4]

//Sumar arrays

const sumOfArrays = [ ...numbers, ...newNumbers]
// sumofArrays → [1, 2, 3, 1, 2, 3, 4]
//Clonar arrays
let originalArr = [22, 3, 68, 0];
let newArray = [...originalArr];
// newArray → [22, 3, 68, 0]