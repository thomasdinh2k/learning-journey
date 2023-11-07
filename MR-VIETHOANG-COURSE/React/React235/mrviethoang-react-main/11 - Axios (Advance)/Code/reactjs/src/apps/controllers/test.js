const UserModel = require("../models/user");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const test = (req, res) => {

    res.send("Middleware");
}
const test2 = (req, res) => {
    res.send("Test 2");
}

module.exports = {
    test: test,
    test2: test2,
}