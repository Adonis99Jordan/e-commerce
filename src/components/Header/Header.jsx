"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import AuthModal from "../Auth/AuthModal"
import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleAuthClick = () => {
    setIsAuthModalOpen(true)
  }

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo">
            <h1>ATHLETIX</h1>
          </Link>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/products/men">Men</Link>
              </li>
              <li>
                <Link to="/products/women">Women</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn">
              <i className="icon-search">🔍</i>
            </button>
            <button className="icon-btn" onClick={handleAuthClick}>
              <i className="icon-user">👤</i>
            </button>
            <button className="icon-btn cart-btn">
              <i className="icon-cart">🛒</i>
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  )
}

export default Header
