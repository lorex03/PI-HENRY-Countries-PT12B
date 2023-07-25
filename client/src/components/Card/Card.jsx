import style from "../Card/Card.module.css"
function Card({country}) {
const {flags,name,continent}=country


return (
<div className={style.cardcontainer}>
<img src={flags} />

<h2> Name:{name} </h2>
<h2> Continent: {continent} </h2>

</div>


)


}

export default Card;
// este componente mostrara la informacion de cada pais 
// que fue mapeado , y a la vez da un link del detalle del pais
// Este componente recibe props,muestra props, eso lo define como un componente FUNCIONAL 
