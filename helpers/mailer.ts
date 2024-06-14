import nodemailer from 'nodemailer';
import User from '@/model/dbModel';
import {v4 as uuidv4} from 'uuid'
export const sendEmail = async ({ email, emailType, userId }: any) => {
    // Do this on later stage
    try {
        const token = uuidv4()
        if(emailType==="VERIFY"){
            // const hashedToken = await bcrypt.hash(userId.toString(),10)
            await User.findByIdAndUpdate(userId,{
                verifiedToken:token,
                verifiedTokenExpire:Date.now()+3600000
            })
        }else if(emailType==="FORGET"){
            // const hashedToken = await bcrypt.hash(userId.toString(),10)
            await User.findByIdAndUpdate(userId,{
                forgetPasswordToken:token,
                forgetPasswordTokenExpire:Date.now()+3600000
            })
        }
        var transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "9bb1b8e0fa96dd",
              pass: "7d402cc65ab914"
            }
          });
    
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: `<h1>Your verification token</h1>
                    <p>http://localhost:3000/api/${token}</p>`, // html body
        });
        return info
    } catch (error) {
        console.log("Error in sending email"+ error);
        
    }
}