const express = require("express");
const app = express();
const router = express.Router();
const homepageController = require("../apps/controllers/homepageController")
const formController = require("../apps/controllers/formController");
const getHomepage = require("../apps/controllers/homepageController");

// Import Controllers or Handlers

// Define Route Handlers

const backendRoute = [
    "form",
	"/admin/login",
	"/admin/logout",
	"/admin/dashboard",
	"/admin/products",
	"/admin/products/create",
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

router.get("/", getHomepage)
router.get("/form", formController.getForm);
router.post("/action_form", formController.handleFormSubmission);

// Export
module.exports = router;
