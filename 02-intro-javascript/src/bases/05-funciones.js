
// Forma común de crear funciones
function greet(name){
  return `Hola ${name}`
};

// Posiblemente se le puede caer encima, no da error
greet = 30;

console.log(greet);

// Forma recomendada de crear funciones
const saludar = function(name){
  return `Hola ${name}`;
}

// Al caerle encime el dará error
//saludar = 30;
console.log(saludar("Función constante"));

// Funciones flecha o lamda
const saludar2 = (name) => {
  return `Hola ${name}`;
}

console.log(saludar2("Función flecha."))

// simplificando funciones básicas
const saludar3 = (name) => `Hola ${name}`;
console.log(saludar2("Función simplificada."))

const saludar4 = () => `función sin parametros`;
console.log(saludar4());

// retornar un objeto
const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'luisdu'
  }
};

// retornar un objeto sin usar return, usando parentesis
const getUser2 = () =>
  ({
    uid: 'zzzzz',
    username: 'luisdu'
  })

console.log(getUser());
console.log(getUser2());

const getUsuarioActivo = (nombre) => 
  ( {
    uid: "567abc",
    username: nombre,
  });


const usuarioActivo = getUsuarioActivo('Luis');
console.log(usuarioActivo);





