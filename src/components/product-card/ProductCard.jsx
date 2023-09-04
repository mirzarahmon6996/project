import React from "react";
import { DefaultButton } from "../../utils/Utils";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  return (
    <div className="product-card">
      <Link className="product__img" to={`/productView/${productData.__id}`}>
        <img src={productData.productImages[0]} alt="" />
      </Link>
      <h3>{productData.productName_uz}</h3>
      <DefaultButton text="Саватга қўшиш" />
      
    </div>
  );
};

export default ProductCard;
