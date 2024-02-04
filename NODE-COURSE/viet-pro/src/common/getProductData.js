const ProductModel = require("../apps/models/product");

async function getProductData() {
	return await ProductModel.find();
}

async function getProductDataQuantity() {
	const data = await getProductData();
	return data.length;
}

module.exports = { getProductData, getProductDataQuantity };
