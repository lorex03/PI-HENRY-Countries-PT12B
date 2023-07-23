//import {Detail,Landing}from "./views"
//import { Route} from "react-router-dom"
import './App.css';
import {Detail,Form,Home,Landing} from "./views"
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <div className="App">
      
   <Route exact path="/" component={Landing}        />  
    <Route exact path="/detail" component={Detail} /> 
    <Route exact path="/create" component={Form} />   
    <Route exact path="/home"render ={() => <Home/>} /> 
    </div>
  );
}

export default App;


//el render me servira para pasarle props a mi home 
// app define rutas jeje 