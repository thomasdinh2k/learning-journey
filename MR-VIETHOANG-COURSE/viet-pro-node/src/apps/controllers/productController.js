var slug = require("slug");
var path = require("path");
var fs = require("fs");

const pagination = require("../../common/pagination");

const {
	getProductData,
	getProductAmount,
} = require("../../common/getProductData");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

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
	// console.log("query test", test);

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

const create = async (req, res) => {
	// Session
	const userCredential = req.session.userCredential;

	const categories = await CategoryModel.find().sort({ _id: 1 });

	res.render("new_admin/Components/product/product_create", {
		userCredential,
		categories,
	});
};

const store = async (req, res) => {
	const { body, file } = req;

	// console.log(file);
	// console.log(body);

	// TODO: Đẩy toàn bộ file từ temp sang public/upload

	// Nhận thông tin từ form rồi đưa vào Database (ProductModel.save()). Save xong thì chuyển hướng
	const product = {
		name: body.name,
		price: body.price,
		status: body.status,
		cat_id: body.cat_id,
		features: body.featured == "yes" ? true : false,
		is_stock: body.is_stock,
		promotion: body.promotion,
		description: body.description,
		accessory: body.accessory,
		slug: slug(body.name),
	};

	if (file) {
		const thumbnail = `products/${file.originalname}`;
		fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
		product["thumbnail"] = thumbnail;
		new ProductModel(product).save();
		res.redirect("/admin/products");
	}

	// console.log(product);

	// new ProductModel(product).save();

	// 	{
	//   fieldname: 'thumbnail',
	//   originalname: 'NH-8.jpg',
	//   encoding: '7bit',
	//   mimetype: 'image/jpeg',

	//   filename: 'c130b040b5caca160569d94cd7d339b1',

	//   path: '/Users/thomas/coding/learning-journey/MR-VIETHOANG-COURSE/viet-pro-node/src/tmp/c130b040b5caca160569d94cd7d339b1',
	// /Users/thomas/coding/learning-journey/MR-VIETHOANG-COURSE/viet-pro-node/src/tmp/2a147a9d30ac9eed00dfb1e95b087d7b

	//   size: 5469776
	// }
};

const edit = async (req, res) => {
	// Session
	const userCredential = req.session.userCredential;
	const categories = await CategoryModel.find().sort({ _id: 1 });

	const { id } = req.params;
	const product = await ProductModel.findById(id);

	res.render("new_admin/Components/product/product_edit", {
		userCredential,
		categories,
		product,
	});
};

const storeEdit = async (req, res) => {
	const { body, file } = req;

	const id = req.params.id;
	// console.log(file);
	// console.log(body);

	const product = {
		name: body.name,
		price: body.price,
		status: body.status,
		cat_id: body.cat_id,
		features: body.featured == "yes" ? true : false,
		is_stock: body.is_stock,
		promotion: body.promotion,
		description: body.description,
		accessory: body.accessory,
		slug: slug(body.name),
	};

	if (file) {
		const thumbnail = `products/${file.originalname}`;
		fs.renameSync(file.path, path.resolve("src/public/images", thumbnail));
		product["thumbnail"] = thumbnail;
		// new ProductModel(product).updateOne();
	}

	await ProductModel.updateOne({ _id: id }, { $set: product });
	res.redirect("/admin/products");
	// console.log("product", product);
};

const storeSearch = async (req, res) => {
	// Sessions
	const keyword = req.body.search || "";

	let filter = {};

	if (keyword && keyword.trim() != "") {
		filter.$text = { $search: keyword, $diacriticSensitive: false };
	}

	// Finding products

	const product_list = await ProductModel.find(filter);

	res.render("site/search", {
		title: "Search",
		keyword,
		product_list,
		category_name: "",
	});
};

const update = (req, res) => {};
const del = async (req, res) => {
	const id = req.params.id;

	console.log("Obtained ID for deletion", id);

	await ProductModel.deleteOne({ _id: id });
	console.log("DONE WITH DELETION");
	res.redirect("/admin/products");
};

const ProductController = async (req, res) => {
	res.send("ProductController");
};

module.exports = {
	productDisplay,
	ProductController,
	create,
	index,
	edit,
	update,
	store,
	del,
	storeEdit,
	storeSearch,
};
