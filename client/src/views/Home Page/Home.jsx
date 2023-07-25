
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountries} from "../../redux/actions"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
//import SearchBar from "../../components/SearchBar/SearchBar"
import NavBar from "../../components/NavBar/NavBar";
const Home =()=> {
   
    const dispatch = useDispatch() // es la forma que le opuede enviar al store
const allCountries= useSelector((state)=> state.allCountries)

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch]) // mando para que se ejecute solamente en el momento que hago el dispatch por eso el array de dependencias 
//cuando se monta , que haga el dispatch 
//useEffect () - useDispatch()
// return {()=> 
//cleardetail()
//}) AVERIGUAR QUE ONDAAAA

return (
    <div> 
        <h1> HOME</h1>
        <NavBar/>
    
    <CardsContainer allCountries={allCountries}   />
    </div>
   
)
}
export default Home ;
