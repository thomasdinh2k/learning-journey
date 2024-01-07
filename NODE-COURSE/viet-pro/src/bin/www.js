// Main file, others will export module to this
const app = require("../apps/app");
config = require("config");

const server = app.app.listen((port = config.get("app.port")), (req, res) => {
	console.log(`Port ${port}: Success!`);
});
