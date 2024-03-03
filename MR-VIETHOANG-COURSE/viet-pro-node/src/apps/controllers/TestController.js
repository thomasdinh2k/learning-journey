const categoryModel = require("../models/category");
const productModel = require("../models/product");
const userModel = require("../models/user");

const test_1 = async (req, res) => {
	// res.send(" Muốn test sản phẩm thì gõ /products ")

	// 	 {
	//     _id: new ObjectId('5fa3a9b19c0628354039fd6d'),
	//     email: 'nguyenvana@gmail.com',
	//     password: '123456',
	//     role: 'member',
	//     full_name: 'Nguyễn Văn A'
	//   },

	const userData = await userModel.find({
		email: "nguyenvana@gmail.com",
		password: "123456",
	});

	res.send(userData);
};

const test_2 = (req, res) => {
};

const getProductData = (req, res) => {
	const products = productModel.find();

	console.log(products);
	// res.send(products);
};

module.exports = { test_1, test_2, getProductData };
