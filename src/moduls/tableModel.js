const mongooes=require("mongoose")
const Schema=mongooes.Schema

const tableModel=({
    tableId:{
        type:Number,
        require:true
    },
    
})
module.exports=mongooes.model("order",tableModel)