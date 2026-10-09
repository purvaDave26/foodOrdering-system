const router=require("express").Router()
const tableController=require("../controller/tableController")

router.get("/table",tableController.getTable)

router.post("/createtable",tableController.createTable)
module.exports=router