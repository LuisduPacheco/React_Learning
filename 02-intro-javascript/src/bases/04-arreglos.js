// arreglo []: colleción de información dentro de una variable


// No se recomienda hacerlo de esta manera a menos 
// que se quiera un arreglo con tamaño definido
const arreglo = new Array(10);
arreglo.push(1);

console.log(arreglo);

const arreglo1 = [1,2,3,4,5];
/*arreglo1.push(1);
arreglo1.push(2);
arreglo1.push(3);
arreglo1.push(4);
*/

// recomendación no utilizar el push, es mejor spread
let arreglo2 = [...arreglo1, 6]

// Método muy utlizado en react
// la función dentro de otro metodo conocida como call back
const arreglo3 = arreglo2.map(
  function(numero){
    return numero * 2;
  }
);


console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);




