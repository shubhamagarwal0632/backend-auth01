import mongoose, { mongo } from "mongoose";

mongoose.connect('mongodb+srv://allinone1creater:yZcMFEN7xScca50R@webdevmastry.qdmg1eg.mongodb.net/').then(()=>{
    console.log('mongo db is connected successfully.......')
})

const userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export default mongoose.model('usernew',userschema)