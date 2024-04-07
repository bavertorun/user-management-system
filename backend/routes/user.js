const { Router } = require('express')
const User = require('../models/user')
const router = Router()

router.get('/', async (req,res)=>{
    const users = await User.find();
    res.json(users)
})


module.exports = router;