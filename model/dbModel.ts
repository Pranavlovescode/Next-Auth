const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    usename:{
        type: String,
        required : [true , "username is required"],
        unique : true,
    },
    email:{
        type: String,
        required : [true , "Email is required"],
        unique : true,
    },
    password:{
        type: String,
        required : [true , "Password is required"],
    },
    isVerified:{
        type: Boolean,
        default : false,
    },
    isAdmin:{
        type: Boolean,
        default : false,
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpire:Date,  
    verifiedToken: String,
    verifiedTokenExpire: Date,

})

const user = mongoose.models.test_data || mongoose.model('test_data', Schema)
export default user