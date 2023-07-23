const{Country,Activity}= require('../db')
const {Op} = require ('sequelize')

const getCountries = async () => {
 const countries= await Country.findAll();

console.log(countries)
  
return countries;
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

 

const getCountriesByName=async(name)=> {
   // const { name } = req.query;
   const countriesName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      //console.log(countriesName)
      return countriesName;
    }
  
  

//property 

module.exports={
    getCountries, 
    getCountryDetail,
    getCountriesByName
 
}