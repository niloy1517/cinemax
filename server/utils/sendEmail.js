import nodemailer from 'nodemailer'

const sendEmail = async ({email, subject, message}) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },

    })

    const mailOptions = {
        from: `"Cinemax Support" <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject,
        html: message
    }
    
    return await transporter.sendMail(mailOptions)
}

export default sendEmail