
import "./User.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlerLogin = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please Enter Username, Email and Password");
      return;
    }

    // Save username in localStorage
    localStorage.setItem("loggedInUser", username);

    // Tell Navbar that user has logged in
    window.dispatchEvent(new Event("userLogin"));

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    alert(`Welcome ${username}`);

    // Go to Home
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* AMAZON LOGO */}
        <div className="login-logo">
          amazon
        </div>

        <div className="login-box">

          <h1>Sign-in</h1>

          <form onSubmit={handlerLogin}>

            {/* USERNAME */}
            <label>
              Your Name
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
            />

            {/* EMAIL */}
            <label>
              Email or mobile phone number
            </label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email or Mobile Number"
            />

            {/* PASSWORD */}
            <label>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

          <p className="terms">
            By continuing, you agree to the Amazon Clone
            <span> Conditions of Use </span>
            <span> Privacy Notice. </span>
          </p>

          <div className="help">
            <a href="#">
              Need Help?
            </a>
          </div>

        </div>

        {/* CREATE ACCOUNT */}
        <div className="new-account">

          <p>
            New to Amazon Clone?
          </p>

          <button
            onClick={() => navigate("/register")}
          >
            Create your Amazon Clone account
          </button>

        </div>

      </div>
    </div>
  );
}

export default Login;

