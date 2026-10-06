const mongooes=require("mongoose")
const Schema=mongooes.Schema

const userModel=new Schema({
    fullname:{
        type:String,
        require:true
    },
    email:
    {
        type:String,
        require:true
    },
    password:
    {
        type:String,
        require:true
    }
})
module.exports=mongooes.model("useroredr",userModel)