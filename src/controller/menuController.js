const menuModel=require("../moduls/menuModel")

const getMenu=async(req,res)=>
{
     const menu=await menuModel.find()
        res.json({message:"get menu...",data:menu})
}
module.exports={
    getMenu
}