const { Router } = require('express')
const User = require('../models/user')
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





module.exports = router;