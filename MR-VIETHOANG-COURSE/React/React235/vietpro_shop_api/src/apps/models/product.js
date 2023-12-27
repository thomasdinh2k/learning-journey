const mongoose = require("../../common/database")();
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
        required: true,
    },
    accessories: {
        type: String,
        required: true,
    },
    promotion: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    in_stock: {
        type: Boolean,
        required: true,
    },
    is_featured: {
        type: Boolean,
        required: false,
    },
}, {timestamps: true});

const ProductModel = mongoose.model("Product", productSchema, "products");

module.exports = ProductModel;