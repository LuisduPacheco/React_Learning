
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
