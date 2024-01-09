const login = (req, res) => {
	res.render("admin/login", { error: null });
};

const processLogin = (req, res) => {
	const staticAuth = { email: "vietpro.edu.vn@gmail.com", password: "123456" };
	const { email: defaultEmail, password: defaultPassword } = staticAuth;
	const { email: userEmail, password: userPassword } = req.body;

	if (userEmail == defaultEmail && userPassword == defaultPassword) {
		res.render("admin/admin");
	} else {
		if (userEmail == defaultEmail) {
			// Keep Email the same
			res.render("admin/login", {
				error: "Mật khẩu không đúng, vui lòng thử lại",
				userEmail,userPassword
			});
		} else {
			res.render("admin/login", {
				error: `Không tìm thấy tài khoản dưới email: [ ${userEmail} ] `,
			});
		}
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
