module.exports = (req, res, next) => {
	if (!req.session.cart) {
		
		// Fake DATA
		req.session.cart = [
			{
				id: "5f8a18d1ceec600f67dcbf67",
				name: "Samsung Galaxy S9 Plus 64GB Orchid Gray",
				price: 34883620,
				img: "products/Samsung-Galaxy-S9-Plus-64GB-Orchid-Gray.png",
				qty: 13,
			},
			{
				id: "5f8a18d1ceec600f67dcbf5e",
				name: "iPhone Xr 2 Sim 64GB Yellow",
				price: 24824896,
				img: "products/iPhone-Xr-2-Sim-64GB-Yellow.png",
				qty: 31,
			},
		];
	}

	next();
};
