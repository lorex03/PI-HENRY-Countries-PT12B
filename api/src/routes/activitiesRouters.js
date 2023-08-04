const {Router}= require ('express');

const {  newAct}= require("../controllers/activityController")

const actityRouter=Router();


actityRouter.post('/activities', newAct )  



module.exports=actityRouter

