import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { title, price, image, description, category } = product;
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        alert(err);
      });
    //console.log(response.data);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={image}
              alt="productImage"
              style={{ height: "330px", width: "250px" }}
            />
          </div>
          <div className="col-md-8 mt-3">
            <h4>{title}</h4>
            <p>{description}</p>
            <h6>Category: {category}</h6>
            <h6>
              Price: <span className="text-danger fw-bold">{price}$</span>
            </h6>
            <button className="btn btn-danger mt-3">ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
