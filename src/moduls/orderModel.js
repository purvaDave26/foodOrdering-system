const mongooes=require("mongoose")
const Schema=mongooes.Schema

const orderModel=({
    tableId:{
        type:mongoose.Schema.ObjectId,
        require:"order"
    },
    fullname:{
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
    }
})
module.exports=mongooes.model("finalorder",orderModel)
