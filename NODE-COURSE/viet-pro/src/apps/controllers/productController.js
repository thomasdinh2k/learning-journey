const ProductModel = require("../models/product")
const CategoryModel = require("../models/category")

async function getData () {
	return await ProductModel.find();
}



const index = async (req, res) => {
	const products = await ProductModel
		.find()
		.populate({path: "cat_id"})
		.sort( {_id: -1} )
		.limit( 10 )

	console.log(products);
	res.render("admin/products/product", { products: products })
};

const create = (req, res) => {
	res.render("admin/products/add_product");
};

const edit = (req, res) => {
	res.render("admin/products/edit_product");
};
const update = (req, res) => {};
const del = (req, res) => {};

module.exports = { create, index, edit, update, del, getData };
