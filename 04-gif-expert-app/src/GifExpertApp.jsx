import { useState } from "react"
import AddCategory from "./components/AddCategory";

// const newCategory = 'Smash';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    // setCategories([ ...categories, 'Smash']);
    // setCategories(categories.concat(newCategory));
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
    // console.log(newCategory)
  }
  


  return (
    // recordar que esto se llama fragmento
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        // setCategories = { setCategories }
        // on se usa para nombrar cuando está emitiendo algo, muy utilizado en los eventos
        onNewCategory = { (event) => onAddCategory(event)}
      
      />
      <ol>
        { categories.map( category => {
          return <li key={ category }> { category } </li>
        })
        }
      </ol>

    </>
  )
}

