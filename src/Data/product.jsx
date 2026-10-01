import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css";

function Product({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [category, SetCategory] = useState("all");
  const [sortBy, SetSortBy] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Products
  async function ProductFetch() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    ProductFetch();
  }, []);
  

  // Get all unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Search
  let filtered = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim())
  );

  // Category Filter
  if (category !== "all") {
    filtered = filtered.filter(
      (item) => item.category === category
    );
  }

  // Sorting
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "name") {
    filtered.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div>
      {error && <h2>{error}</h2>}

      {loading && <h2>Loading...</h2>}

      {!error && !loading && (
        <div className="product-section">

          <h2>Our Products</h2>

          {/* FILTER SECTION */}
          <div className="filter-container">

            {/* CATEGORY */}
            <div className="filter-box">
              <label>Category</label>

              <select
                value={category}
                onChange={(e) => SetCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all"
                      ? "All Categories"
                      : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* SORT */}
            <div className="filter-box">
              <label>Sort:</label>

              <select
                value={sortBy}
                onChange={(e) => SetSortBy(e.target.value)}
              >
                <option value="default">
                  Default
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Rating
                </option>

                <option value="name">
                  Name: A-Z
                </option>
              </select>
            </div>

          </div>

          {/* SEARCH RESULT */}
          {searchTerm && (
            <p className="search-result">
              Search Result:{" "}
              <strong>"{searchTerm}"</strong>
            </p>
          )}

          {/* PRODUCTS */}
          {filtered.length === 0 ? (
            <div className="no-product">
              <h2>No Product Found</h2>

              <p>
                Try searching for another product...
              </p>
            </div>
          ) : (
            <div className="products-list">
              {filtered.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>
          )} 

        </div>
      )}
    </div>
  );
}

export default Product;