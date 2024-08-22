const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://bholadas858:5gLjzp5oD0XTOgf0@notepad.we643.mongodb.net/?retryWrites=true&w=majority&appName=notepad');
const userschema= new mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    posts:[
        {type:mongoose.Schema.ObjectId,ref:"post"},
    ]

})

 module.exports=mongoose.model("user",userschema);