import React, { useContext, useEffect, useState } from "react";
import "../Singlepizza/Singlepizza.css";
import { Link, useParams } from "react-router-dom";
import Storedata from "../StoreData/Storedata";

const Singlepizza = () => {
  const { cart, setCart } = useContext(Storedata);
  const [hidden, setHidden] = useState(false);
  const { id } = useParams();

  const [signlePizzaInfo, setSignlePizzaInfo] = useState({});

  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setSignlePizzaInfo(data));
  }, []);

  const seemore = () => {
    console.log(id);
    setHidden(!hidden);
    setTimeout(() => {
      setHidden(hidden);
    }, 500);
    const data = { ...cart };
    if (!data.item) {
      data.item = {};
    }

    if (data.item[id]) {
      data.item[id] += 1;
    } else {
      data.item[id] = 1;
    }

    if (!data.total) {
      data.total = 0;
    }
    data.total += 1;

    setCart(data);
    console.log("cart value", cart);
  };

  return (
    <div className="main-div-singlepizza">
      <div className="backbutton">
        <Link to="/product">
          <button>⬅</button>
        </Link>
      </div>
      <div className="singlepizza-main">
        <div className="singlepizza-image">
          <img src={signlePizzaInfo.image} alt="erroe_404" />
        </div>

        <div className="singlepizza-info">
          <h1>{signlePizzaInfo.name}</h1>
          <h3>{signlePizzaInfo.size}</h3>
          <div className="singlepizza-price">
            <p>
              <b>₹</b> {signlePizzaInfo.price}
            </p>
            <button
              style={{ backgroundColor: hidden ? "green" : "" }}
              onClick={() => seemore(signlePizzaInfo.id)}
            >
              {hidden ? "Added 😍" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepizza;
