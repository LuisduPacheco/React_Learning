import { useState } from "react"
import AddCategory from "./components/AddCategory.jsx"

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
      <AddCategory/>
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