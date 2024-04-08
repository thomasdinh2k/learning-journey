const mongoose = require("../../common/database")()

const orderSchema = new mongoose.Schema(
	{
		totalPrice: {
			type: Number,
			required: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			default: 0,
		},
		items: [
			{
				prd_id: {
					type: mongoose.Types.ObjectId,
					required: true,
				},
				qty: {
					type: Number,
					required: true,
					default: 0,
				},
				price: {
					type: Number,
					required: true,
					default: 0,
				},
			},
		],
	},
	{ timestamps: true }
)

const OrderModel = mongoose.model("Orders", orderSchema, "orders")
module.exports = OrderModel
