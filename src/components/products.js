import React from "react";
import "../App.css";

function Products({ product, add }) {
  return (
    <div className="box" onClick={add}>
      <img className="small" alt='product'  src={product.img} />
      <h3>{product.name}</h3>
      <h5>price: {product.price}</h5>
    </div>
  );
}

export default Products;
