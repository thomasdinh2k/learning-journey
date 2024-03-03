const pagination = require("../../common/pagination");
const fs = require("fs");
const path = require("path");
const productModel = require("../models/product");

const {
	getProductData,
	getProductAmount,
} = require("../../common/getProductData");

const productDisplay = async (req, res) => {
	// Session
	const userCredential = req.session.userCredential;

	// Extract query parameter
	const { page, limit = 5, category } = req.query;

	// Calculate Pagination
	const pageNumber = parseInt(page, 10) || 1;
	const productPerPage = parseInt(limit, 10) || 5;
	const skip = pageNumber * productPerPage - productPerPage;

	const test = { pageNumber, productPerPage, skip, category };

	// Test new algorithm
	const totalRow = await getProductAmount({});
	const { totalPageNum, finalPageList: pageList } = pagination(
		totalRow,
		limit,
		pageNumber
	);
	// console.log("Test New Algorithm Result", pageList);

	// Query data
	const data = await getProductData({ limit: limit, skip: skip });
	// console.log("Product_feed", data.length);

	res.render("new_admin/Components/product/product_display", {
		userCredential,
		productData: data,
		pageList,
		currentPage: pageNumber,
		totalPageNum,
	});
};

const index = (req, res) => {
	res.send("OK");
};

const create_page = (req, res) => {
	// Session
	const userCredential = req.session.userCredential;

	res.render("new_admin/Components/product/product_create", {
		userCredential,
	});
};

const storeNewProduct = async (req, res) => {
	const { file, body } = req;

	console.log(file);

	var new_product_data = {
		// _id: ObjectId("5f8a15cb2eec5d5bbf48670d"),
		// thumbnail: "products/Nokia-3.1-Black.png",
		description: body.description,
		price: body.price,
		cat_id: "5f8a0b89dd21e25249b6295f",
		status: body.status,
		featured: body.featured == "on" ? true : false,
		promotion: body.promotion,
		warranty: body.warranty,
		accessories: body.accessories,
		is_stock: body.is_stock == "No" ? false : true,
		name: body.name,
		slug: 'test'
		// slug: "nokia-3",
	};

	if (file) {
		let thumbnail = "products/" + file.originalname;

		var tmp_file_dest = file.path;

		fs.renameSync(
			tmp_file_dest, // Old file directory
			path.resolve("src/public/images", thumbnail) // New
		);

		new_product_data.thumbnail = thumbnail;

	}
	
	// Save file
	new productModel(new_product_data).save();

	// Redirect
	res.redirect("/admin/products");

	console.log("New data saved!");
};

const edit = (req, res) => {};
const update = (req, res) => {};
const del = (req, res) => {};

const ProductController = async (req, res) => {
	res.send("ProductController");
};

module.exports = {
	productDisplay,
	ProductController,
	create_page,
	storeNewProduct,
	index,
	edit,
	update,
	del,
};
