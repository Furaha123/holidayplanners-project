import React from "react";
import "../CSS/Login.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import svgLogin from "../Images/Login.svg";

function Login() {
  return (
    <div className="contact-form">
      <div className="login-dash">
        <div className="contact-form1">
          <h1 className="login">Login</h1>
          <p className="login-para">
            Doesn't Have any account yet?
            <a href="sign"> Sign Up</a>
          </p>
          <form action="" id="form">
            <div className="input-el">
              <label htmlFor="">Email Address</label>

              <input type="email" placeholder="you@example.com" id="name" />
              <div className="password-div">
                <label htmlFor="">Password</label>
                <a href="#">ForgetPassword?</a>
              </div>
              <input
                type="password"
                placeholder="Enter 6 character or more"
                id="email"
              />
              <div className="remember">
                <input type="checkbox" value="IsRemembeMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remeber me</label>

                <input type="submit" value="LOGIN" className="submit" />
              </div>
            </div>
          </form>
          <div className="login-social">
            <Link to="" id="social">
              <FcGoogle />
              Google
            </Link>
            <Link to="" id="social">
              <FaFacebookF />
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="user-logo">
        <img src={svgLogin} alt="user-images" />
      </div>
    </div>
  );
}

export default Login;
