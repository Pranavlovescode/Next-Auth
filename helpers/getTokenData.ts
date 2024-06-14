import { connect_to_db } from "@/db/dbConnect";
import User from "@/model/dbModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
connect_to_db()

export const getTokenData = async (req: NextRequest) => {
    try {
        const token = req.cookies.get("signin_cookie")?.value || ""
        const decodedTOken:any = jwt.verify(token,process.env.TOKEN_SECRET!)
        return decodedTOken.id
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}