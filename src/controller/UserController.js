const userModel=require("../moduls/userModel")
const jwt=require("jsonwebtoken")
const secret="royal"
const createUser=async(req,res)=>{
    try {
        const fullname=req.body.fullname;
        const email=req.body.email;
        const password=req.body.password;
        const role=req.body.role;
        const saveduser=await userModel.insertOne({...req.body,fullname:fullname,email:email,password:password,role:role})
        const token=jwt.sign({id:saveduser._id},secret)

        if(saveduser==true)
        {
            res.json({
                message:"user created"
            })
        }
    } catch (error) {
        res.json({error:error})
    }
}

const getAllUsers=async(req,res)=>
{
    const users=await userModel.find()
    res.json({message:"get all users...",data:users})
}

const loginUser=async(req,res)=>{
    try {

        const foundUserFromEmail=await userModel.findOne({email:req.body.email})
        if(foundUserFromEmail){

            if(req.body.password==foundUserFromEmail.password)
            {
                //const token=jwt.sign(foundUserFromEmail.toObject(),secret)
                const token=jwt.sign({id:foundUserFromEmail._id},secret)
                res.status(200).json({
                message:"user login sucessfully",
                data:token,
                })
            }
            else{
                res.status(401).json({
                    message:"invalid credentials",
    
                })
            }
        }
        else{
            res.json({
                message:"user not found"
            })
        }
        
    } catch (err) {
        console.log(err)
        res.json({err:err})
    }
}

module.exports={
    createUser,getAllUsers,loginUser
}
