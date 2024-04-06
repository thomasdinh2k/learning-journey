const express= require("express");
const router = express.Router();

const ProductController = require("../app/controllers/apis/productsController")
const CategoryController = require("../app/controllers/apis/categoriesController")
const OrderController = require("../app/controllers/apis/ordersController")


//
router.get("/api/v1/category", CategoryController.index)
router.get("/api/v1/product", ProductController.index)
router.get("/api/v1/order", OrderController.index)



module.exports = router