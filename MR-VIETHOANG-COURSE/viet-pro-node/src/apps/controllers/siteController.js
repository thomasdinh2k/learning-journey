const CategoryModel = require("../models/category")
const ProductModel = require("../models/product")
const { transporter } = require("../../common/transporter")
const ejs = require("ejs")
const path = require("path")
const { log } = require("console")

const home = async (req, res) => {
	const featured_product_list = await ProductModel.find({
		featured: true,
		is_stock: true,
	})
		.sort({ _id: -1 })
		.limit(6)

	const new_product_list = await ProductModel.find({
		featured: false,
		is_stock: true,
	})
		.sort({ _id: -1 })
		.limit(6)

	res.render("site/index", {
		title: "Home",
		featured_product_list,
		new_product_list,
		category_name: "",
	})
}

const category = async (req, res) => {
	var id = req.params["id"]
	var category_list = req.session.category_list
	console.log("The cat_id is", id)

	const category_name = (await CategoryModel.findById(id)).title
	req.session.active_category = category_name
	// Find products base on catID
	const productByCat = await ProductModel.find({
		cat_id: id,
	}).limit(6)

	// console.log(`Product by Cat`, productByCat[0]);
	// console.log("category_name",category_name);

	res.render("site/category", {
		title: "Category",
		category_name,
		category_list,
		product_amount: productByCat.length,
		product_item: productByCat,
	})
}
const product = async (req, res) => {
	var id = req.params["id"]
	console.log("The id is " + id)
	var category_list = req.session.category_list
	var active_category = req.session.active_category

	const product_item = await ProductModel.find({
		_id: id,
	})

	// console.log("Found an Item", product_item[0]);

	res.render("site/product", {
		title: "Product",
		product_item: product_item[0],
		category_list,
		category_name: active_category,
	})
}
const search = (req, res) => {
	res.render("site/search", { title: "Search" })
}
const cart = (req, res) => {
	res.render("site/cart", { title: "Cart", category_name: "cart" })
}
const success = (req, res) => {
	res.render("site/success", { title: "Success" })
}

const getFeatureProduct = async (req, res) => {
	const featured_product_list = await ProductModel.find({
		featured: true,
	}).sort({ _id: -1 })
}

const addToCart = async (req, res) => {
	var cartArray = req.session.cart
	const { id, qty } = req.body

	// Check for dup product, if so, raise qty
	let isProductExists = false

	cartArray.map(item => {
		if (id == item.id) {
			item.qty += parseInt(qty, 10)
			isProductExists = true
		}

		return item
	})

	// Base on isProductExists, if the Product is not there, we'll push new one in
	if (!isProductExists) {
		const product = await ProductModel.findById(id)
		cartArray.push({
			id,
			name: product.name,
			price: product.price,
			img: product.thumbnail,
			qty: parseInt(qty),
		})
	}

	req.session.cart = cartArray
	res.redirect("back")
}

const updateCart = (req, res) => {
	var { products } = req.body
	console.log(products)

	var cartArray = res.locals.cart

	// 	"products": {
	//     "123": { "qty": 2 },
	//     "456": { "qty": 3 }
	//   }
	let newArray = cartArray.map(item => {
		item.qty = Number(products[item.id]["qty"])
		return item
	})

	req.session.cart = newArray
	res.redirect("back")
}

const delCartItem = (req, res) => {
	const { id } = req.params

	req.session.cart = req.session.cart.filter(
		product_item => product_item.id != id
	)

	res.redirect("back")
}

const order = async (req, res) => {
	const cartItem = req.session.cart

	const body = req.body

	console.log(body)

	const viewFolder = req.app.get("views")

	const targetDir = path.join(viewFolder, "site/order-summary-mail.ejs")
	// ${__dirname}/../src/apps/views

	const html = await ejs.renderFile(targetDir, {
		body: {...body},
		cartItem,
	})

	await transporter.sendMail({
		from: '"Shop đồ chơi người lớn 🍌" <mantht01288448987@gmail.com>', // sender address
		to: "akita141188@gmail.com, ,mantht01288448987@gmail.com", // list of receivers
		subject: "Cảm ơn bạn đã mua hàng, xác nhận đơn hàng tại đây", // Subject line
		html: html, // html body
	})

	console.log("Email sent")
}

module.exports = {
	home,
	category,
	product,
	search,
	cart,
	success,
	addToCart,
	updateCart,
	delCartItem,
	order,
}
