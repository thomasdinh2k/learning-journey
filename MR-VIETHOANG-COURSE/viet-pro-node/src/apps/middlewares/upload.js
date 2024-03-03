const config = require("config");

var multer = require("multer");
var upload = multer({
	dest: config.get("app.tmp"),
});

module.exports = upload;