import React, { useState } from "react"
import ProductCard from "./ProductCard"
import { allProducts } from "../../data/products" // Correctly import as a named export
import "./ProductGrid.css"

function ProductGrid() {
  const [filter, setFilter] = useState("all")

  const filteredProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter((product) => product.category.toLowerCase() === filter)

  return (
    <div className="product-grid-container">
      <div className="filters">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "men" ? "active" : ""}`}
          onClick={() => setFilter("men")}
        >
          Men
        </button>
        <button
          className={`filter-btn ${filter === "women" ? "active" : ""}`}
          onClick={() => setFilter("women")}
        >
          Women
        </button>
        <button
          className={`filter-btn ${filter === "accessories" ? "active" : ""}`}
          onClick={() => setFilter("accessories")}
        >
          Accessories
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid