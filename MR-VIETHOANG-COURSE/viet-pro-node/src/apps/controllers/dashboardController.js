const productModel = require("../models/product");

const dashboard = async (req, res) => {
	const products = await productModel.find({});

	const userCredential = req.session.userCredential

	res.render("new_admin/Components/dashboard", {
		product_quantity: products.length,
		userCredential,
	});
};

const testAnnounce = (req, res) => {
	res.send("Please route to <b> admin/dashboard <b> to go to the Dashboard");
};

module.exports = { dashboard, testAnnounce };
