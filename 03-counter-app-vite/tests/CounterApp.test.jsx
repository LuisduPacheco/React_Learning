import { render } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Probando CounterApp', () => {
  
  const initialValue = 15;
  
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value = { initialValue } />)

    expect( container ).toMatchSnapshot();

  })
  
})
