import { connect_to_db } from "@/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";


connect_to_db()

export const GET = async(req:NextRequest)=>{
    try {

        const response = NextResponse.json({message:"Logout Successful"},{status:200})
        // response.cookies.set("signin_cookie","",{httpOnly:true})
        response.cookies.delete("signin_cookie")
        return response
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}