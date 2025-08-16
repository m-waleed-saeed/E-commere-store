const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

const { EMAIL, PASSWORD } = process.env

function createTransporter(config) {
    const transproter = nodemailer.createTransport(config);
    return transproter;
}

let configurations = {
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: EMAIL,
        pass: PASSWORD
    }
}



const sendMail = async (messageOption) => {
    const transproter = await createTransporter(configurations);
    await transproter.verify();

    await transproter.sendMail(messageOption, (error, info) => {
        if (error) {
            console.error(error);
        }
        console.log(info.response)
    })
}

module.exports = sendMail;