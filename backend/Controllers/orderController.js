import orderModel from "../Models/orderModel.js"
import userModel from "../Models/userModel.js"
import Stripe from "stripe"

const currency = 'inr'
const deliveryFee = 40

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const { origin } = req.headers
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map((value) => {
            return (
                {
                    price_data: {
                        currency: currency,
                        product_data: {
                            name: value.name
                        },
                        unit_amount: value.price * 100
                    },
                    quantity: value.quantity
                }
            )
        })

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Fee"
                },
                unit_amount: deliveryFee * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: "payment"
        })
        res.json({ success: true, session_url: session.url })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true })
            await userModel.findByIdAndUpdate(userId, { cartData: {} })
            res.json({ success: true })
        }
        else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({ success: false })
        }

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: "Status Updated..!" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export { placeOrderCOD, placeOrderStripe, allOrders, userOrders, updateOrderStatus,verifyStripe }