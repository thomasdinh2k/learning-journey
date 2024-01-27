const mongoose = require("../../common/database")();

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
		role: {
			type: String,
			default: "user",
		},
	},
	{ timestamps: true, collection: "Users" }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
