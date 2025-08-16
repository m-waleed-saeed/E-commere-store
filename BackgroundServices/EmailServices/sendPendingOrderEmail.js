const ejs = require('ejs')
const dotenv = require('dotenv')
const sendMail = require('../helpers/sendMail')
const Order = require('../models/order')
dotenv.config();

const sendPendingOrderEmail = async () => {

    const orders = await Order.find({ status: 0 });

    if (orders.length > 0) {
        for (let order of orders) {
            ejs.renderFile(
                'templetes/pendingorder.ejs',
                { 
                    name: order.name,
                    products:order.products
                },
                async (err, data) => {
                    let messageOptions = {
                        from: process.env.EMAIL,
                        to: order.email,
                        subject: 'Your order has been placed successfully',
                        html: data
                    }
                    try {
                        await sendMail(messageOptions)
                        await Order.findByIdAndUpdate(order._id, { $set: { status: 1 } });
                    } catch (error) {
                        console.log(error)
                    }
                }
            )
        }
    }
}

module.exports = sendPendingOrderEmail;