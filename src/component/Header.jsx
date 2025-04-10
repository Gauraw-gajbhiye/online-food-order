import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";

function Header() {
  const [login, setLogin] = useState("Login");
  const networkStatus = useNetwork();

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="img-container">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li> {networkStatus ? <>Online</> : <>Offline</>}</li>

            <li>
              {/* Home */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <button
              className="login"
              onClick={() => {
                login === "Login" ? setLogin("Logout") : setLogin("Login");
              }}
            >
              {login}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
