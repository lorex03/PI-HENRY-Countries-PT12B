import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getCountries} from "../../redux/actions"
//import SearchBar from "../../components/SearchBar/SearchBar"
const Home =()=> {
    const dispatch = useDispatch
    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])
//cuando se monta , que haga el dispatch 
//useEffect () - useDispatch()

return (
    <div> 
        <SearchBar/>
    <div>
    <CardsContainer   />
    </div>
 </div>  
)
}
export default Home ;
