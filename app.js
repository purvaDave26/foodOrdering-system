const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const getDBConnection=require("./src/utils/DBConnection")
getDBConnection()

app.use(express.json())

const userRoutes=require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const orderRoutes=require("./src/routes/OrderRoutes")
app.use("/order",orderRoutes)

const PORT=3000

app.listen(PORT,()=>
{
    console.log(`server started ${PORT}`)
})