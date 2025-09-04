import express from "express"

import bookRoutes from "./routes/book.routes.js";
import schoolRoutes from "./routes/school.routes.js";
import userRoutes from "./routes/user.routes.js";
import {connectDB} from"./config/db.js";
const app = express();
connectDB()
app.use(express.json());
// app.use(logger);
app.use("/books",bookRoutes);
app.use("/schools",schoolRoutes);
app.use("/users",userRoutes);

//  middlewware 
//  is like a bridge between the request 
// coming from client 


// function logger(req, res, next){
//     console.log(`${req.method}  ${req.url}`);
//     next();
// }
app.use("/books",bookRoutes);

app.get('/',(req, res)=>{
    res.send("server is running");
});

app.get("/about",(req,res)=>{
    res.send("This is about page");
});



app.listen(8000, () => {
    console.log("server is running on port 8000")
})