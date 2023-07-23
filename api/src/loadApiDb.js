const axios = require('axios');
const { Country } = require('./db');

async function loadDb() {

    const response = await axios(' https://restcountries.com/v3/all ');
    const countriesData = response.data;

    const modelCountries = countriesData.map((countryData) => {
      return {
        name: countryData.name.common,
        id: countryData.cca3,
        flags: countryData.flags[0],
        continent: countryData.continents[0],
        capital: countryData.capital,
        subregion: countryData.subregion,
        area: countryData.area,
        population: countryData.population,
      };
    });

    await Country.bulkCreate(modelCountries);
    console.log('Data loaded successfully');
}
module.exports=
{loadDb}