import { Link } from "react-router-dom"
import "./ProductCard.css"

function ProductCard({ product }) {
  const { id, name, price, image, category, isNew, discount } = product

  return (
    <div className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <div className="product-image-container">
          <img src={image || "/placeholder.svg"} alt={name} className="product-image" />
          {isNew && <span className="product-badge new">New</span>}
          {discount > 0 && <span className="product-badge discount">{discount}% Off</span>}
        </div>

        <div className="product-info">
          <span className="product-category">{category}</span>
          <h3 className="product-name">{name}</h3>
          <div className="product-price">
            {discount > 0 ? (
              <>
                <span className="price-discounted">${price}</span>
                <span className="price-original">${((price * (100 + discount)) / 100).toFixed(2)}</span>
              </>
            ) : (
              <span className="price">${price}</span>
            )}
          </div>
        </div>
      </Link>

      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  )
}

export default ProductCard
