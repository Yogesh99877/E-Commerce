import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Added to cart:", product);
  };

  return (
    <div className="product-card">

      {/* Product Details Link */}
      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <h3>{product.title}</h3>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <h2>
          ₹{product.price}
        </h2>

      </Link>


      {/* Add To Cart is OUTSIDE Link */}
      <button
        className="add-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;