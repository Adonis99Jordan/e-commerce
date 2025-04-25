import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import "./UserMenu.css"

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const menuRef = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="user-menu-container" ref={menuRef}>
      <button 
        className="icon-btn user-menu-trigger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {user.photoURL ? (
          <img 
            src={user.photoURL} 
            alt={user.name} 
            className="user-avatar"
          />
        ) : (
          <div className="user-avatar-placeholder">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="user-menu">
          <div className="user-menu-header">
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
          </div>
          
          <div className="user-menu-items">
            <Link to="/profile" className="menu-item">
              <i className="icon-profile">👤</i>
              My Profile
            </Link>
            <Link to="/orders" className="menu-item">
              <i className="icon-orders">📦</i>
              My Orders
            </Link>
            <Link to="/wishlist" className="menu-item">
              <i className="icon-wishlist">❤️</i>
              Wishlist
            </Link>
            <Link to="/settings" className="menu-item">
              <i className="icon-settings">⚙️</i>
              Settings
            </Link>
            <button onClick={logout} className="menu-item logout">
              <i className="icon-logout">🚪</i>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu 