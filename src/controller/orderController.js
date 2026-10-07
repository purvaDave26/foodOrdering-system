const orderModel=require("../moduls/orderModel")
const menuModel = require("../moduls/menuModel");
const order=async(req,res)=>
{
    try {
        const tableId=req.body.tableId
        console.log(req.body)
        const savedorder=await orderModel.create(req.body)
        const orders=await orderModel.find().populate("userId").populate("orderitem")
        
        if(orders.length>0)
        {
            // orders.forEach((order)=>{
            //     let totalamt=0;
            //     order.orderitem.forEach((menu) => {
            //     totalamt += Number(menu.itemPrice);});
            //      console.log("Total Amount:", totalamt);
            // })

             for (const order of orders) {

                let totalamt = 0;

                // Calculate total price
                order.orderitem.forEach((menu) => {
                    totalamt += Number(menu.itemPrice);
                });

                // Store calculated total
                order.totalamt = totalamt;

                // Save order
                await order.save();

                console.log("Total Amount:", totalamt);
            }
            res.json({
                message:"order",
                data:orders
            })  



    }
    else{
        res.json({
            message:"no order",
            data:orders
        })
    }
     } // Calculate total amount
    catch(err)
    {
        console.log(err)
        res.json({
            
            err:err
        })
    }

}
module.exports={
    order
}