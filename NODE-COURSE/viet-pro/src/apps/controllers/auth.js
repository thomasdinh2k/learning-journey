const login = (req, res) => {
	res.render("admin/login");
};

const processLogin = (req, res) => {
	let errorMessage = null;
	const staticAuth = { email: "vietpro.edu.vn@gmail.com", password: "123456" };
	const { email: defaultEmail, password: defaultPassword } = staticAuth;
	const { email: userEmail, password: userPassword } = req.body;

	if (userEmail == defaultEmail && userPassword == defaultPassword) {
		res.render("admin/admin");
	} else {
		errorMessage = "Sai rồi lượm ơi!";
		res.render("admin/admin", errorMessage);
	}
};

const logout = (req, res) => {
	res.send("admin/logout");
};

module.exports = {
	login,
	logout,
	processLogin,
};
