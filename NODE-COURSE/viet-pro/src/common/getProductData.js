const productModel = require("../apps/models/product");

async function getProductData(query = {}) {
	return await productModel.find(query).limit(5);
}

async function getProductAmount(query = {}) {
	const data = await getProductData(query);
	return data.length;
}

module.exports = { getProductData, getProductAmount };
