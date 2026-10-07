const tableModel=require("../moduls/tableModel")

const getTable=async(req,res)=>
{
     const table=await tableModel.find()
        res.json({message:"get menu...",data:table})
}
module.exports={
    getTable
}