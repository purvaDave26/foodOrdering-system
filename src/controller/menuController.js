const menuModel=require("../moduls/menuModel")


const createMenu=async(req,res)=>
{
    try {
        const itemName=req.body.itemName;
        const itemPrice=req.body.itemPrice;

        const savedMenu=await menuModel.insertOne({...req.body,itemName:itemName,itemPrice:itemPrice})

        console.log(savedMenu)
        if(savedMenu)
        {
            res.json({
                message:"menu created",
                data:savedMenu
            })
        }
        else{
            res.json({
                message:"menu not created"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            error:error
        })
    }
}
const getMenu=async(req,res)=>
{
     const menu=await menuModel.find()
        res.json({message:"get menu...",data:menu})
}
module.exports={
    getMenu,createMenu
}