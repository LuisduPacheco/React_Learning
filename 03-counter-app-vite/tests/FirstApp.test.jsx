import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {
  test('Debe de hacer match con el snapshot', () => {
    const title = 'Hola esto es una property'
    // renderiza el componente en memoria
    const {container } = render( <FirstApp title= { title }/>)
    
    expect( container ).toMatchSnapshot();
  })
  
})
