const mongoose = require("mongoose");
const databaseLink = "mongodb://localhost/vietpro_project_official";

module.exports = () => {
	mongoose
		.connect(databaseLink)
		.then(console.log(`数据 ${databaseLink} 库连接成功!`));
	return mongoose;
};
