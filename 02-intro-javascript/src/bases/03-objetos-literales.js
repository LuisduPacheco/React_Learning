// Objeto literal {}

const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'Guatemala',
    zip: 5533212,
    lat: 14.3232,
    lng: 34.923321,
  },
};

// Esta asignación no se debe hacer, se está haciendo una copia de la referencia
const person2 = person;

console.log(person);

person2.name = 'Peter';
console.log(person);
console.log(person2);

// para crear un clon lo mejor es hacer un nuevo objeto
// Utilizando el objeto spread "...""
const person3 = { ...person};
person3.name = 'Steven';

console.log(person);
console.log(person3);



