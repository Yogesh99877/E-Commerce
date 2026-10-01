import React, { useEffect, useState } from "react";

import amazon2 from "../assets/amazon2.png";
import flag from "../assets/flag.png";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../Cart/CartCotent";

function Navbar({ searchTerm, setSearchTerm }) {
  const { Product } = useCart();
  const navigate = useNavigate();

  // ================= CART QUANTITY =================
  const cartCount = Product.reduce((total, item) => total + item.quantity, 0);

  // ================= USERNAME =================
  const [username, setUsername] = useState(
    localStorage.getItem("loggedInUser"),
  );

  // ================= LISTEN FOR LOGIN =================
  useEffect(() => {
    const handleUserLogin = () => {
      const savedUsername = localStorage.getItem("loggedInUser");

      setUsername(savedUsername);
    };

    window.addEventListener("userLogin", handleUserLogin);

    // Cleanup
    return () => {
      window.removeEventListener("userLogin", handleUserLogin);
    };
  }, []);

  // ================= SIGN OUT =================
  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");

    setUsername(null);
  };

  return (
    <nav className="Navbar">
      {/* ================= LEFT ================= */}

      <div className="Navbar-Left">
        {/* AMAZON LOGO */}

        <Link to="/">
          <img src={amazon2} alt="Amazon" className="amazon-logo" />
        </Link>

        {/* LOCATION */}

        <div className="location">
          <i className="fa-solid fa-location-dot"></i>

          <div>
            <span className="deliver-text">Deliver to</span>

            <span className="location-text">India</span>
          </div>
        </div>
      </div>

      {/* ================= SEARCH ================= */}

      <div className="center">
        {/* CATEGORY */}

        <div className="All">
          <select defaultValue="All">
            <option value="All">All</option>

            <option value="Alexa Skill">Alexa Skill</option>

            <option value="Amazon Devices">Amazon Devices</option>

            <option value="Amazon Fashion">Amazon Fashion</option>

            <option value="Amazon Fresh">Amazon Fresh</option>

            <option value="Amazon Pharmacy">Amazon Pharmacy</option>

            <option value="Appliance">Appliance</option>

            <option value="Baby">Baby</option>

            <option value="Books">Books</option>

            <option value="Cars">Cars</option>

            <option value="Clothing">Clothing</option>

            <option value="Computers">Computers</option>

            <option value="Deals">Deals</option>

            <option value="Electronics">Electronics</option>

            <option value="Furniture">Furniture</option>

            <option value="Mobiles">Mobiles</option>
          </select>
        </div>

        {/* SEARCH INPUT */}

        <div className="AllInput">
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* SEARCH BUTTON */}

        <button className="Search" onClick={() => navigate("/search")}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* ================= RIGHT ================= */}

      <div className="right">
        {/* LANGUAGE */} 
    
        <div className="Lang">
          <img src={flag} alt="India" />

          <span>EN</span>

          <i className="fa-solid fa-caret-down"></i>
        </div>

        {/* ================= ACCOUNT ================= */}

        <div className="Account">
          {username ? (
            /* LOGGED IN */

            <>
              <span className="small-text">Hello, {username}</span>

              <div className="account-link">
                <strong>Account & Lists</strong>

                <button className="signout-btn" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            /* NOT LOGGED IN */

            <>
              <span className="small-text">Hello, sign in</span>

              <Link to="/login" className="account-link">
                <strong>Account & Lists</strong>
              </Link>
            </>
          )}
        </div>

        {/* ================= ORDERS ================= */}

        <div className="Order">
          <span className="small-text">Returns</span>

          <span className="large-text">& Orders</span>
        </div>

        {/* ================= CART ================= */}

        <div className="Cart">
          <Link to="/cart" className="cart-link">
            <div className="cart-icon-wrapper">
              <i className="fa-solid fa-cart-shopping"></i>

              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>

            <span className="cart-text">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
