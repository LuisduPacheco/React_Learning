console.log("Hola mundo!!!");
// No usar var NUNCA !!!

// las constantes pueden ser variables que no se van a renombrar


const nameTest = 'Luis';
let lastNameTest = 'Pacheco';

let valueRand = 5;
valueRand = 4;

// Variables de scope
if (true){
  let valueRand = 6;
  console.log(valueRand);
}

console.log(valueRand);
