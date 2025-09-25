import mongoose from"mongoose";
const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://lingshaghalan485_db_user:lingsha@cluster0.vsyzbcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MONGOOSE CONNECTED");
    

    }catch (error){
        console.log("error while connect DB",error.message);

    }
    
}
export{connectDB};