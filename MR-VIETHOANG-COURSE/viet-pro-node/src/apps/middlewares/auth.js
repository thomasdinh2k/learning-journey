const ensureAuthenticated = (req, res, next) => {
	if (req.session.userCredential) {
		console.log("Access Granted");
		next();
	} else {
		const error_code = "Không thể xác thực danh tính, vui lòng đăng nhập";
		req.session.error_code = error_code;
		console.log(error_code);
		res.redirect("/");

		// Clear
		req.session.error_code = "";
	}
};

const checkAlreadyAuthenticated = (req, res, next) => {
	if (req.session.userCredential) {
		console.log("User already authenticated");
		res.redirect("/admin/dashboard");
	} else {
		next();
	}
};

module.exports = { ensureAuthenticated, checkAlreadyAuthenticated };
