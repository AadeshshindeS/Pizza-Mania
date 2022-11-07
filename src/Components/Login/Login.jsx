import React from "react";
import { useState } from "react";
import { useContext } from "react";

import Swal from "sweetalert2";
import Storedata from "../StoreData/Storedata";

const Login = () => {
  const [userlogindata, setuserlogindata] = useState({
    email: "",
    password: "",
  });
  const {
    logindata,
    setlogindata,
    data,
    setdata,
    setloginsuccess,
    setsuccess,
  } = useContext(Storedata);
  const userdata = (e) => {
    const { name, value } = e.target;
    setuserlogindata({ ...userlogindata, [name]: value });
  };
  function loginpagenavigate(e) {
    e.preventDefault();
    // console.log(userlogindata.email === "" || userdata.password === "");

    if (userlogindata.email === "" || userlogindata.password === "") {
      return Swal.fire("Hey User", "You cannot leave any field empty", "error");
    }
    // console.log(userdata.email !== logindata.userdata.email);
    // console.log(userdata.password);
    // console.log(logindata.userdata.password);
    if (
      userlogindata.email !== logindata.userdata.email ||
      userlogindata.password !== logindata.userdata.password
    ) {
      return Swal.fire("Hey User", "Email and Password is wrong", "error");
    }
    setsuccess(true);
    setloginsuccess(false);

    return Swal.fire("Hey User", "You have successfully logged In", "success");
  }

  return (
    <form>
      <div className="form-group form-data">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={userdata}
          name="email"
          value={userlogindata.email}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword11"
          placeholder="Password"
          onChange={userdata}
          name="password"
          value={userlogindata.password}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label check-me" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary login-button"
        onClick={loginpagenavigate}
      >
        Submit
      </button>
      <h6 className="member" onClick={loginpagenavigate}>
        Not a Member ?<span className="signup">SIGN UP</span>
      </h6>
    </form>
  );
};

export default Login;
