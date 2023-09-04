import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";

const ProductView = () => {
  const [productData, setProductData] = useState([]);
  let productDataInURL = useParams();

  useEffect(() => {
    let isProductFetched = true;
    instance(`/product/single-product/${productDataInURL.id}`)
      .then((response) => setProductData(response.data))
      .catch((err) => console.log(err));

    return () => {
      isProductFetched = false;
    };
  }, [productDataInURL.id]);

  console.log(productData);

  return (
    <>
      <div className="container">
        {productData.length > 0 ? (
          <div className="product__block">
            {productData.map((product) => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.productImages[0]} alt="" />
              </div>
            ))}
          </div>
        ) : (
          <div className="loading">
            <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductView;
