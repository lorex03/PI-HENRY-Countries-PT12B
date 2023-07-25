const{Country,Activity}= require('../db')
const {Op} = require ('sequelize')

const getCountries= async() => { 
  const  databaseCountries = await Country.findAll();
return databaseCountries ;
 }
const searchCountryByName = async (name) => { 
  const databaseCountries=
   await Country.findAll({ where: { name: {   [Op.iLike]: `%${name}%` }} })
return databaseCountries ;
}  


  const getCountryDetail = async (id) => {
    //const { id } = req.params;
  const country = await Country.findOne({
        where: {id},
        include: [{ model: Activity }],
      });
      console.log(id)
return country;
     
    }

 

 // async function getAllCount(req, res) {
  //  const { name } = req.query;

         
        
    
  
 
  
  // const { name } = req.query;
   //const countriesName = await Country.findAll({
       // where: {
        //  name: {
          //  [Op.iLike]: `%${name}%`,
      //    },
     //   },
    //  });
      //console.log(countriesName)
  //    return countriesName;
 //   }
  
  

//property 

module.exports={
    getCountries, searchCountryByName,
    getCountryDetail,
    
 
}