# GifExpert

Esta aplicación hace uso de la API de Giphly.

En react se busca tener los componentes con tareas específcas para poder hacer cambios en cualquier momento. 

En esta app se hace uso del USE EFFECT y de los CUSTOM HOOKS.

## Crear el proyecto

### 74. Inicio del Proyecto GifExpertApp

1. Crear el proyecto con npm create vite. 
2. Elegir react para el proyecto. 
3. Borrar todo solo dejar el main.jsx y dejar el src y crear la app GifExpertApp.jsx, racf para crear el código rápidamente.
4. En el main llamar el GifExpertApp
5. Instalar los módulos de node, con npm install
6. Ejecutamos con npm run. Solo se debería ver un tiutlo h1 que se agregó al GifExpert

### CREAR EL API KEY GIPHY DEVELOPERS

1. Crear una cuenta o iniciar sesión
2. Crear una nueva app y seleccionar API y nombrar la Api Key, aceptar los terminos de uso.
3. Copiar el API Key

NOTAS FINALES: A lo largo del proyecto se va a evitar tener demasiadas importaciones dentro del código.

APIKEY CURSO: 6PrK26kG7NRKFGJCvEK5PgFTDztmqPZ5

```Javascript
// component
const GifExpertApp = () => {
  return (
    <div>
      <h1>GIF EXPERT APP</h1>
    </div>
  )
}

export default GifExpertApp

// component
import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpertApp from './GifExpertApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
)
```

### 075. Gif Expert App - Component

Definir la estructura del componente. 
Para ordenar el proyecto primero hay que hacer el file system, no hay un lineamiento específico. Se puede consultar la siguiente referencia: https://es.legacy.reactjs.org/docs/faq-structure.html

1. Agregar el css en un archivo style.
2. Para hacer que el css sea global se importa desde el padre o main. import ./.

### 076. Creando una lista de categorías

El listado de categorías debe persistir conforme se trabaje en la aplicación. 

Para mantener el estado y que cambie el HTML se usa el usestate. Recomendado usar camelCase

1. Agregar el usestate categories. 
2. es recomendable que el use state tenga un valor inicial. Para el ejemplo [ 'One Punch' ]
3. Recordar importar el use state de react.
4. Crear un listado y agregar una expresión {}javascript y agregar el arreglo categories el cual tiene todas las propiedades de un arreglo. 
5. Transfomrar el arreglo y barrer los elementos y regresar algo nuevo utilizando la función map y una función flecha.
6. al return de la función flecha se debe agregar un valor key para que no de como resultado un warning. 
7. El retorno debe ser lo que se quiere mostrar del listado.

Los hooks no tienen nombre, no se puede colocar un hook dentro de un if, porque react pierde la relación entre los states y cual es es el que se está manejando. 

Esto no se debe hacer:

```Javascript
  if (const [ categories, setCategories] = useState(['Onepunch', 'Naruto']))
```

Esto si:

```Javascript
import { useState } from "react"

const GifExpertApp = () => {
  const [ categories, setCategories] = useState(['Onepunch', 'Naruto'])
  return (
    <div>
      <h1>GIF EXPERT APP</h1>
      <ol>
        { categories.map( category => {
          return <li key={ category }> {category} </li>
        }) }
      </ol>
    </div>
  )
}

export default GifExpertApp
```
___

### 077 Agregar una nueva categoría

1. Crear una función flecha para agregar una nueva categoría
2. Agregar un botón para añadir una nueva categoría
3. No usar el push por el momento categories.push('category'), porque se usa para mutar un objeto y es lo que evitamos con react, evita mutar el estado, por eso ocupamos el setCategories
4. Se puee usar el opeador spread (tres puntos) y al final se agrega el valor a insertar, pero esto viola que la Key sea única, solo aparece como warning.
5. Otra forma de hacerlo es usar un call back y desestructurar cat => [...cat 'valor'].

```Javascript
import { useState } from "react"

const GifExpertApp = () => {
  const [ categories, setCategories] = useState(['Onepunch', 'Naruto'])

  const onAddCategory = () => {
    //setCategories(categories.concat("shingeky"));
    setCategories(['Death Note', ...categories ]);
    // Call Back
    //setCategories(cat => [...cat, 'Death Note'] );
  }

  return (
    <div>
      <h1>GIF EXPERT APP</h1>
      <button onClick={onAddCategory}>ADD CATEGORY</button>
      <ol>
        { categories.map( category => {
          return <li key={ category }> {category} </li>
        }) }
      </ol>
    </div>
  )
}

export default GifExpertApp
```

### Componente AddCategory

En React se puede crear toda la app en un solo componente, pero es recomendado trabajar los componentes de manera segmentada y que hagan solo una cosa en especifíco.

1. Crear un componente de manera tradicional, crear folder components > AddCategory.jsx (jsx porque es un functional component)
2. Importar el componente y agregarlo al GifExpertApp component.
3. Este nuevo componente debe manejar el estado del input
4. Si se agrega un value como defecto, se debe agregar un onChange para que cambie al hacer enter al input. 
5. Crear una función para cambiar los valores onInputChange()
6. El onChange recibe un evento, dentro del target está el valor 
7. El setValue de este componente debe ser el valor del evento > target > value
8. El input debe ir dentro de un form, se hace uso del onSubmit para mandar el evento
9. Declarar una constante para que reciba el valor del onSubmit (por el momento funciona con un enter)
10. Se debe evitar un refresh del navegador, dentro de la constante onSubmit se agrega event.preventDefault
11. Hasta aquí se tiene el valor deseado para mandarselo al componente padre, el cual es el GifExpertApp, aún no se envía nada y no se actualiza la lista de categorías.

Fragmentos: Se usan cuando se tienen dos elementos html.

AddCategory.jsx

```Javascript

import React from 'react'
import { useState } from 'react'

const AddCategory = () => {
  
  const [inputValue, setInputValue] = useState("Elfen Lied");
  
  const onInputChange = ({target}) => {
    setInputValue(target.value);
    console.log(target.value)
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Search gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory
```
