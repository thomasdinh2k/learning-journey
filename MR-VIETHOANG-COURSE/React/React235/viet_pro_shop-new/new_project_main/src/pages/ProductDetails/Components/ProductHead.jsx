import { getImage } from "../../../services/Api";
import ProductPrice from "../../../shared/components/Product-price";

const ProductHead = ({
	name,
	warranty,
	accessory,
	condition,
	promotion,
	price,
	is_stock,
	thumbnail
}) => {
	return (
		<div id="product-head" className="row">
			<div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
				<img src={getImage(thumbnail)} />
			</div>
			<div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
				<h1>{name}</h1>
				<ul>
					<li>
						<span>Bảo hành:</span> {warranty}
					</li>
					<li>
						<span>Đi kèm:</span> {accessory}
					</li>
					<li>
						<span>Tình trạng:</span> {condition}
					</li>
					<li>
						<span>Khuyến Mại:</span> {promotion}
					</li>
					<li id="price">Giá Bán (chưa bao gồm VAT)</li>
					<li id="price-number"><ProductPrice price={price}/></li>
					<li id="status">{is_stock == true ? "Còn hàng" : "Hết hàng"}</li>
				</ul>
				<div id="add-cart">
					<a href="#">Mua ngay</a>
				</div>
			</div>
		</div>
	);
};

export default ProductHead;
