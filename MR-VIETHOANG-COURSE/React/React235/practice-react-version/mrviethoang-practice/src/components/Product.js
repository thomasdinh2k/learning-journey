import "./Product.css";

export default function Product() {
  return (
      <div className="information-container">
      <h2 className="product-name">Product Name</h2>
        <h5>Thomas Phone Store</h5>
      <p className="product-detail">
        Product Description Text
      </p>
      <div className="price-stock">
        <p className="price">$99.99</p>
        <p className="stock">In Stock: 50</p>
      </div>
    </div>
  );
}
