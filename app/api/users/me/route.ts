import { connect_to_db } from "@/db/dbConnect";
import User from "@/model/dbModel";
import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";
connect_to_db()

export const POST = async (req: NextRequest) => {
    try {
        const token = await getTokenData(req)
        const user = await User.findOne({_id:token}).select("-password")
        return NextResponse.json({message:"User found",sucess : true,user},{status:200})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}