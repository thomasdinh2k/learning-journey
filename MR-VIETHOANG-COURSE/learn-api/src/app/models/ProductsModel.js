const mongoose = require("../../common/database")()

const productSchema = new mongoose.Schema(
	{
		name: {
			text:true,
			type: String,
			required: true,
		},
		cat_id: {
			type: mongoose.Types.ObjectId,
			ref: "Categories",
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			default: "",
		},
		price: {
			type: String,
			default: "0",
			required: true,
		},
		accessories: {
			type: String,
			default: "",
		},
		promotion: {
			type: String,
			default: "",
		},
		details: {
			type: String,
			default: "",
		},
		is_stock: {
			type: Boolean,
			default: true,
		},
		is_featured: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

const ProductModel = mongoose.model("Products", productSchema, "products")
module.exports = ProductModel
