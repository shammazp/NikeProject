import express from "express"
import { placeOrderCOD, placeOrderStripe, allOrders, userOrders, updateOrderStatus, verifyStripe } from "../Controllers/orderController.js"
import adminAuth from "../Middleware/adminAuth.js"
import userAuth from "../Middleware/userAuth.js"

const orderRouter = express.Router()

orderRouter.post("/list", adminAuth, allOrders)
orderRouter.post("/status", adminAuth, updateOrderStatus)

orderRouter.post("/cod", userAuth, placeOrderCOD)
orderRouter.post("/stripe", userAuth, placeOrderStripe)

orderRouter.post("/userorders",userAuth, userOrders)

orderRouter.post("/verifystripe",userAuth,verifyStripe)

export default orderRouter