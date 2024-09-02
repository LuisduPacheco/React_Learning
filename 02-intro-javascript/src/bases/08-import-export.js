//import { heroes } from "./data/heroes.js";

// por defecto   - individual
import heroes from "../data/heroes"
//console.log(owners)

// find recibe una función conocida como call back
// const getHereoById = (id) => {
//   return heroes.find( ( herore ) => {
//     if (herore.id === id ) {
//       return true;
//     }
//     return false
//   });
// }


// Simplificando 
// const getHereoById = (id) => {
//   return heroes.find( ( herore ) => herore.id === id );
// }

export const getHereoById = (id) =>  heroes.find( ( herore ) => herore.id === id );


// Usar filter
// const getHeroresByOwner = (owner) => {
//   let results = heroes.filter( (heroe) =>  heroe.owner == owner);
//   return results;
// }

// Mejorando el código anterior
const getHeroresByOwner = (owner) =>  heroes.filter( (heroe) =>  heroe.owner === owner);
  


//console.log(getHereoById(2));
//console.log(getHeroresByOwner('DC'))


