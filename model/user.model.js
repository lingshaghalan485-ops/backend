import mongoose from"mongoose";
// schema;
// blueprint of document
// defines field of validation rules

// model
// compline version of schema
// used to create/read /update/update module

// schema
// blueprint of a house
// model
// contractor that build house
 const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    },
 
 })
const User= mongoose.model("User",userSchema);
export default User;