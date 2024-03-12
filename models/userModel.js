import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{
    type:string,
    require:true, 
    trim:true,
   },
   email:{
    type:string,
    require:true,
    unique:true
   },
   password:{
    type:string,
    require : true,
   },
   phone:{
    type:string,
    require:true,
   },
   address:{
    type:string,
    require:true
   },
   role:{
    type:Number,
    default:0
   }
},{timestamps:true})

export default mongoose.model('users',userSchema)