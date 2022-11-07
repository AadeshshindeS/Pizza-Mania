import React from "react";
import { Link } from "react-router-dom";
import "../Components/Home.css";
import Product from "./Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="main-div">
        <div className="text">
          <h5>people disappoint, </h5>
          <h5>
            but<span className="span"> pizza never does. </span>
          </h5>
          <h1>
            Order Now <span className="span"> ! </span>
          </h1>
          <Link to="/product">
            <button>Add to Cart</button>
          </Link>
        </div>
        <div className="logo">
          <img src="images/pizza.png" alt="error_404" />
        </div>
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Home;
