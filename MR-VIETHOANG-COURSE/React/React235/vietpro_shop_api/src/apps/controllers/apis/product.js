const ProductModel = require("../../models/product");
const pagination = 

exports.index = async (req, res) => {
	const is_stock = req.query.is_stock || true;
	const is_featured = req.query.is_featured || false;
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	const skip = page * limit - limit;
	const products = await ProductModel.find({ is_stock, is_featured })
		.sort({
			_id: -1,
		})
		.skip(-1)
		.limit(limit);

	res.status(200).json({
		status: "success",
		filter: {
			is_stock,
			is_featured,
			page,
			limit,
		},
		data: {
			docs: products,
		},
		pages: await pagination(ProductModel),
	});
};
