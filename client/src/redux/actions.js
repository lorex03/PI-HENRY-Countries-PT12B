import axios from "axios";
import {GET_COUNTRIES} from "./actions-type";

export function getCountries() {
  return async function (dispatch)  {
    const res = await axios.get("http://localhost:3001/countries/");
return dispatch({ 
  type: GET_COUNTRIES, 
  payload: res.data });
  };
}









































//import axios from 'axios';

//export const GET_COUNTRIES = "GET_COUNTRIES";

//export const getCountries= () => {
//return async function (dispatch){
  //  const backData=await axios.get(
 //"http://localhost:3001/countries ");// hace la peticion 
 //const countries =  backData.data

// dispatch({type:GET_COUNTRIES, payload: countries})//y despacha la action
//}
//};

//export const GET_COUNTRY = "GET_COUNTRY";

//export const getCountry = (id) => {
//return async function (dispatch) {
  //const backData=await axios.get(
   // `http://localhost:3001/countries/ ${id}` );
   // hace la peticion 
    //const country =  backData.data
  // dispatch({type:GET_COUNTRY, payload:country })
//};
//};

//export const GET_NAME = "GET_COUNTRY";


//ambas retornar una funcion ,realizan su reques, sacan la informacion que les importa , y despues hacen el dispatch 
//con el actions correspondiente


