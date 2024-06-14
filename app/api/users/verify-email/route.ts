import { connect_to_db } from "@/db/dbConnect";
import User from "@/model/dbModel";
import { NextRequest, NextResponse } from "next/server";

connect_to_db()

export const POST = async (req:NextRequest)=>{
    try {
        const reqbody = await req.json()
        const {token} = reqbody
        console.log(token);
        const user_token = User.findOne({verifiedToken:token},{verifiedTokenExpire:{$gt:Date.now()}})
        if(!user_token){
            return NextResponse.json({error:"Invalid token"},{status:400})
        }
        console.log(user_token)
        user_token.isVerified = true
        user_token.verifiedToken = undefined
        user_token.verifiedTokenExpire = undefined

        await user_token.save()
        return NextResponse.json({message:"Email verified successfully"},{status:200})

    } catch (error:any) {
        return NextResponse.json({ error: error.message },{status:500})
    }
}