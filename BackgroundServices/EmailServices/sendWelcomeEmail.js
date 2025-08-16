const ejs = require('ejs')
const dotenv = require('dotenv')
const sendMail = require('../helpers/sendMail')
const User = require('../models/user')
dotenv.config();

const sendWelcomeEmail = async () => {

    const users = await User.find({ status: 0 });
    
    if (users.length > 0) {
        for (let user of users) {
            ejs.renderFile(
                'templetes/welcome.ejs',
                { name: user.name },
                async (err, data) => {
                    let messageOptions = {
                        from: process.env.EMAIL,
                        to: user.email,
                        subject: 'Welcome to Beauty Store',
                        html: data
                    }
                    try {
                        await sendMail(messageOptions)
                        await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
                    } catch (error) {
                        console.log(error)
                    }
                }
            )
        }
    }
}

module.exports = sendWelcomeEmail;