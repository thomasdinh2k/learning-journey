const ProductPrice = ({price}) => {
	return Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(price);
};

export default ProductPrice;
