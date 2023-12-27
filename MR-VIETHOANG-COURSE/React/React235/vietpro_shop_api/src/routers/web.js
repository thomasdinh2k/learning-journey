const express = require("express");
const router = express.Router();


const CategoryController = require("../apps/controllers/apis/category");
const ProductController = require("../apps/controllers/apis/product");
const OrderController = require("../apps/controllers/apis/order");



router.get("/category" , CategoryController.index);
router.get("/products" , ProductController.index);
router.get("/order" , OrderController.index);


module.exports = router;