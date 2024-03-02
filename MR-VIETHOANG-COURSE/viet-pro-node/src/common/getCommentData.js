const CommentModel = require("../apps/models/comment");

async function getCommentData(query = {}) {
	return await CommentModel.find(query);
}

async function getCommentDataQuantity(query = {}) {
	const data = await getCommentData(query);
	return data.length;
}

module.exports = { getCommentData, getCommentDataQuantity };