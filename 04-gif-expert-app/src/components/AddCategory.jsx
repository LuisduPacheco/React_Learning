import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp";


// onNewCategory es la property de este componente
const AddCategory = ({ onNewCategory }) => {
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue)

    if ( inputValue.trim().length <= 1) return;
    // Función callback 
    // setCategories( categories => [...categories, inputValue])
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
      type='text'
      placeholder='Search Gifs'
      value={ inputValue }
      onChange={ onInputChange }
    />
    </form>
  )
}

export default AddCategory
