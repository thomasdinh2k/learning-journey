const mongoose = require('../../common/database')();

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        price: {
            type: Number
        },

        colour: {
            type: String
        },

        brand: {
            type: String
        }
        
    },
    { timestamps: true, collection: "Products" }
)

const productModel = mongoose.model("Products", productSchema)

module.exports = productModel