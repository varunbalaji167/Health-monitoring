import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const printdata = () => {
    console.log(username, password);
    alert("You are logged in!!");
  };
  return (
    <center>
      <div className="logo">
        <h1>
          <FontAwesomeIcon icon={faNotesMedical} />
        </h1>
      </div>
      <div className="Container">
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="containr inp">
          <div className="inputBox">
            <input
              type="text"
              placeholder="Username"
              name="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="rem-for">
            <div className="rem">
              <input type="checkbox" id="remember"></input>Remember me
            </div>
            <Link to="/forgotpassword" id="forgotPassword">
              Forgot Password?
            </Link>
          </div>
          <button className="btn btn-primary" type="button" onClick={printdata}>
            Login
          </button>
          <p className="existAccount">
            Don't have an account?{" "}
            <Link to="/signup" className="linkLogin">
              Register Here!
            </Link>
          </p>
        </div>
      </div>
    </center>
  );
};

export default Login;
