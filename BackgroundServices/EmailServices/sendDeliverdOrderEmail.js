const ejs = require('ejs')
const dotenv = require('dotenv')
const sendMail = require('../helpers/sendMail')
const Order = require('../models/order')
dotenv.config();

const sendDeliveredOrderEmail = async () => {

    const orders = await Order.find({ status: 2 });

    if (orders.length > 0) {
        for (let order of orders) {
            ejs.renderFile(
                'templetes/deliveredorder.ejs',
                { 
                    name: order.name,
                    products:order.products
                },
                async (err, data) => {
                    let messageOptions = {
                        from: process.env.EMAIL,
                        to: order.email,
                        subject: 'Your order has been delivered successfully',
                        html: data
                    }
                    try {
                        await sendMail(messageOptions)
                        await Order.findByIdAndUpdate(order._id, { $set: { status: 3 } });
                    } catch (error) {
                        console.log(error)
                    }
                }
            )
        }
    }
}

module.exports = sendDeliveredOrderEmail;