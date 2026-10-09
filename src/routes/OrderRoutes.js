const router=require("express").Router()
const orderController=require("../controller/orderController")
const authMiddleware = require("../middlewares/AuthMiddleware")

router.post("/order",orderController.order)

router.get("/getorder",orderController.getOrder)

router.post("/updateorder",authMiddleware("Restaurant"),orderController.updateOrder)
module.exports=router