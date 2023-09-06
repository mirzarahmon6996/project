import React from "react";
import { DefaultButton } from "../../utils/Utils";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const ProductCard = ({ productData }) => {
  return (
    <div className="product-card">
      <Link className="product__img" to={`/productView/${productData._id}`}>
        <img src={productData.productImages[0]} alt="" />
      </Link>
      <h3>{productData.productName_uz}</h3>
      <div className="product__list">
        <p>{productData.productMainCategory_uz}</p>
        <FiChevronRight />
        <p>{productData.productSubCategory_uz}</p>
      </div>
      <div className="product__price">
        <p>
          {`${productData?.productSizesAndQuantity[0].price} ${
            productData?.productSizesAndQuantity.length > 1
              ? "- " + productData?.productSizesAndQuantity.reverse()[0].price
              : ""
          } CУМ `}
        </p>
      </div>
      <DefaultButton text="Саватга қўшиш" />
    </div>
  );
};

export default ProductCard;
