const jwt=require("jsonwebtoken")
require("dotenv").config()
const secret=process.env.SECRET;
const userModel=require("../moduls/userModel")

// const authMiddleware=(role)=>async(req,res,next)=>{
//      console.log("auth middleware called...");
//     if(role=="Restaurant")
//     {
//         next();
//     }
//     else{
//         res.status(400).json({
//             message:"invalid request"
//         })
//     }
// }


const authMiddleware=(role)=>async(req,res,next)=>{
     console.log("auth middleware called...");
     var token=req.headers.authorization
     if(token)
     {
        try {
            const decoded=jwt.verify(token,secret)
            console.log("decoded object:",decoded)
            const verifiedUser=await userModel.findById(decoded.id)
            console.log(verifiedUser)

            if(verifiedUser && verifiedUser.role=="Restaurant")
            {
                next();
            }
            else{
                res.json({
                    message:"not valid user"
                })
            }
        } catch (error) {
            res.json({
                message:"invalid token",
                error:error
            })
        }
     }
     else{
        res.json({
            message:"token is missing"
        })
     }
   
}

module.exports=authMiddleware