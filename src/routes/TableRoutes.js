const router=require("express").Router()
const tableController=require("../controller/tableController")

router.get("/table",tableController.getTable)

module.exports=router