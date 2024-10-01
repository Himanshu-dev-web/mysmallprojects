const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


//get all users 
//route GET /users
// 

const getAllUsers = asyncHandler( async(req,res) => {
    const users = await User.find().select('-password').lean()

    if(!users){
        return res.status(400).json({message:'No users found'});
    }

    res.json(users);
})



//Create a new user 
//route Post /users
// 

const createNewUser = asyncHandler( async(req,res) => {
        const {username, password,roles} = req.body;

        //Confirm data here 

        if(!username || !password || !Array.isArray(roles) || !roles.length){
            return res.status(400).json({message:'All Fields are required'});
        }

        //Check for duplicates

        const duplicate = await User.findOne({username}).lean().exec()

        if(duplicate){
            return res.status(409).json({message: 'Duplicate username'})
        }

        //Hash the password

        const hashedPwd = await bcrypt.hash(password,10) // salt rounds

        const userOject = {username , "password":hashedPwd,roles}

        //Create and store new user

        const user  = await User.create(userOject);

        if(user){
            res.status(201).json({message:`New user ${username} created`});
        }
        else{
            res.status(400).json({message:`Invalid user data received`});
        }

})


//Update a new user 
//route Patch /users
// 

const updateUser = asyncHandler( async(req,res) => {
        const {id , username , roles, active ,password} =req.body;

        //Confirm data

        if(!id ||   !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
            return res.status(400).json({message: 'All fields are required'});
        }

        const user = await User.findById(id).exec()

        if(!user) {
            return res.status(400).json({message:`user not found`});
        }

        //Check for duplicates
        const duplicate = await User.findOne({username}).lean().exec();

        //Allow updates to the original user
        if(duplicate && duplicate?._id.toString() !== id){
            return res.status(409).json({message:'Duplicate username'})
        }
        user.username = username;
        user.roles = roles;
        user.active = active;

        if(password){
            user.password = await bcrypt.hash(password, 10); //salt rounds
        }

        const updatedUser = await user.save();

        res.json({message: `${updatedUser.username} updated`})

})



//Delete a new user 
//route Delete /users
// 

const deleteUser = asyncHandler( async(req,res) => {

    const {id} = req.body;

    if(!id){
        return res.status(400).json({message: 'User ID required'});
    }

    const note = await Note.findOne({user: id}).lean().exec();

    if(note){
        return res.status(400).json({message:'User has Assigned notes'})
    }

    const user = await User.findById(id).exec();

    if(!user){
        return res.status(400).json({message:'User not found'});
    }

    const result  = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result.id} has been deleted`;

    res.json(reply);
    
})




module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}