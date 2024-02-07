const productModel = require("../models/product");

const dashboard = async (req, res) => {
	const products = await productModel.find({});

	const userCredential = req.session.userCredential

	// let userCredential = {
	// 	_id: "5fa434bfceb043cc721e41d4",
	// 	email: "nguyenvanf@gmail.com",
	// 	password: "123456",
	// 	role: "member",
	// 	full_name: "Nguyễn Văn F",
	// };

	res.render("new_admin/dashboard", {
		product_quantity: products.length,
		userCredential,
	});
};

const testAnnounce = (req, res) => {
	res.send("Please route to <b> admin/dashboard <b> to go to the Dashboard");
};

module.exports = { dashboard, testAnnounce };
