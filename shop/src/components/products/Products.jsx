import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";

const Products = () => {
  const [products, SetProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        SetProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  console.log("inside Products component");
  return (
    <div>
      <h1>Products</h1>
      {products.length == 0 ? <p>There are no products!</p> : <div>we have some products</div>}
      {products.map((product, index) => (
        <SingleProduct key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
