const express = require("express");
const app = express();
const router = express.Router();

const path = require("path");

const homepageController = require("../apps/controllers/homepageController");
const formController = require("../apps/controllers/formController");
const getHomepage = require("../apps/controllers/homepageController");
const TestController = require("../apps/controllers/TestController");
const Auth = require("../apps/controllers/authController");
const DashboardController = require("../apps/controllers/dashboardController");
const ProductController = require("../apps/controllers/productController");

// Import Controllers or Handlers
const {
	ensureAuthenticated,
	checkAlreadyAuthenticated,
} = require("../apps/middlewares/auth");
const upload = require("../apps/middlewares/create");

// Define Route Handlers

const backendRoute = [
	"form",
	// "/admin/login",
	// "/admin/logout",
	// "/admin/dashboard",
	// "/admin/products",
	// "/admin/products/create",
	"/admin/products/edit",
	"/admin/products/delete",
];

function createRoute(routePath) {
	router.get(routePath, (req, res) => {
		res.send(`This is the route to <b>${routePath}</b>`);
	});
}

backendRoute.forEach((routePath) => {
	createRoute(routePath);
});

// router.get("/", getHomepage);
router.get("/test_1", TestController.test_1);
router.get("/test2", TestController.test_2);
router.get("/test3", (req, res) => {
	res.send(`Current path is ${path.join(__filename)}`);
});

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
router.get("/admin/products/create", ProductController.create_page);

router.post(
	"/admin/products/create",
	upload.single("thumbnail"),
	ProductController.storeNewProduct
);

// Export
module.exports = router;
