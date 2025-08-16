const ejs = require('ejs')
const dotenv = require('dotenv')
const sendMail = require('../helpers/sendMail')
const Product = require('../models/product')
const User = require('../models/user')
dotenv.config();

const sendPromotionEmail = async () => {

    const users = await User.find();
    const products = await Product.aggregate([
        { $sample: { size: 5 } }
    ])

    for (let user of users) {
        ejs.renderFile(
            'templetes/promotion.ejs',
            { products},
            async (err, data) => {
                let messageOptions = {
                    from: process.env.EMAIL,
                    to: user.email,
                    subject: 'Your weekly products',
                    html: data
                }
                try {
                    await sendMail(messageOptions)
                } catch (error) {
                    console.log(error)
                }
            }
        )
    }

}

module.exports = sendPromotionEmail;