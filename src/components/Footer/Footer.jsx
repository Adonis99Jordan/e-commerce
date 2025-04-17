import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">ATHLETIX</h3>
            <p className="footer-description">Premium athletic wear designed for performance and style.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="icon-facebook">FB</i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-instagram">IG</i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-twitter">TW</i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-youtube">YT</i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
              </li>
              <li>
                <Link to="/new-arrivals">New Arrivals</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Help</h4>
            <ul className="footer-links">
              <li>
                <Link to="/customer-service">Customer Service</Link>
              </li>
              <li>
                <Link to="/track-order">Track Order</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">About</h4>
            <ul className="footer-links">
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li>
                <Link to="/sustainability">Sustainability</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
              <li>
                <Link to="/affiliates">Affiliates</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} ATHLETIX. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
