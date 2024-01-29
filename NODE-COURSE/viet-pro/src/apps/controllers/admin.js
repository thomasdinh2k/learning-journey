const ProductModel = require("../models/product");

async function getData() {
	return await ProductModel.find();
}

const dashboard = async (req, res) => {
	const data = await getData();
	console.log("DATA", data.length);
	res.render("admin/dashboard", { productQuantity: data.length });
};

module.exports = dashboard;
