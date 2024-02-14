const { getProductData } = require("../../common/getProductData")

const productDisplay = async (req, res) => {
    const userCredential = req.session.userCredential;

    const data = await getProductData();

    console.log("Product_feed", data);

    console.log("get_user-credential", userCredential);
    res.render("new_admin/Components/product/product_display", {userCredential, productData: data});
}


const index = (req, res) => {
    res.send("OK")
};
const create = (req, res) => {};
const edit = (req, res) => {};
const update = (req, res) => {};
const del = (req, res) => {};

const ProductController = async (req, res) => {
	res.send("ProductController");
};

module.exports = { productDisplay,ProductController, create, index, edit, update, del };
