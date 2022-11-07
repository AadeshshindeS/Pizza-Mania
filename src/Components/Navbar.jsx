import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Storedata from "./StoreData/Storedata";

const Navbar = () => {
  const { cart, setsuccess, setloginsuccess } = useContext(Storedata);

  const logout = () => {
    setsuccess(false);
    setloginsuccess(true);
  };

  return (
    <nav>
      <div className="main">
        <div className="image">
          <Link to="/">
            <img className="image" src="images/logo.png" alt="" />
          </Link>
        </div>
        <div className="main-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <div className="trolly">
                <div className="trolly-number">
                  <p>
                    <Link to="/addcart" style={{ color: "white" }}>
                      {cart?.total}
                    </Link>
                  </p>
                </div>

                <Link to="/addcart">
                  <div className="trolly-trolly pt-1">🛒</div>
                </Link>
              </div>
            </li>
            <li>
              <button className="logoutButton" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
