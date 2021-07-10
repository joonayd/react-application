import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <hr />
    </div>
  );
};

export default SingleProduct;
