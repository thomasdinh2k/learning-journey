const login = (req, res) => {
	res.render("admin/login", { error: null });
};

const processLogin = (req, res) => {
	const staticAuth = { email: "vietpro.edu.vn@gmail.com", password: "123456" };
	const { email: defaultEmail, password: defaultPassword } = staticAuth;
	const { email: userEmail, password: userPassword } = req.body;

	// Initialize errorCount in session if doesn't exist
	if (req.session.errorCount === undefined) {
		req.session.errorCount = 0;
	}

	if (userEmail == defaultEmail && userPassword == defaultPassword) {
		req.session.errorCount = 0; // Reset errorCount if Login success
		res.render("admin/admin");
	} else {
		if (req.session.errorCount >= 3) {
			console.log("Test direct to login failed page");
			res.render("admin/login_failed", {errorCount: req.session.errorCount, error: "Đã quá số lần thử đăng nhập, vui lòng liên hệ quản trị viên"})
		}

		req.session.errorCount++;
		if (userEmail == defaultEmail) {
			// Keep Email the same
			res.render("admin/login", {
				error: "Mật khẩu không đúng, vui lòng thử lại",
				userEmail,
				userPassword,
				errorCount: req.session.errorCount,
			});
		} else {
			res.render("admin/login", {
				error: `Không tìm thấy tài khoản dưới email: [ ${userEmail} ] `,
				errorCount: req.session.errorCount,
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
