const productModel = require("../models/product");

const dashboard = async (req, res) => {
	const products = await productModel.find({});

	console.log("Products = ", products.length);

	res.render("new_admin/dashboard", {product_quantity: products.length});
};

const testAnnounce = (req, res) => {
	res.send("Please route to <b> admin/dashboard <b> to go to the Dashboard");
};

module.exports = { dashboard, testAnnounce };
