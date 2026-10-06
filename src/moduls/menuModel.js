const mongooes=require("mongoose")
const Schema=mongooes.Schema

const menuModel=({
    menuId:{
        type:String,
        require:true
    },
    itemName:{
        type:String,
        require:true
    },
    description: 
    {
        type:String,
        require:true
    },

    itemPrice:{
        type:String,
        require:true
    },
    categoryId: 
    {
        type:String,
        require:true
    }
})
module.exports=mongooes.model("menus",menuModel)