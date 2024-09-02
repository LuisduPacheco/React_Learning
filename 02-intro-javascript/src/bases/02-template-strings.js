
const myName = "Luis";
const myLastName  = "Pacheco";

// const fullName = myName + ' ' + myLastName;
const fullName = `Full name: ${myName} ${myLastName}`;
console.log(fullName);

function getGreet(fullName){
  return 'Hello world, ' + fullName;
}

console.log(`This is a text: ${getGreet(fullName)}`)