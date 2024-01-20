const mongoose = require("mongoose");

module.exports = () => {
	mongoose.connect("mongodb://localhost/vp_shop_project");
	return mongoose;
};
