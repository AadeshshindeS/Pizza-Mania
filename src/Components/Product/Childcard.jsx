import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Storedata from "../StoreData/Storedata";

const Childcard = (prop) => {
  const { image, name, size, price, _id } = prop.value;
  const [hidden, setHidden] = useState(false);
  const { cart, setCart } = useContext(Storedata);

  const seemore = (id) => {
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
  };

  return (
    <div className="product-card">
      <Link to={`/singlepizza/${_id}`}>
        <div className="product-card-image">
          <img src={image} alt="error_404" />
        </div>
        <div className="product-card-info">
          <h3>{name}</h3>
          <p>
            <span className="product-card-span">{size}</span>
          </p>
        </div>
      </Link>
      <div className="product-card-price">
        <p>
          <b>₹</b> {price}
        </p>
        <button
          style={{ backgroundColor: hidden ? "green" : "" }}
          onClick={() => seemore(_id)}
        >
          {hidden ? "Added 😍" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Childcard;
