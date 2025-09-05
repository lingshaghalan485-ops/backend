
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// steps
// validate user input required fields
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",

            });
        }
        const existingUser = await User.findOne ({email});
        if (existingUser){
            return res.status(400).json({
                message: "user already exist",
            });
        }
          const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({
            name,
            email,
            password: hashedPassword,

        });
        res.status(201).json({
            message: "User created",
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error",
        });
    }



};
const getUser = (req, res) => {
    const user = users.find((b) => b.id === parseInt(req.params.id));
    if (!user) {
        return res.json({
            message: "Book not found",
        });
    }
    res.send(user);
};
const login = async(req, res) =>{
    // email password
    // user exist or not check
    // compare password
    // token generate
    // send response
    const {email,password} = req.body;
    if (!email || !password){
    return res.status(404).json({
        message: "email and password are required",
    });
}
const existUser =await User.findOne({ email});
    if(!existUser){
        return res.status(400).json({
            message:"User does not exist with this email",
        });

    }
    const isMatch = await bcrypt.compare(password, existUser.password);
    if(!isMatch){
        return res.status(400).json({
            message:"invalid password",
        });
}
const token = jwt.sign(
    {id:existUser.id,email: existUser.email},
    "jwtsecret",
    {
        expiresIn:"1d",
    }
);

res.status(200).json({
    message:"Login sucess",
    user:existUser,
    token:token,
});
};
const getMyProfile = async(req,res)=>{
    try{
        const user =await User.findById(req.user.id);
        res.status(200).json(user);
    }catch(error){
        res.status(200).json({
            message:"internal server error",
        })
    }
}
export { createUser,getUser, login,getMyProfile }
