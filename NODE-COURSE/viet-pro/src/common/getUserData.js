const userModel = require("../apps/models/user");

async function getUserData(param = "") {
	return await userModel.find(param);
}

async function getUserAmount(param = "") {
	const data = await getUserData(param);
	return data.length;
}

module.exports = { getUserData, getUserAmount };
