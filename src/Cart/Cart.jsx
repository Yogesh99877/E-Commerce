import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartCotent";
import "./Cart.css";

function Cart() {

  const navigate = useNavigate();

  const {
    Product,
    increaseQuantity,
    decreaseQuantity,
    RemoveItem
  } = useCart();

  const totalPrice = Product.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = Product.reduce(
    (total, item) =>
      total + item.quantity,
    0
);   

  if (Product.length === 0) {
    return (
      <div className="empty-cart">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Continue Shopping
        </button>

        <h1>Your Cart is Empty</h1>

        <p>Add products to your cart.</p>

      </div>
    );
  }
 
  return (
    <div className="cart-page">

      {/* LEFT SIDE */}

      <div className="cart-left">

        {/* BACK BUTTON */}

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Continue Shopping
        </button>

        <h1>Shopping Cart</h1>

        <p className="cart-items-count">
          {totalItems} items in your cart
        </p>


        {Product.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            {/* PRODUCT IMAGE */}

            <img
              src={item.thumbnail}
              alt={item.title}
            />


            {/* PRODUCT DETAILS */}

            <div className="cart-item-info">

              <h2>
                {item.title}
              </h2>

              <p className="cart-description">
                {item.description}
              </p>

              <p className="cart-price">
                ${item.price}
              </p>


              {/* QUANTITY */}

              <div className="quantity-section">

                <span className="quantity-label">
                  Quantity:
                </span>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>


              {/* REMOVE */}

              <button
                className="remove-btn"
                onClick={() =>
                  RemoveItem(item.id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* RIGHT SIDE */}

      <div className="cart-right">

        <h2>Cart Summary</h2>

        <p>
          Total Items:
          <strong> {totalItems}</strong>
        </p>

        <p className="total">
          Total:
          <strong>
            ${totalPrice.toFixed(2)}
          </strong>
        </p>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;