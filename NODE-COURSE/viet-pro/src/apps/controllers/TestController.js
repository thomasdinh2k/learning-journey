const categoryModel = require("../models/category");
const productModel = require("../models/product");

const test_1 = (req, res) => {
	res.send(`<h1>${req.params.id} and ${req.params.id2}</h1>`);
	console.log(req);
};

const test_2 = (req, res) => {
	categoryModel.find({}).exec()
		.then( test_Data_output => console.log(test_Data_output) )
	
};

const getProductData = (req, res) => {
	productModel.find({ brand: "Apple" }).exec()
		.then( productDataOutput => console.log(productDataOutput) )
}

module.exports = { test_1, test_2, getProductData };
