const mongoose = require("mongoose");
const productModel = require("./Products");

mongoose.connect("mongodb://localhost/vp_shop_project");

async function run() {
	try {
		const newProduct = await productModel.create({
			name: "Galaxy S24 AI",
			price: 35000020,
			colour: "Titanium Pink",
			brand: "Samsung",
			feature: ["AI camera", "AI translator"],
			address: {
				street: "Main St",
				city: "Seoul",
			},
		});

		console.log(newProduct);
	} catch (error) {
		console.log("Input value", error.value);
		console.log("An error ocurred", error.message);
	}
}

async function find() {
	try {
		const foundProduct = await productModel
			.where("brand")
			.equals("Apple")
			.where("price")
			.lt(1000);    
		console.log("foundProduct", foundProduct);
	} catch (e) {
		console.log(e.message);
	}
}

// run();
find();
