import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/instagram.svg";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import axios from "axios";


function Login() {
  const navigate = useNavigate();

  function handleS(e) {
    e.preventDefault();
    console.log(e.target);
    // this.props.isLogin(true)
    axios
      .post(`http://127.0.0.1:3008/api/instructor/login`, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        if (response.status == 400) {
          alert(response.data);
        } else {
          navigate(`/Login/Home/${response.data.id}`);
        }
      });
  }
  return (
    <div className="div-background">
    <div className="div-login">
      <p className="title">Welcome Back</p>
      {/* to maintain constant width of elements */}
      <div className="middle-container">
        <img
          className="slogin-pic"
          id="pic"
          src="./images/lms.png"
          alt="lms"
        />
        <form className="slogin-form" id="form" onSubmit={handleS}>
          <input
            className="slogin-input"
            name="username"
            placeholder="Username"
            required
          />
          <input
            className="slogin-input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="button">Login</button>
        </form>
        <p className="last-text">
          Online Quiz System, Copyright &#x24B8; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </div>
  );
}

export default Login;
