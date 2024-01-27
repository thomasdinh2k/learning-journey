const mongoose = require ('../../common/database')();

const categorySchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: false,
            default: "NO DESCRIPTION",
        },
        
        title: {
            type: String,
            required: false,
            default: "NO DESCRIPTION",
            
        },
        
        slug: {
            type: String,
            required: false,
            default: "NO DESCRIPTION",

        }
    },
    {
        timestamps: true,
        collection: "Categories"
    }
);

const categoryModel = mongoose.model("Categories", categorySchema, "Categories")

module.exports = categoryModel;