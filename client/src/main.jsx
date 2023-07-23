import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css' vino con este css al principio 
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'

import { Provider } from 'react-redux';
import store from "./redux/store.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <BrowserRouter>  
    <App />
  </BrowserRouter>,
</Provider>
);
