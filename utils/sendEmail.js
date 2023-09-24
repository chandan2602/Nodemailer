const nodemailer=require("nodemailer");
const sendEmail=async(to,messageContent)=>{
    try {
        //create transporter
        const transporter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:"chandankunayak2003@gmail.com",
                pass:"zvcjhmjnaztyxnsx",
            },
        });
        //message object
        const message={
            to,
            subject:"new message from nodemailer app",
            html:
            `
            <h3>you revceived a new mail from nodemailer app</h3>
            <p>${messageContent}</p>
            `
        }
        //send email
        const info=await transporter.sendMail(message);
        console.log('message sent',info.messageId);
    } catch (error) {
        console.log(error);
        throw new Error("email could not be send");
    }
};
module.exports=sendEmail;
