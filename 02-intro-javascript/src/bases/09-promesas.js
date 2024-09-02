import { heroes } from "./data/heroes";

// por naturaleza son asincronas
// primero se ejecuta todo lo que es sincrono y hasta que se termina se ejecutan las promesas.
const getHereoById = (id) =>  heroes.find( ( heroe ) => heroe.id === id );

// // Se crean con un argumento que es un call back con dos argumentos
// const promesa = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHereoById(3);
//     //resolve(heroe)
    
//     reject('No se pudo encontrar el heroe')
//   }, 2000);
// });

// // then= correctamente ejecutado, catch = error, finally = siempre se ejecuta
// promesa.then((heroe) => {
//   console.log('Then de la promesa')
// })
// .catch( err => console.warn( err ));


const getHeroeByIdAsyn = (id) => {

  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const heroe = getHereoById(3);
      if (heroe ){
        resolve(heroe)
      }else {
        reject('No se pudo encontrar el heroe')
      }
      
    }, 2000);
  });


}

getHeroeByIdAsyn(4)
  .then(heroe => console.log('Heroe', heroe))
  .catch( err => console.warn( err))
