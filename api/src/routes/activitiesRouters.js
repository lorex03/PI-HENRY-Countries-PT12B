const {Router}= require ('express');

const {  createActivityHandler, getActivitiesHandler   }= require("../handlers/activitiesHandler")

const actityRouter=Router();


actityRouter.post("/activities", createActivityHandler )
actityRouter.get("/activities",getActivitiesHandler )


module.exports=actityRouter

