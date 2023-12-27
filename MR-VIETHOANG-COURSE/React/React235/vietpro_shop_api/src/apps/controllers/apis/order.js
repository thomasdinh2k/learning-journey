const mongoose = require('../../../common/database')();

exports.index = (req, res) => {
	res.send("order");
};

// exports.order = (req, res) => {
// 	res.send("order");
// };
