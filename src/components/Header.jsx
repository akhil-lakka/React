import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const  [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header rendered");

  useEffect(() => {
    console.log("useeffect called");
  }, [btnNameReact]);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL }
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">Contact us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnNameReact === "Login" ?
                setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;