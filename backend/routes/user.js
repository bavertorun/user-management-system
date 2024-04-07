const { Router } = require('express')
const { User, validateUser } = require('../models/user')
const router = Router()


router.get('/', async (req,res)=>{
    const users = await User.find();
    res.json(users)
})
router.get('/:id',async (req,res)=>{
    const user = await User.findById(req.params.id)

    console.log(user)
    if(!user){
        res.status(400).json({status: 400, error: "User not found"})
    }
    res.json(user)

})
router.post('/create', async (req,res)=>{

    const { error } = validateUser(req.body);

    if(error){
        res.status(400).json({status: 400, error: error.details[0].message});
    }
    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
        contact: req.body.contact
    })
    
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        res.status(500).json({status: 500,error: 'Internal Server Error'})
    }


})




module.exports = router;