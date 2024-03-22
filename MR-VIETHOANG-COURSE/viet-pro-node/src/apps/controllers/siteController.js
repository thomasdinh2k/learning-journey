const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const home = async (req, res) => {
	const category_list = await CategoryModel.find({});

	req.session.category_list = category_list;

	const featured_product_list = await ProductModel.find({
		featured: true,
		is_stock: true,
	})
		.sort({ _id: -1 })
		.limit(6);

	const new_product_list = await ProductModel.find({
		featured: false,
		is_stock: true,
	})
		.sort({ _id: -1 })
		.limit(6);

	res.render("site/index", {
		title: "Home",
		featured_product_list,
		new_product_list,
		category_list,
		category_name: ""
	});
};
const category = async (req, res) => {
	var id = req.params["id"];
	var category_list = req.session.category_list;
	console.log("The cat_id is", id);

	const category_name = (await CategoryModel.findById(id)).title;
	req.session.active_category = category_name;
	// Find products base on catID
	const productByCat = await ProductModel.find({
		cat_id: id,
	}).limit(6);

	// console.log(`Product by Cat`, productByCat[0]);
	// console.log("category_name",category_name);

	res.render("site/category", {
		title: "Category",
		category_name,
		category_list,
		product_amount: productByCat.length,
		product_item: productByCat,
	});
};
const product = async (req, res) => {
	var id = req.params["id"];
	console.log("The id is " + id);
	var category_list = req.session.category_list;
	var active_category = req.session.active_category;

	const product_item = await ProductModel.find({
		_id: id,
	});

	console.log("Found an Item", product_item[0]);

	res.render("site/product", {
		title: "Product",
		product_item: product_item[0],
		category_list,
		category_name: active_category,
	});
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
