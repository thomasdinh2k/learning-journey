const userModel = require("../../apps/models/user");
const { getCommentDataQuantity } = require("../../common/getCommentData");
const getProductData = require("../../common/getProductData");
const getUserData = require("../../common/getUserData");

const login = (req, res) => {
	res.render("admin/login", { error: null });
};

const processLogin = async (req, res) => {
	const staticAuth = { email: "vietpro.edu.vn@gmail.com", password: "123456" };

	const { email: defaultEmail, password: defaultPassword } = staticAuth;
	const { email: userEmail, password: userPassword } = req.body;

	const users = await getUserData.getUserData({
		email: userEmail,
		password: userPassword,
	});

	const commentQuantity = await getCommentDataQuantity()
	const userQuantity = await getUserData.getUserAmount()


	console.log("Matching user is: ", users[0]);
	console.log("Matching user LENGTH: ", users.length);
	// console.log("Matching user name: ", users[0].full_name);

	// Initialize errorCount in session if doesn't exist
	if (req.session.errorCount === undefined) {
		req.session.errorCount = 0;
	}

	if (users.length > 0) {
		req.session.errorCount = 0; // Reset errorCount if Login success
		const productDataQuantity = await getProductData.getProductDataQuantity();

		res.render("admin/dashboard", { 
			productQuantity: productDataQuantity,
			userName: users[0].full_name,
			commentQuantity,
			userQuantity
		 });
	} else {
		/**
		 * TODO Fix this to match the new database
		 * With User document, this need to display differently if it finds a matching email
		 */
		if (req.session.errorCount >= 3) {
			console.log("Test direct to login failed page");
			res.render("admin/login_failed", {
				errorCount: req.session.errorCount,
				error: "Đã quá số lần thử đăng nhập, vui lòng liên hệ quản trị viên",
			});
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
