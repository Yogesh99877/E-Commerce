
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import Navbar from "./Nabar/Navbar1";
import Navbar2 from "./Nabar/Navbar2";

import Hero from "./HeroBanner/HeroBanner";
import Gallery from "./ProductGallery/Gallery";
import Footer from "./Footer/Footer";

import Product from "./Data/product";

import { Routes, Route, useNavigate } from "react-router-dom";

import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./Cart/Cart";

import { useState } from "react";

import Login from "./Login/User";


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>

        {/* ================= HOME PAGE ================= */}

        <Route
          path="/"
          element={
            <>
              <Navbar2 />

              <Hero />

              <Gallery />

              <Product searchTerm="" />
            </>
          }
        />


        {/* ================= SEARCH PAGE ================= */}

        <Route
          path="/search"
          element={
            <SearchPage searchTerm={searchTerm} />
          }
        />


        {/* ================= PRODUCT DETAILS ================= */}

        <Route
          path="/product/:id"
          element={
            <ProductDetails />
          }
        />


        {/* ================= CART ================= */}

        <Route
          path="/cart"
          element={
            <Cart />
          }
        />


        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={
            <Login />
          }
        />

      </Routes>


      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  );
}


/* =================================================
   SEARCH PAGE
================================================= */

function SearchPage({ searchTerm }) {

  const navigate = useNavigate();

  return (
    <div className="search-page">

      {/* SEARCH RESULTS */}

      <Product
        searchTerm={searchTerm}
      />


      {/* GO BACK HOME */}

      <div className="go-home">

        <button
          onClick={() => navigate("/")}
        >
          ← Go Back to Home
        </button>

      </div>

    </div>
  );
}


export default App;

