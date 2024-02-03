const ProductModel = require("../models/product")
const CategoryModel = require("../models/category")
const pagination = require("../../common/pagination")

async function getData () {
	return await ProductModel.find();
}



const index = async (req, res) => {
	
	const currentPage = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	

	const skip = (currentPage - 1) * limit;
	console.log("Current Skip is ", skip);

	const products = await ProductModel
		.find()
		.populate({path: "cat_id"})
		.sort( {_id: -1} )
		.skip(skip)
		.limit( limit )

	const totalRows = await ProductModel
		.find()
		.countDocuments()

	const totalPageNum = Math.ceil(totalRows / limit);

	console.log(pagination(currentPage, limit, totalRows));
	// console.log(products);
	res.render("admin/products/product", { 
	
		products: products,
		pages: pagination(currentPage, limit, totalRows),
		currentPage: currentPage,
		totalPageNum
		
	})
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
