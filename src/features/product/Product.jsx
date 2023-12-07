import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsAsync, selectAllProducts } from "./productSlice";
import Productgrid from "../components/Productgrid";
import RecipeReviewCard from "../components/Card";

export function Product() {
  const allproducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
    console.log(allproducts);
  }, [dispatch]);

  return <Productgrid allproducts={allproducts} />;
}
