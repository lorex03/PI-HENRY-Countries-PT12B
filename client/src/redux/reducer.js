import {
    GET_COUNTRIES} from"./actions-type";
 //SHOW_ACTIV

  
let initialState = {
  countries: [ ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES: {
        return {
          ...state,
          countries: action.payload,
        };
      }
  
    default:
     return state;
    }
  };
  
  export default rootReducer;
  



























// EL REDUCER ES UNA FUNCION SIENDO EL UNICO QUE ESTA AUTORIZADO A REALIZAR CAMBIOS EN EL ESTADO GLOBAL
//PERO NECESITA DE UNA ACTION QUE LE INDICA EL CAMBIO 
 // import {GET_COUNTRIES} from "./actions"

 // const initialState= {
 //     countries:[]
 // }
 // const rootReducer = (state= initialState,action) => {
 // switch(action.type){ 
     // case GET_COUNTRIES:
     //     return {...state,countries:action.payload}
 // 
 // default:
  //  return{...state}
//}
//}

//export default rootReducer;

//redux pisa el estado
