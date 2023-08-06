const {Router}= require ('express');

const createActivity = require("../controllers/activityController")

const actityRouter=Router();


actityRouter.post('/activities',createActivity  )  



module.exports=actityRouter

