import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import "../Cart/Addcart.css";
import Storedata from "../StoreData/Storedata";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const Addcart = () => {
  const navigate = useNavigate();
  let total = 0;
  const { cart, setCart } = useContext(Storedata);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    if (!cart.item) {
      return;
    }
    // console.log('cart', cart.items);
    fetch("https://ecom-rest-apis.herokuapp.com/api/products/cart-items", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.item) }),
    })
      .then((resp) => resp.json())
      .then((data) => setproduct(data));
  }, [product]);

  const increment = (id) => {
    const data = { ...cart };
    data.item[id] += 1;
    data.total += 1;
    setCart(data);
  };

  function ordernow() {
    Swal.fire(
      "Good job!",
      "You have placed the order successfully!",
      "success"
    );
    setCart({});
    html2canvas(document.querySelector("#root"), {
      scrollX: 0,
      scrollY: 0,
    }).then(function (canvas) {
      var a = document.createElement("a");
      a.href = canvas
        .toDataURL("..assets/image/jpg")
        .replace("image/jpeg", "image/octet-stream");
      a.download = "somefilename.jpg";
      a.click();
    });
    navigate("/");
  }

  const decrement = (id) => {
    const data = { ...cart };
    if (data.item[id] > 0) {
      data.item[id] -= 1;
      data.total -= 1;
      setCart(data);
    } else {
      data.item[id] = 0;
    }
  };

  const deleteCart = (id) => {
    const data = { ...cart };
    console.log(data);
    const deleteditem = data.item[id];
    delete data.item[id];
    console.log(data.total);
    data.total = data.total - deleteditem;
    console.log(data.total);
    console.log(data);
    setCart(data);
  };

  const cartId = (id) => {
    const data = { ...cart };
    return data.item[id];
  };

  const cartPrice = (id, price) => {
    const data = { ...cart };
    let cartid = data.item[id];
    total = total + cartid * price;
    return cartid * price;
  };

  return cart.total !== 0 ? (
    <div>
      {product.map((elem) => {
        const { image, name, size, price, _id } = elem;
        return (
          <div className="addcart-main">
            <div className="addcart-image">
              <img src={image} alt="" />
            </div>
            <div className="image-name">
              <p>{name}</p>
            </div>

            <div className="addcart-buttons">
              <button onClick={() => decrement(_id)}>-</button>
              <p>{cartId(_id)}</p>
              <button onClick={() => increment(_id)}>+</button>
            </div>
            <div className="addcart-price">
              <p>
                <b>₹</b>
                {cartPrice(_id, price)}
              </p>
            </div>
            <div className="addcart-delete">
              <button onClick={() => deleteCart(_id)}>delete</button>
            </div>
          </div>
        );
      })}
      <hr style={{ width: "80%", margin: "0px auto" }} />
      <h1
        style={{ display: "inline", marginLeft: "70%", paddingBottom: "30px" }}
      >
        Total : {total ? total : "loading..."}
      </h1>
      <div className="order">
        <button className="" onClick={ordernow}>
          Order Now
        </button>
      </div>
    </div>
  ) : (
    <div className="productNotAdd">
      <img src="images/empty-cart.png" alt="" />
    </div>
  );
};

export default Addcart;
