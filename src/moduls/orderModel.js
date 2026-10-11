const mongoose=require("mongoose")
const Schema=mongoose.Schema

const orderModel=new Schema({
    tableId:{
        type:mongoose.Schema.ObjectId,
        require:"table"
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"useroredr"
    },
    orderitem:[
    {
         type:mongoose.Schema.ObjectId,
         ref:"menus"
    }
    ],
    totalamt:{
        type:String,
        require:true
    },
    orderStatus:{
        type:String,
        enum:["pending","preparing","completed"]
    }
})
module.exports=mongoose.model("finalorder",orderModel)
