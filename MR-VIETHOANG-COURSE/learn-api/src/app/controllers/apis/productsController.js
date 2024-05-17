const ProductModel = require("../../models/ProductsModel")
const pagination = require("../../../libs/pagination")

exports.index = async (req, res) => {
	const query = {}

	query.is_stock = req.query.is_stock || true
	query.is_featured = req.query.is_featured || false

	if(req.query.name) {
		query.$text = {$search: req.query.name}
	}

	const page = Number(req.query.page) || 1
	const limit = Number(req.query.limit) || 10
	const skip = page * limit - limit

	const products = await ProductModel.find(query)
		.sort({ _id: -1 })
		.skip(skip)
		.limit(limit)

	res.status(200).json({
		status: "success",
		filters: {
			is_featured: query.is_featured,
			is_stock: query.is_stock,
			page,
			limit,
		},
		data: {
			docs: products,
			pages: await pagination(ProductModel, query, page, limit),
		},
	})
}

exports.show = async (req, res) => {
	const {id} = req.params
	const product = await ProductModel.findById(id)
	res
		.status(200)
		.json({
			status: "success", 
			data: product,
		})
}

exports.comments = async (req, res) => {
	const {id} = req.params 
	const query = {}
	query.product_id = id;

	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = page * limit - limit;
	const comments = await CommentModel.find(query)
		.sort({_id: -1})
		.skip(skip)
		.limit(limit)

	res.status(200).json({
		status: "success",
		filters: {
			page,
			limit,
		},
		data:{
			docs: comments,
			pages: await pagination(CommentModel, query, page, limit),
		}
	})
}

exports.storeComments = async (req, res) => {
	const { id } = req.params;
	const { name, email, content } = req.query;
	const comment = {
		product_id: id,
		name,
		email,
		content
	}
	await CommentModel(comment).save();

	res
		.status(201)
		.json({
			status: "success",
			message: "comment created successfully"
		})
}