const { Activity, Country } = require('../db');

const createActivity = async (name, difficulty, duration, season, countries) => {
  const activity = await Activity.create({ name, difficulty, duration, season });

  if (countries && countries.length > 0) {
    const countryInstances = await Country.findAll({
      where: {
        name: countries,
      },
    });

    await activity.addCountries(countryInstances);
  }

  return activity;
};

module.exports = {
  createActivity,
};







//const postcreateActivity  = async(name, difficulty, duration,season)=>
 //await Activity.create({ name, difficulty, duration,season
//});

//const getActivities = async () => {
  //const activities = await Activity.findAll();
  //return activities;
//};
//los parametros que quiero que reciba y que seran los campos a rellenar de mi modelo para crear la actividad jeje
//FUNCION QUE DEVUELVA A UN ARREGLO DE OBJETOS 
//DONDE CADA OBJETO ES UNA ACTIVIDAD TURISTICA 
//FUNCION:

module.exports={
  postcreateActivity  ,
  getActivities,
}
//CREAR UN HANDLER QUE NO INTERACTUE CON EL MODELO Y QUE LLAME LA FUNCION DEL CONTROLLER 

//Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
//-  Toda la información debe ser recibida por body.
//-  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
//-  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.