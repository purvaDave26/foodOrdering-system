const tableModel=require("../moduls/tableModel")

const createTable=async(req,res)=>
{
    try {
        const tableId=req.body.tableId;
        const savedtable=await tableModel.insertOne({...req.body,tableId:tableId})
        console.log(savedtable)
        if(savedtable)
        {
            
        res.json({
            message:"table created",
            data:savedtable
        })
    }
    else
    {
        res.json({
            message:"table not created"
        })
    }
    
    } catch (error) {
        console.log(error)
        res.json({
            error:error
        })
    }
}
const getTable=async(req,res)=>
{
     const table=await tableModel.find()
        res.json({message:"get menu...",data:table})
}
module.exports={
    getTable,createTable
}