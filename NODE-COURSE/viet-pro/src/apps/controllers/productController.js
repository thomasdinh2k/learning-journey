const { getProductData } = require("../../common/getProductData");

const productDisplay = async (req, res) => {
	// Session
	const userCredential = req.session.userCredential;

	// Extract query parameter
	const { page, limit, category } = req.query;

	// Calculate Pagination
	const pageNumber = parseInt(page, 10) || 1;
	const productPerPage = parseInt(limit, 10) || 5;
	const skip = pageNumber * productPerPage - productPerPage;

	const test = { pageNumber, productPerPage, skip, category };
	console.log("query test", test);

	// Query data
	const data = await getProductData({ limit: limit, skip: skip });
	console.log("Product_feed", data.length);

	res.render("new_admin/Components/product/product_display", {
		userCredential,
		productData: data,
	});
};

const index = (req, res) => {
	res.send("OK");
};
const create = (req, res) => {};
const edit = (req, res) => {};
const update = (req, res) => {};
const del = (req, res) => {};

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
	del,
};
