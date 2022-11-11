import mongoose from "mongoose"
 
const BooksSchema= new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    coverUrl:{
        type:String,
        required:true
    },
})
export default mongoose.model("Books",BooksSchema)