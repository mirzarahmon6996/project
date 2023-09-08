import React, { useState, useEffect } from "react";
import "./Subcategory.scss";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import ProductCard from "../product-card/ProductCard";

const SubCategory = () => {
  const { categoryname } = useParams();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let isDataFetched = true;
    instance(`/category/subcategories/${categoryname}`)
      .then((response) => {
        if (isDataFetched) {
          setCategories(response.data);
        }
      })
      .catch((err) => setCategories(err));

    return () => {
      isDataFetched = false;
    };
  }, [categoryname]);

  console.log(categories);

  return (
    <div className="container">
      <div className="category__wrapper">
        {categories?.subCategory?.length > 0 ? (
          <>
            <h2>{categories?.subcategoryTranslate?.uz}</h2>
            <div className="category__box">
              {categories?.subCategory?.map((categoryItem) => (
                <ProductCard key={categoryItem.id} productData={categoryItem} />
              ))}
            </div>
          </>
        ) : (
          <div className="loading">
            <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategory;