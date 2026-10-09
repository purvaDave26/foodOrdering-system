const router=require("express").Router()
const userController=require("../controller/UserController")
const authMiddleware = require("../middlewares/AuthMiddleware")

router.post("/createuser",userController.createUser)
 
//router.post("/user",authMiddleware("Restaurant"),userController.createUser)

router.get("/user",userController.getAllUsers)

router.post("/login",userController.loginUser)

module.exports=router