const getImage = async() => {

  try {
    const apiKey = '6PrK26kG7NRKFGJCvEK5PgFTDztmqPZ5';

    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
  
    const {data} = await respuesta.json();
    
    const {url} = data.images.original ;
  
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append(img);
  
  }catch(error) {
    // manejo del error
  }

}

getImage();


// const apiKey = '6PrK26kG7NRKFGJCvEK5PgFTDztmqPZ5';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// // Las promesas se pueden encadenar
// // el resultado de la promesa pasa al siguiente then y así sucesivamente

// // aplicando encadenamiento y desustructuración

// peticion
//   .then( respuesta => respuesta.json())
//   .then( ( { data } ) => {

//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);

//     console.log( url );
//   })
//   .catch( console.warn);