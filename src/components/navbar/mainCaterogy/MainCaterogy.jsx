import React from "react";
import "./MainCaterogy.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { instance } from "../../../api/axios";
const { categoryname } = useParams();
const [categories, setCategories] = useState();
const MainCaterogy = () => {
  useState(() => {
    instance(`/category/categories/${categoryname}`).then((response) =>
      setCategories(response.data).catch((err) => setCategories(err))
    );
  }, [categoryname]);
  console.log(categories);
  return (
    <>
      <div className="container">
        <div className="category__wrapper">
          <h2>{categories?.maincategoryTranslate.uz}</h2>
          <div>{
            categories?.maincategory.map(categories.)
            }</div>
        </div>
      </div>
    </>
  );
};

export default MainCaterogy;
