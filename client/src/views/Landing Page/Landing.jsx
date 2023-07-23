import style from './Landing.module.css';
import {Link} from "react-router-dom";

const Landing = () => {
return(
<div className={style.body}>   
<div>   
   
<h1>¡WELCOME!
   Learn here everything about the countries and their tourist activities
</h1> 
</div>
<div className={style.di} >
<button className={style.button}>
   <Link className={style.link} to = "/home">
   Home
   </Link> 
</button>


</div>



</div> 
)}
export default Landing;
