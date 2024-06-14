import { connect_to_db } from "@/db/dbConnect";
import User from "@/model/dbModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
connect_to_db()

export const POST = async (req: NextRequest) => {

    try {
        const reqbody = await req.json()
        const {email, password} = reqbody
        const userExist = await User.findOne({email})
        if (!userExist) {
            return NextResponse.json({error:"User not found"},{status:404})
        }
        const isMatch = await bcrypt.compare(password,userExist.password)
        if(!isMatch){
            return NextResponse.json({error:"Invalid credentials"},{status:401})
        }

        const token = jwt.sign({id:userExist._id},process.env.TOKEN_SECRET!,{expiresIn:"1d"})
        const response_token =  NextResponse.json({message:"Login successful",token:token},{status:200})
        response_token.cookies.set("signin_cookie",token,{
            httpOnly:true
        })
        return response_token
    } catch (error: any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}