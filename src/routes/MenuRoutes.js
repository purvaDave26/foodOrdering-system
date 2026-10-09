const router=require("express").Router()
const menuController=require("../controller/menuController")


router.get("/menu",menuController.getMenu)

router.post("/creatmenu",menuController.createMenu)
module.exports=router