import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
import ProductReviews from "../ProductReivew/ProductReview";

import { useCart } from "../Cart/CartCotent";

function ProductDetails() {

  const { id } = useParams();
  const {addToCart} =useCart()

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { 

    async function fetchProduct() {

      try {

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }
    }

    fetchProduct();

  }, [id]);


  if (loading) {
    return (
      <div className="product-loading">
        <h2>Loading Product...</h2>
      </div>
    );
  }


  if (error) {
    return (
      <div className="product-error">
        <h2>{error}</h2>
      </div>
    );
  }


  return (

    <div className="product-details-page">

      <div className="product-details-container">

        {/* LEFT SIDE */}

        <div className="product-image-section">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="main-product-image"
          />

        </div>


        {/* RIGHT SIDE */}

        <div className="product-info-section">

          <h1 className="product-title">
            {product.title}
          </h1>

          <p className="product-rating">
            ⭐ {product.rating}
            <span> / 5</span>
          </p>

          <hr />

          <p className="product-price">
            ₹{product.price}
          </p>

          <p className="tax-text">
            Inclusive of all taxes
          </p>

          <hr />

          <div className="product-info">

            <p>
              <strong>Brand:</strong> {product.brand}
            </p>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

          </div>


          <div className="product-description">

            <h2>About this item</h2>

            <p>
              {product.description}
            </p>

          </div>


          {/* BUY BOX */}

          <div className="buy-box">

            <p className="delivery">
              🚚 FREE Delivery
            </p>

            <p className="stock">
              {product.stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </p>

            <button className="add-cart-btn" onClick={()=> addToCart(product)}>
             Add to Cart
            </button>

            <button className="buy-now-btn">
              Buy Now
            </button>

          </div>

        </div>

      </div>


      {/* BACK BUTTON */}

      <div className="back-section">

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>
     
    <ProductReviews productId={product.id} />
    </div>

  );
}

export default ProductDetails;