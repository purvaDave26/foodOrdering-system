const router=require("express").Router()
const userController=require("../controller/UserController")

router.post("/createuser",userController.createUser)

router.get("/user",userController.getAllUsers)

router.post("/login",userController.loginUser)

module.exports=router