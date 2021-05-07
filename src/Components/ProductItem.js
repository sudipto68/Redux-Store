import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { title, price, category, image, id } = product;
    return (
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card p-3 shadow my-3 hover" style={{ width: "18rem" }}>
          <Link to={`/product/${id}`}>
            <img
              src={image}
              className="card-img-top"
              style={{ height: "200px", width: "100%" }}
              alt="product"
            />
          </Link>
          <div className="card-body text-primary">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">
              Price: <span style={{ fontWeight: "bold" }}>${price}</span>
            </p>
            <Link to={`/product/${id}`}>
              <Button className="btn btn-danger">Buy Now</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {" "}
      <div className="row">{renderList}</div>
    </>
  );
};

export default ProductItem;
