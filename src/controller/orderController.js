const orderModel=require("../moduls/tableModel")
const menuModel = require("../moduls/menuModel");
const order=async(rqe,res)=>
{
    try {
        const tableId=req.body.tableId
        const fullname=req.body.fullname
        const orderitem=req.body.orderitem

          // Calculate total amount
        let totalamt = 0;

        menus.forEach((menu) => {
            totalamt += Number(menu.itemPrice);
        });

        // Create order
        const newOrder = new orderModel({
            tableId: tableId,
            fullname: fullname,
            orderitem: orderitem,
            totalamt: totalamt
        });

        // Save order
        const savedOrder = await newOrder.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder
        });



    } catch (error) {
        res.json({error:error})   
    }
}
module.exports={
    order
}