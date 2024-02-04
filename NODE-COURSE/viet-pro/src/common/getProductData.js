const ProductModel = require("../apps/models/product");

async function getProductData(param = "") {
	return await ProductModel.find(param);
}

async function getProductDataQuantity(param = "") {
	const data = await getProductData(param);
	return data.length;
}

module.exports = { getProductData, getProductDataQuantity };
