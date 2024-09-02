import PropTypes from 'prop-types'


// it isn't an object
const isValidIntoKeys = 'Luis Eduardo';

// Object
const isInvalidIntoKeys = {
  message: 'Hello world',
  title: isValidIntoKeys,
}

const testFunction = (name) => {
  return name;
}

// React renders  only the data that is inside the component.
export const FirstApp = ( { title, subTitle }) => {
  
  

  
  return (
    
    // <> work as a fragment, we can return a set of elements 
    <>
      {/* inside the {} is invalid to write an object */}
      <h1> { isValidIntoKeys } </h1>
      {/* This is a way of writing  an object, it isn't recommended 
      <h2> { JSON.stringify(isInvalidIntoKeys)} </h2> */}

      {/* If the function is not Async, it is valid to write the function inside {} */}
      {/* <h2> { testFunction(isValidIntoKeys) } </h2> */}
      <h2> {title} </h2>
      <p> { subTitle} </p>

    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 123
}

