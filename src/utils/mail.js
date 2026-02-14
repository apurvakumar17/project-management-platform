import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagerlink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHtml = mailGenerator.generate(options.mailgenContent)

    nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_USER,
        pass: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error("Email service failed silently due to credentials maybe!")
    }
}

const emailVerificationMailgenContent = (username,verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to Apurva's App:",
            action: {
                intruction: "Bro to verify your email please click on the following button: ",
                button: {
                    color: "#22BC66",
                    text: "Verify your email",
                    link: verificationUrl
                },
                outro: "Bro, If you need any help you may reply this email!"
            }
        }
    }
}

const forgotPasswordMailgenContent = (username,verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Request to reset the password",
            action: {
                intruction: "Bro to reset the password please click on the following button: ",
                button: {
                    color: "#5322bc",
                    text: "Reset your password",
                    link: verificationUrl
                },
                outro: "Bro, If you need any help you may reply this email!"
            }
        }
    }
}

export {
    emailVerificationMailgenContent, 
    forgotPasswordMailgenContent,
    sendEmail
}