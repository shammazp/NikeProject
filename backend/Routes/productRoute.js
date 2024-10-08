import express from "express"
import { addProducts, listProducts, removeProducts, listProduct } from "../Controllers/productController.js"
import upload from '../Middleware/multer.js'
import adminAuth from "../Middleware/adminAuth.js"

const productRouter = express.Router()

productRouter.post("/add",adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]), addProducts)
productRouter.post("/remove",adminAuth, removeProducts)
productRouter.post("/product", listProduct)
productRouter.get("/list", listProducts)

export default productRouter