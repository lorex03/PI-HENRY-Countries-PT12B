const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true,
       // type: DataTypes.UUID,
      },

    difficulty:{
        type: DataTypes.ENUM("1", "2" , "3" , "4" , "5"),
        allowNull: false,
      },
      duration:{
        type: DataTypes.TIME,
        allowNull: false,
      },
      season:{
        type: DataTypes.ENUM('Summer','Autumn', 'Winter','Spring'),
        allowNull: false,
      },


},{timestamps:false});
};