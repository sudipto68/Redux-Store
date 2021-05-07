import axios from "axios";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/actions/productActions";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        alert(err);
      });
    //console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  //console.log(products);
  return (
    <>
      <Container className="py-4 mt-4">
        <ProductItem />
      </Container>
    </>
  );
};

export default ProductList;
