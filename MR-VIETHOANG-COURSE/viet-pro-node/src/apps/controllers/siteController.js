const ProductModel = require("../models/product");

const home = async (req, res) => {
	const featured_product_list = await ProductModel.find({
		featured: true,
		is_stock: true,
	}).sort({ _id: -1 }).limit(6);
	
	const new_product_list = await ProductModel.find({
		featured: false,
		is_stock: true
	}).sort({ _id: -1 }).limit(6);

	console.log("featured", featured_product_list);

	res.render("site/index", {
		title: "Home",
		featured_product_list,
		new_product_list
	});
};
const category = (req, res) => {
	res.render("site/category", { title: "Category" });
};
const product = (req, res) => {
	res.render("site/product", { title: "Product" });
};
const search = (req, res) => {
	res.render("site/search", { title: "Search" });
};
const cart = (req, res) => {
	res.render("site/cart", { title: "Cart" });
};
const success = (req, res) => {
	res.render("site/success", { title: "Success" });
};

const getFeatureProduct = async (req, res) => {
	const featured_product_list = await ProductModel.find({
		featured: true,
	}).sort({ _id: -1 });

};

module.exports = {
	home,
	category,
	product,
	search,
	cart,
	success,
};
