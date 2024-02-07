const { getUserData } = require("../../common/getUserData");
const userModel = require("../models/user");


const login = (req, res) => {
	res.render("new_admin/login", { error: null });
};

const processLogin = async (req, res) => {
	const staticAuth = { email: "vietpro.edu.vn@gmail.com", password: "123456" };

	const { email: defaultEmail, password: defaultPassword } = staticAuth;
	const { email: userEmail, password: userPassword } = req.body;

	const users = await userModel.find({
		email: userEmail,
		password: userPassword,
	});

	const userWithoutPassword = await getUserData({email: userEmail});

	console.log("userEmail", userEmail);
	console.log("userPassword", userPassword);
	console.log("Matching user is: ", users);
	console.log("Matching user LENGTH: ", users.length);

	// Initialize errorCount in session if doesn't exist
	if (req.session.errorCount === undefined) {
		req.session.errorCount = 0;
	}

	if (users.length > 0) {
		req.session.errorCount = 0; // Reset errorCount if Login success
		
		// Try to use 'Session' to store data
		console.log("USER CREDENTIAL", users[0]);
		
		req.session.userCredential = users[0];
		// res.render("new_admin/dashboard", {
		// 	product_quantity: "99+", 
		// });

		res.redirect("/admin/dashboard");
	} else {

		/**
		 * TODO Fix this to match the new database
		 * With User document, this need to display differently if it finds a matching email
		 */
		if (req.session.errorCount >= 3) {
			console.log("Test direct to login failed page");
			res.render("new_admin/login", {
				errorCount: req.session.errorCount,
				error: "Đã quá số lần thử đăng nhập, vui lòng liên hệ quản trị viên",
			});
		}

		req.session.errorCount++;
		if (userWithoutPassword.length > 0) {
			// Keep Email the same
			res.render("new_admin/login", {
				error: "Mật khẩu không đúng, vui lòng thử lại",
				userEmail,
				userPassword,
				errorCount: req.session.errorCount,
			});
		} else {
			res.render("new_admin/login", {
				error: `Không tìm thấy tài khoản dưới email: [ ${userEmail} ] `,
				errorCount: req.session.errorCount,
			});
		}
	}
};

const logout = (req, res) => {
	res.send("/");
};

module.exports = {
	login,
	logout,
	processLogin,
};
