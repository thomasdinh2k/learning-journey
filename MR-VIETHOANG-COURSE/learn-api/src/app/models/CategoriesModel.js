const mongoose = require("../../common/database")();

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
}, {timestamps: true});

const CategoryModel = mongoose.model("Categories", CategorySchema, "categories");

module.exports = CategoryModel