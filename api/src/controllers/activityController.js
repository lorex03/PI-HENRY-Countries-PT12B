const { Activity } = require("../db");


const createActivity = async (req,res)=> {
  try {
const {name, difficulty, duration, season,countries } = req.body;
    if(!name || !difficulty || !duration || !season || !countries ) throw new Error("Falta por llenar datos");
    const newAct = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    })
    newAct.addCountries(countries);
    return res.status(200).json(newAct);
} catch (error) {
    return res.status(500).json({error: error.message});
}


}




module.exports=createActivity































//async function newAct(req, res) {
//  const { name, difficulty, duration, season, countryID } = req.body;

  //const valdidateact = await Activity.findOne({
   // where: {
    //  name: name,
    //},
  //});

  //if (!valdidateact) {
   // const addAct = await Activity.create({
    //  name: name,
     // difficulty: difficulty,
     // duration: duration,
     // season: season,
    //});
    //const countrymatch = await Country.findAll({
     // where: {
      //  id: countryID,
     // },
    //});

    //const resact = await addAct.addCountries(countrymatch);

   // return res.send(resact);
 // }

 // const countrymatch = await Country.findAll({
  //  where: {
   //   id: countryID,
   // },
  //});
  // console.log(addAct)
  // console.log(countrymatch)

//  const resact = await valdidateact.addCountries(countrymatch);

//  res.send(resact);
//}

//module.exports = { newAct };







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


//CREAR UN HANDLER QUE NO INTERACTUE CON EL MODELO Y QUE LLAME LA FUNCION DEL CONTROLLER 

//Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
//-  Toda la información debe ser recibida por body.
//-  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
//-  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.