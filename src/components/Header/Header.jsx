"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Search, User, ShoppingCart, Sun, Moon } from "lucide-react"
import AuthModal from "../Auth/AuthModal"
import "./Header.css"
import { useTheme } from "../../context/ThemeContext"
import { useRef } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const searchRef = useRef()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleAuthClick = () => {
    setIsAuthModalOpen(true)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const value = searchRef.current.value.trim()
    if (value) {
      navigate(`/products?search=${encodeURIComponent(value)}`)
      searchRef.current.value = ""
      setMenuOpen(false)
    }
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
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                ref={searchRef}
                placeholder="Search category..."
                className="search-input"
                aria-label="Search"
              />
              <button className="icon-btn" type="submit">
                <i className="icon-search">🔍</i>
              </button>
            </form>
            <button className="icon-btn" onClick={toggleTheme} title="Toggle Night Mode">
              {theme === "light" ? "🌙" : "☀️"}
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
