//los handler son aquellas funciones que  no interactuan con mi modelo 
//en lo posible que no interactuen ya que eso sera la responsabilidad del controller

const { searchCountryByName,getCountries,getCountryDetail,}=require ('../controllers/countryController')
// siguiendo esta llave es para seguir poniendo las funciones de los controllers jejej
//FALTA EL HANDLER QUE INTERACTUE CON MI FUNCION DE MI CONTROLLER  

//getCountries QUE TRAE TODOS LOS PAISES 

const getCountriesHandler= async(req,res) =>{
const {name} = req.query;
const results = name ? await searchCountryByName(name): await getCountries();
res.status(200).json(results);

} 

//luego para obtener el detalle del pais 
const getIdpaisHandler = async (req,res) => {

try {  
  const { id } = req.params;
const especificCount=await getCountryDetail(id);

res.status(200).json(especificCount)


} catch (error) {
    res.status(400).json({error:error.message})
}
}

//ESTE HANDLER SERA PARA OBTENER EL ID DEL PAIS , LLAMANDO A LA FUNCION DEL CONTROLLER, LA CUAL SERA
//LA QUE INTERACTUARA CON EL MODELO, ESA FUNCION ES getCountryId


//luego para buscar todos aquellos paises que coinciden con el nombre recibido por query 

module.exports={
  getCountriesHandler,
    getIdpaisHandler, 
    

}
//aqui pondre el handler para crear los handler en los casos de traer un objeto para traer todas las 
