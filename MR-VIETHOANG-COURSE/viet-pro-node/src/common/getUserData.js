const userModel = require("../apps/models/user")

async function getUserData(query = {}) {
	return await userModel.find(query)
}

async function getUserAmount(query = {}) {
	const data = await getUserData(query)
	return data.length
}

module.exports = { getUserData, getUserAmount }
