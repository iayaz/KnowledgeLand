import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "../models/User.js";

// Registration User
export const register = async (req,res)=>{
    // console.log(req.body)
    try{
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        // console.log(req.body.firstName)
        const salt = await bcrypt.genSalt(5);
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

// Logging in

export const login = async (req , res) =>{
    try{
        const {email , password} = req.body;
        console.log(req.body)
        const user = await User.findOne({email: email});
        if(!user) return res.status(400).json({msg: "User doesn't exist"})
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"})

        const token = jwt.sign({id:user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token , user})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}