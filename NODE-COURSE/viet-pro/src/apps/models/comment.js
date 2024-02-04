const mongoose = require("../../common/database")();


const commentSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    body: {
        type: String,
    },
    full_name: {
        type: String,
    }
}, {timestamps: true,});

const CommentModel = mongoose.model("Comment", commentSchema, "comments");

module.exports = CommentModel;

// {
//     "_id" : ObjectId("5fbd7650bb3dbf2b372006cb"),
//     "email" : "anhnhata8cool@gmail.com",
//     "prd_id" : ObjectId("5f8a15cb2eec5d5bbf48671a"),
//     "body" : "Như cái bòi boi",
//     "full_name" : "Anh Nhất Cao",
//     "createdAt" : ISODate("2020-11-24T21:08:32.070+0000"),
//     "updatedAt" : ISODate("2020-11-24T21:08:32.070+0000"),
//     "__v" : NumberInt(0)
// }