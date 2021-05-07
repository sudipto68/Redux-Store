import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { title, price, category, image } = product;
    return (
      <div className="col-md-4 d-flex justify-content-center">
        <div className="card p-3 shadow my-3" style={{ width: "18rem" }}>
          <img
            src={image}
            className="card-img-top"
            style={{ height: "200px", width: "100%" }}
            alt="product"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Price: <span style={{ fontWeight: "bold" }}>${price}</span>
            </p>
            <p className="card-text">
              Category: <span style={{ fontWeight: "bold" }}>{category}</span>
            </p>
            <Button className="btn btn-primary">Buy Now</Button>
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
