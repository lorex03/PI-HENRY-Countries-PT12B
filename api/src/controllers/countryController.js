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



//property 

module.exports={
    getCountries, searchCountryByName,
    getCountryDetail,
    
 
}