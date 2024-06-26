const { User, validateUser } = require('../models/user')

async function getUsers(req,res){
    const users = await User.find();
    res.json(users)
}
async function getUser(req,res){
    const user = await User.findById(req.params.id)

    console.log(user)
    if(!user){
        res.status(400).json({status: 400, error: "User not found"})
    }
    res.json(user)
}
async function createUser(req,res){
    const { error } = validateUser(req.body);

    if(error){
        return res.status(400).json({status: 400, error: error.details[0].message});
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
        res.status(500).json({status: 500,error: 'Internal server error'})
    }
}
async function updateUser(req,res){
    const user = await User.findById(req.params.id);

    if(!user){
        return res.status(400).json({status: 400, error: 'User not found'});
    }

    const { error } = validateUser(req.body);

    if(error){
        return res.status(400).json({status: 400, error: error.details[0].message});
    }

    user.name = req.body.name;
    user.email = req.body.email;
    user.country = req.body.country;
    user.contact = req.body.contact;

    try {
        await user.save();
        res.json(user);
        
    } catch (error) {
        res.status(500).json({status: 500, error: 'Internal server error'});
    }
}
async function deleteUser(req,res){
    try {
        const user = await User.deleteOne({_id: req.params.id});

        if(user.deletedCount == 0){
            return res.status(400).json({status: 400, error: 'User not found'});
        } 
    
        res.json(user)
    
    } catch (error) {
        res.status(500).json({status: 500,error: 'Internal server error'})
    }
}

module.exports = {getUsers,getUser,createUser,updateUser,deleteUser};