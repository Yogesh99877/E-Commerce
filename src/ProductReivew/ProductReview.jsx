
import React, { useState } from "react";
import "./ProductReviews.css";

function ProductReviews({ productId, onReviewsChange }) {

  const storageKey = `reviews_${productId}`;

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem(storageKey);

    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert("Please enter your name and review");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name,
      rating: Number(rating),
      comment: comment,
      date: new Date().toLocaleDateString()
    };

    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);

    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedReviews)
    );

    // Send updated reviews to ProductDetails
    if (onReviewsChange) {
      onReviewsChange(updatedReviews);
    }

    setName("");
    setRating(5);
    setComment("");

    alert("Review submitted successfully!");
  };

  const handleDelete = (id) => {

    const updatedReviews = reviews.filter(
      (review) => review.id !== id
    );

    setReviews(updatedReviews);

    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedReviews)
    );

    // Send updated reviews to ProductDetails
    if (onReviewsChange) {
      onReviewsChange(updatedReviews);
    }
  };

  return (
    <div className="reviews-container">

      <h2>
        Customer Reviews
      </h2>

      {/* ================= ADD REVIEW ================= */}

      <div className="review-form">

        <h3>
          Write a customer review
        </h3>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>
            Rating
          </label>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="5">
              ⭐⭐⭐⭐⭐ 5 - Excellent
            </option>

            <option value="4">
              ⭐⭐⭐⭐ 4 - Very Good
            </option>

            <option value="3">
              ⭐⭐⭐ 3 - Good
            </option>

            <option value="2">
              ⭐⭐ 2 - Average
            </option>

            <option value="1">
              ⭐ 1 - Poor
            </option>
          </select>

          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="5"
          />

          <button
            type="submit"
            className="review-submit"
          >
            Submit Review
          </button>

        </form>

      </div>


      {/* ================= REVIEWS ================= */}

      <div className="reviews-list">

        <h3>
          {reviews.length} Customer Review
          {reviews.length !== 1 ? "s" : ""}
        </h3>

        {reviews.length === 0 ? (

          <p className="no-reviews">
            No reviews yet. Be the first to review this product!
          </p>

        ) : (

          reviews.map((review) => (

            <div
              className="review-card"
              key={review.id}
            >

              <div className="review-header">

                <div>

                  <strong>
                    {review.name}
                  </strong>

                  <div className="stars">
                    {"⭐".repeat(review.rating)}
                  </div>

                </div>

                <span className="review-date">
                  {review.date}
                </span>

              </div>

              <p className="review-comment">
                {review.comment}
              </p>

              <button
                className="delete-review"
                onClick={() => handleDelete(review.id)}
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default ProductReviews;


