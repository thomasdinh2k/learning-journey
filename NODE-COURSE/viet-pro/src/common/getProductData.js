const productModel = require("../apps/models/product");

async function getProductData(incomingQuery = {}) {
	if (Object.keys(incomingQuery).length === 0) {
		return await productModel.find();
	} else {
		// Default Value
		let dfLimit = 5;
		let dfSkip = 0;

		let { limit, skip, ...queryConditions } = incomingQuery;

		if (limit == 0) {
			return [];
		}

		let finalParam = {
			limit: limit !== undefined ? limit : dfLimit,
			skip: skip !== undefined ? skip : dfSkip,
		};

		return await productModel
			.find(queryConditions)
			.limit(finalParam.limit)
			.skip(finalParam.skip);
	}
}

async function getProductAmount(query = {}) {
	const data = await getProductData(query);
	return data.length;
}

module.exports = { getProductData, getProductAmount };
