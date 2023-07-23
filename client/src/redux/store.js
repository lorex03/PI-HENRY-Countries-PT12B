// el componente recibe props como mi p
//EL estado global sigue siendo un objeto con informacion 
//pero gracias a redux permite tener un estado global , que permite que cualquier componente pueda utilizar esa informacion esa es la principal diferencia gracias a la posibilidad que da redux
//este estado esta dispinible para todo componente que lo necesite , y va a estar disponible para cualquier parte de la aplicacion que lo necesite 
//OBJETIVO: QUE MI INFORMACION ESTE EN MI ESTADO GLOBAL, NO DE FORMA HARDCORDEADA O HECHA A MANO 
import {createStore,applyMiddleware,compose} from 'redux'; 
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk';

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; //linea para conectar con redux dev tools

const store=createStore(
    rootReducer,composeEnhancer
    (applyMiddleware(thunkMiddleware))

);
export default store;

