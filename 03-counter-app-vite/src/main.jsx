import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css'

// The id belongs to the div in index.html
ReactDOM.createRoot( document.getElementById('root')).render(
 // It is recommended to work in strict mode.
 <React.StrictMode>
    {/* <FirstApp title = "Hola esto es una property"/> */}
    {/* <FirstApp/> */}
    <CounterApp value={ 15 }/>
  </React.StrictMode>
);
