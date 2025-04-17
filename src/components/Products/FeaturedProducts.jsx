import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import { featuredProducts } from "../../data/products"
import "./FeaturedProducts.css"

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/products" className="view-all">
            View All
          </Link>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
