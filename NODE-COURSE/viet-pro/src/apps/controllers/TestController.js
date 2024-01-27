const categoryModel = require("../models/category");
const productModel = require("../models/product");
const userModel = require("../models/user")

const test_1 = async (req, res) => {
	
	// const products = await productModel.find();
	const users = await userModel.find();
	
	console.log(users);
	
};

const test_2 = (req, res) => {
	categoryModel.find({}).exec()
		.then( test_Data_output => console.log(test_Data_output) )
	
};

const getProductData = (req, res) => {
	// productModel.find({ brand: "Apple" }).exec()
	// 	.then( productDataOutput => console.log(productDataOutput) )
}

module.exports = { test_1, test_2, getProductData };
