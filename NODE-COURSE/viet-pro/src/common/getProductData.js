const ProductModel = require("../apps/models/product");

async function getProductData(query = {}) {
	return await ProductModel.find(query);
}

async function getProductDataQuantity(query = {}) {
	const data = await getProductData(query);
	return data.length;
}

module.exports = { getProductData, getProductDataQuantity };
