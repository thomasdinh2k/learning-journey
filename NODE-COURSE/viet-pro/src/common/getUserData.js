const userModel = require("../apps/models/user");

async function getUserData(param = "") {
	return await userModel.find(param);
}

async function getUserAmount() {
	const data = await getUserData();
	return data.length;
}

module.exports = { getUserData, getUserAmount };
