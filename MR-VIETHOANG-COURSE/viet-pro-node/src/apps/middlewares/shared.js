const CategoryModel = require("../models/category")

module.exports = async (req, res, next) => {
    res.locals.categories = await CategoryModel.find({});
    
    // Cart
    res.locals.cart = req.session.cart;

    // Tổng số sản phẩm trong Cart
    res.locals.totalCartQty = req.session.cart.reduce( (total, item) => (
        total + item.qty
    ), 0)
    next();
}