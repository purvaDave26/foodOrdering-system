const router=require("express").Router()
const orderController=require("../controller/orderController")

router.post("/order",orderController.order)

module.exports=router