//Aca para dos controllers en el caso seria para post activities y get activities 
const {createActivity}=require('../controllers/activityController')

const createActivityHandler  = async(req,res)=> {
const{ name, difficulty, duration,season,countries}= req.body;
try {
const newActivity = await createActivity(name, difficulty, duration,season,countries);
res.status(201).json(newActivity)
}

 catch(error){
res.status(400).json({error:error.message})
} }


//const createActivityHandler = async (req, res) => {
  //const { name, difficulty, duration, season, countries } = req.body;

  //try {
    //const activity = await createActivity(name, difficulty, duration, season, countries);
   // res.status(201).json(activity);
 // } catch (error) {
    
   // res.status(500).json({ message: 'Internal server error' });
 // }
//};

module.exports={
  createActivityHandler,

}