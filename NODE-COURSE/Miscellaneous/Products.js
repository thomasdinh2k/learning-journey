const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
	{
		name: String,
		price: Number,
		colour: String,
		brand: String,

		// Additional Schema Property
		createdAt: Date,
		updatedAt: Date,
		bestFriend: mongoose.SchemaTypes.ObjectId,
		feature: [String],
		address: {
			street: String,
			city: String,
		},
	},
	{ collection: "Products" }
);

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
