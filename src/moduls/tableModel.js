const mongooes=require("mongoose")
const Schema=mongooes.Schema

const tableModel=new Schema({
    tableId:{
        type:Number,
        require:true
    },
    
})
module.exports=mongooes.model("table",tableModel)