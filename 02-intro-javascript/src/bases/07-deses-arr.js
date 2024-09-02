// Desestructuracion arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;
console.log(p3)


const returnArray = () => {
  return ['ABC', 123]
}

const [letras, numeros ] = returnArray();
console.log(letras, numeros);


// El primer valor se llmará nombrem
// el segundo se llamará setNombre
const useState = ( valor ) => {
  return [valor, () => {console.log("Hola mundo")}];
}

const [nombre, setNombre] = useState('Goky');
console.log(nombre)
setNombre();
