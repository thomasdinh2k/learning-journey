const test_1 = (req, res) => {
	
	
	req.session.Email = "abc@gmail.com";
	res.send(req.session.Email)
	console.log("saved");
};

const test_2 = (req, res) => {
	console.log("session", req.session);
	console.log(req.session.Email);
	if (req.session.email) {
		console.log(req.session.Email);
	}
};

module.exports = { test_1, test_2 };
