const { Router } = require('express');
// Importar todos los routers;
const countriesRouter= require('./countriesRouters')
// Ejemplo: const authRouter = require('./auth.js');
//const activitiesRouters= require('./activitiesRouters')
//FIJARME SI TIENEN Q COINCIIDIR LOS NOMBRES DE LOS CONTROLLERS O NO

const router = Router();
router.use('/countries',countriesRouter)
//router.use("activities",activitiesRouters) 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;


