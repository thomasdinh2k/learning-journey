const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema(
	{
		thumbnail: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: "",
		},
		price: {
			type: Number,
			default: 0,
		},
		cat_id: {
			type: mongoose.Types.ObjectId,
			required: true,
		},
		price: {
			type: Number,
			default: 0,
		},
		status: {
			type: String,
			default: "",
		},
		featured: {
			type: Boolean,
			default: false,
		},
		promotion: {
			type: String,
			default: "",
		},
		warranty: {
			type: String,
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
		is_stock: {
			type: Boolean,
			default: true,
		},
		name: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const categoryModel = mongoose.model("Categories", categorySchema);

module.exports = categoryModel;
