const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../apps/middlewares/auth");

// Import Controller
const TestController = require("../apps/controllers/test");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");
const { route } = require("../apps/app");

const Home = (req, res)=>{
    res.send("<h1>Home Page</h1>");
}
router.get("/", Home);

router.get("/test", TestController.test);
router.get("/test2", TestController.test2);
router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.login);
router.post("/admin/login", AuthMiddleware.checkLogin, AuthController.postLogin);
router.get("/admin/logout", AuthController.logout);

router.get("/admin/dashboard", AuthMiddleware.checkAdmin, AdminController.index);

router.get("/admin/products", AuthMiddleware.checkAdmin, ProductController.index);
router.get("/admin/products/create", AuthMiddleware.checkAdmin, ProductController.create);
router.get("/admin/products/edit/:id", AuthMiddleware.checkAdmin, ProductController.edit);
router.get("/admin/products/delete/:id", AuthMiddleware.checkAdmin, ProductController.del);  

module.exports = router;