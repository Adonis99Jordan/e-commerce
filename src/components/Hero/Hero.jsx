import { Link } from "react-router-dom"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ELEVATE YOUR PERFORMANCE</h1>
        <p className="hero-subtitle">New collection designed for comfort and style</p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            Shop Men
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Shop Women
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
