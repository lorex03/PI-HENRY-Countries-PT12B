const {Router}= require ('express');

const { getCountriesHandler,  getIdpaisHandler}= require('../handlers/countriesHandler');

const countryRouter=Router();

//RUTA PARA OBTENER TODOS LOS PAISES QUE ESTAN GUARDADOS EN MI BASE DE DATOS
countryRouter.get('/', getCountriesHandler )
//Ruta para obtener por id el detalle de un pais especifico admeas de su actividad asociada
countryRouter.get('/:id',getIdpaisHandler )
//Ruta para obtener todos aquellos paises que coincidan con el nombre recibido por query
//countryRouter.get('/name',getCountrybyname )

module.exports=countryRouter