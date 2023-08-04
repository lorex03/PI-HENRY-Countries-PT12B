const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    id: {
    
     type: DataTypes.STRING,
     defaultValue: DataTypes.UUIDV4,
     //error de sequelize:la sintaxis de entrada no es válida para tipo uuid: «IND»
 allowNull:false,
  primaryKey: true,
      //unique: true,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.INTEGER,
      
    },
    population:{
      type: DataTypes.INTEGER,
      
    }

  },{timestamps:false});
};

