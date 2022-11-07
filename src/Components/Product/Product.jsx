import React, { useEffect, useState } from "react";
import "../Product/Product.css";
import Childcard from "./Childcard";

const Product = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://ecom-rest-apis.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => setCart(data));
  }, []);
  // console.log(cart);
  return (
    <div>
      <div className="product-main">
        {cart.map((item) => {
          const { image, name, size, price, _id } = item;
          return <Childcard value={item} key={_id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
