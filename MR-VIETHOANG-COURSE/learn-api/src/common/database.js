const mongoose = require("mongoose")
const config = require("config")

module.exports = () => {
	mongoose
		.connect(config.get("db.mongodb"))

		.then(() => console.log(`Database at ${config.get("db.mongodb")} Connected!`))

	return mongoose
}
