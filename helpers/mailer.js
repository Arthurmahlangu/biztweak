const nodemailer = require("nodemailer");

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

const isHTML = (str) => /<[a-z][\s\S]*>/i.test(str);

module.exports = async (to, subject, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_SECURE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
    
        let text = null
        let html = null
    
        if (isHTML(body)) {
            html = body
        } else {
            text = body
        }
    
        const info = {
            from: process.env.MAIL_FROM, to, subject, text, html
        }
    
        const send = await transporter.sendMail(info)

        return {
            error: false,
            data: send
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}