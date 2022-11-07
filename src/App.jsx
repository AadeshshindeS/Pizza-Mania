import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addcart from "./Components/Cart/Addcart";
import Home from "./Components/Home";
import Loginform from "./Components/Login/Loginform";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product/Product";
import Singlepizza from "./Components/Singlepizza/Singlepizza";
import Storedata from "./Components/StoreData/Storedata";

const App = () => {
  const [cart, setCart] = useState({ item: {}, total: 0 });
  const [success, setsuccess] = useState(false);
  const [loginsuccess, setloginsuccess] = useState(true);
  const [logindata, setlogindata] = useState({});
  const [data, setdata] = useState(true);
  return (
    <div>
      <Storedata.Provider
        value={{
          cart,
          setCart,
          data,
          setdata,
          setsuccess,
          setloginsuccess,
          logindata,
          setlogindata,
        }}
      >
        <BrowserRouter>
          {success && <Navbar />}
          <Routes>
            {loginsuccess && <Route path="/" element={<Loginform />}></Route>}
            {success && <Route path="/" element={<Home />}></Route>}
            {success && <Route path="/product" element={<Product />}></Route>}
            {success && (
              <Route path="/singlepizza/:id" element={<Singlepizza />}></Route>
            )}
            {success && <Route path="/addcart" element={<Addcart />}></Route>}
          </Routes>
        </BrowserRouter>
      </Storedata.Provider>
    </div>
  );
};

export default App;
