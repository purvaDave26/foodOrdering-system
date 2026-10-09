const router=require("express").Router()
const orderController=require("../controller/orderController")

router.post("/order",orderController.order)

router.get("/getorder",orderController.getOrder)

router.post("/updateorder",orderController.updateOrder)
module.exports=router