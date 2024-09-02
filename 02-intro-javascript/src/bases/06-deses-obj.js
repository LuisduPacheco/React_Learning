// Desestructuración
// Asignación desestructurante

const person = {
  namePerson: 'Tony',
  age: 45,
  keyPerson: 'Ironman',
};

console.log(person.namePerson);

// Aplicando desestructuración
// extrae lo que está dentro de las llaves
const { namePerson, age, keyPerson } = person;
console.log(age);
console.log(namePerson)

// otros usos
const returnPerson = ( user ) => {
  console.log(user);
};

returnPerson(person);
// desestructuración en el argumento
const returnPerson2 = ( {namePerson} ) => {
  console.log(namePerson);
};

returnPerson2(person);

const useContext = ({keyPerson, namePerson, age}) => {
  return {
    keyName: keyPerson,
    years: age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const {keyName, years, latlng: {lat, lng} }  = useContext(person);

console.log(keyName, years);
console.log(lat, lng)

