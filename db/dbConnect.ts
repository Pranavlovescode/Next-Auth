import mongoose from "mongoose";

export const connect_to_db = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection  = mongoose.connection
        connection.on('connected',()=>{
            console.log("Database connected successfully");            
        })
        connection.on('failed',(err)=>{
            console.log("Database connection failed"+err);
            process.exit()
        })
        
    } catch (error) {
        console.log("Something went wrong during connecting database");
        console.log(error);
    }
}