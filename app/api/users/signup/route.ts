import { connect_to_db } from "@/db/dbConnect";
import user from "@/model/dbModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sendEmail } from "@/helpers/mailer";

connect_to_db()

export const POST = async (req: NextRequest) => {

    try {
        const reqbody = await req.json()
        const { username, email, password } = reqbody
        const userExist = await user.findOne({
            email
        })
        if (userExist) {
            return NextResponse.json({ error: "User already exist" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new user({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        // Email verification code
        await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})

        return NextResponse.json({ message: "User created and email send successfully", user: savedUser })



    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }

}