const mongoose = require("../../common/database")

const commentSchema = new mongoose.Schema({
    product_id : {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },


}, {timestamps: true});

const CommentModel = mongoose.model("Comments", commentSchema, "comments");

module.exports CommentModel