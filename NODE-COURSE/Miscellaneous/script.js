const mongoose = require("mongoose");
const productModel = require("./Products");

mongoose.connect("mongodb://localhost/vp_shop_project");

async function run() {
	const newProduct = await productModel.create({
		name: "Galaxy S24 AI",
		price: 35000000,
		colour: "Titanium Pink",
		brand: "Samsung",
		feature: ["AI camera", "AI translator"],
		address: {
			street: "Main St",
			city: "Seoul",
		},
	});

	console.log(newProduct);
}

run();
