const test_1 = (req, res) => {
	res.send(`<h1>${req.params.id} and ${req.params.id2}</h1>`);
	console.log(req);
};

const test_2 = (req, res) => {
    res.redirect("/test_1");
}

const test = (req, res) => {
	const data = "fake data";

	// res.render("test", { data_variable_a: data });
	res.render("test", { data });
};

module.exports = { test, test_1, test_2 };
