const index = (req, res) => {
    res.send("OK")
};
const create = (req, res) => {};
const edit = (req, res) => {};
const update = (req, res) => {};
const del = (req, res) => {};

const ProductController = (req, res) => {
	res.send("ProductController");
};

module.exports = { ProductController, create, index, edit, update, del };
