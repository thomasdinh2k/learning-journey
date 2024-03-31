const express = require("express");
const app = express();
const router = express.Router();
const homepageController = require("../apps/controllers/homepageController");
const formController = require("../apps/controllers/formController");
const getHomepage = require("../apps/controllers/homepageController");
const TestController = require("../apps/controllers/TestController");
const Auth = require("../apps/controllers/authController");
const DashboardController = require("../apps/controllers/dashboardController");
const ProductController = require("../apps/controllers/productController");

// Import Middlewares
const {
	ensureAuthenticated,
	checkAlreadyAuthenticated,
} = require("../apps/middlewares/auth");

// const {
// 	handleCheckCart
// } = require("../apps/middlewares/cart")

// app.use(handleCheckCart)

const uploadMiddleware = require("../apps/middlewares/upload");
const {
	home,
	category,
	product,
	search,
	cart,
	success,
	addToCart,
	updateCart,
	delCartItem,
	order
} = require("../apps/controllers/siteController");

// Import Controllers or Handlers

// Define Route Handlers


// router.get("/", getHomepage);
router.get("/test_1", TestController.test_1);
router.get("/test2", TestController.test_2);

router.get("/products", TestController.getProductData);

router.get("/form", formController.getForm);
router.post("/action_form", formController.handleFormSubmission);

// Authentication
router.get("/", checkAlreadyAuthenticated, Auth.login);
router.post("/", Auth.processLogin);

router.get("/logout", Auth.logout);

// Dashboard
router.get(
	"/admin/dashboard",
	ensureAuthenticated,
	DashboardController.dashboard
);

// Product Tasks
router.get(
	"/admin/products",
	ensureAuthenticated,
	ProductController.productDisplay
);
router.get("/admin/products/create", ProductController.create);

router.get("/admin/products/edit/:id", ProductController.edit);
router.post(
	"/admin/products/store",
	uploadMiddleware.single("thumbnail"),
	ProductController.store
);
router.post(
	"/admin/products/update/:id",
	uploadMiddleware.single("thumbnail"),
	ProductController.storeEdit
);

router.get("/admin/products/delete/:id", ProductController.del);

// Main Site
router.get("/home", home);
router.get("/category/:id", category);

// router.get("/product", product)
router.get("/product/:id", product);

router.get("/search", search);
router.get("/checkout", cart);
router.get("/success", success);


// TODO B1 Tạo middleware cart để khởi tạo giỏ hàng

// TODO B2 Tạo router dạng POST để nhận thông tin form (add-to-cart)
router.post("/add-to-cart", addToCart)
router.post("/update-cart", updateCart)
// TODO B3 Nhập thông tin từ form, từ ID ra object sản phẩm, check sản phẩm trong cart, nếu chưa có thì push array mới vào

router.get("/delete-cart-item-:id", delCartItem);

// ORDER
router.post("/order", order)

// Search
router.post("/search", ProductController.storeSearch)

// Export
module.exports = router;
