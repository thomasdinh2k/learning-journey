const pagination = require("../../common/pagination")

const { getProductData, getProductAmount } = require("../../common/getProductData");

const productDisplay  = async (req, res) => {
	// Session
	const userCredential = req.session.userCredential;

	// Extract query parameter
	const { page, limit  = 5, category } = req.query;

	// Calculate Pagination
	const pageNumber     = parseInt(page, 10) || 1;
	const productPerPage = parseInt(limit, 10) || 5;
	const skip           = pageNumber * productPerPage - productPerPage;

	const test           = { pageNumber, productPerPage, skip, category };
	console.log("query test", test);

	// Test new algorithm
	const totalRow       = await getProductAmount( {} );
	const pageList       = pagination(totalRow, limit, pageNumber);
	console.log("Test New Algorithm Result", pageList);


	// Query data
	const data           = await getProductData({ limit: limit, skip: skip });
	// console.log("Product_feed", data.length);

	res.render("new_admin/Components/product/product_display", {
		userCredential,
		productData         : data,
		pageList,
		currentPage         : pageNumber
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
