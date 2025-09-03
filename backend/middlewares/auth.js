function auth(req, res, next){
    const token = req.header["authorization"];
   
    if (token ==="123"){
        next();
    }else{
        res.send("forbidden: invalid token");
    }
}
export {auth};