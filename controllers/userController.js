const User = require( "../models/User");

 const getAllUser = async(req,res,next) =>{
    let users
    try {
        users = await User.find()
    } catch (e) {
        console.log(e)
        
    }
    if(!users){
        return res.status(404).json({
            message:"No user Found"
        })
    }
    return res.status(200).json({
        users
    })
    const signup = async(req,res,next)=>{
        const {name,email,password} = req.body
        let existingUser
        try {
            existingUser = await User.findOne({email})
        } catch (e) {
            console.log(e)
        }
        if(existingUser){
            return res.status(400).json({message:"user already exist!You can Login"})
        }
        const user = new User({
            name,
            email,
            password
        })
        try {
           await  user.save()
        } catch (e) {
            console.log(e)
            
        }
        return res.status(201).json({user})
    }

}
module.exports = {getAllUser}