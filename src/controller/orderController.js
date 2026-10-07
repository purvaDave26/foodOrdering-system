const orderModel=require("../moduls/orderModel")
const menuModel = require("../moduls/menuModel");
const order=async(req,res)=>
{
    try {
        const tableId=req.body.tableId
        console.log(req.body)
        const savedorder=await orderModel.create(req.body)
        
        res.json({
            message:"order",
            data:savedorder
        })
     } // Calculate total amount
    catch(err)
    {
        res.json({
            err:err
        })
    }

}
module.exports={
    order
}