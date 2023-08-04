import React from "react";
import style from "../Card/Card.module.css"
import { Link } from "react-router-dom";

const Card = ({ flags, name, continent, id, activities }) => {
    return (
        <div className={style.cardcontainer} >
        <Link  to={`/detail/${id}`}>
        
            <h2>{name}</h2>
            <div  >
              <img className={style.flags} src={flags} alt="no img"/>
            </div>
            <h3>Continent:{continent}</h3>
            <h3>{activities}</h3>    
        </Link>
      </div>
    );
  };



export default Card;
// este componente mostrara la informacion de cada pais 
// que fue mapeado , y a la vez da un link del detalle del pais
// Este componente recibe props,muestra props, eso lo define como un componente FUNCIONAL 
