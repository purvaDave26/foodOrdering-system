const authMiddleware=(role)=>async(req,res,next)=>{
     console.log("auth middleware called...");
    if(role=="Restaurant")
    {
        next();
    }
    else{
        res.status(400).json({
            message:"invalid request"
        })
    }
}

module.exports=authMiddleware