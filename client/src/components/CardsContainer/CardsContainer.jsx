import React, { useEffect, useState } from "react";
import Card from "../Card/Card"
import style from "../CardsContainer/CardsContainer.module.css"
import { useSelector } from "react-redux";


   //Country es mi Card
function CardsContainer({countries}){
  const countriesList=countries

  return(
<div className={style.cards}>

{countriesList?.map((country) =>(
  <Card country = {country} />
  
)  )}

</div>


  )

}

export default CardsContainer;



















  





























// es el que estara observando el estado global RETORNANDO LAS PROPIEDADES DE MI CARD
//CON EL useEffect es el que maneja el ciclo de vida de este componente para poder decirle que haga algo cuando se monta
//ademas de tambien useDispatch
//su funcion sera tomar mi array de paises y por cada pais . renderizar un componente de Card
// toda su funcionalidad de este componente es de carga logica entonces se define este componente como SMART
//todo componente cumple con un estado, lo que hace este estado es manejar la informacion de forma interna que es solamente del componente
//import Card from "../Card/Card";
//import style from "./CardsContainer.module.css"
//import {useSelector} from "react-redux";

//const CardsContainer = () =>{
//const allCountries = useSelector(state=>state.allCountries)

//return(
//<div className={style.container}>
//{allCountries.map(oneCountry=>{
//return<Card
//name={oneCountry.name}
//flags={oneCountry.flags}
//continent={oneCountry.continent}

///>

//})}

//</div>


//)


//}

//export default CardsContainer;
