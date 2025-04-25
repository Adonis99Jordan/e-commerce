import { useState } from "react"
import "./AuthModal.css"

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  })
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (!isLogin && formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match")
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSuccessMessage(isLogin ? "Login successful!" : "Account created successfully!")
      
      // Clear form after success
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
      })

      // Close modal after showing success message
      setTimeout(() => {
        onClose()
        setSuccessMessage("")
      }, 1500)

    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setError("") // Clear error when user starts typing
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="auth-modal-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose()
    }}>
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="auth-header">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <p>
            {isLogin 
              ? "Welcome back! Please login to your account." 
              : "Create an account to receive updates and track your orders."}
          </p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                placeholder="Enter your full name"
                disabled={isLoading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
                placeholder="Enter your password"
                disabled={isLoading}
              />
              {!isLogin && (
                <div className="password-strength">
                  <div className={`strength-bar ${getPasswordStrength(formData.password)}`}></div>
                </div>
              )}
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
                placeholder="Confirm your password"
                disabled={isLoading}
              />
            </div>
          )}

          <button 
            type="submit" 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              isLogin ? "Login" : "Sign Up"
            )}
          </button>

          {isLogin && (
            <button type="button" className="forgot-password-button">
              Forgot Password?
            </button>
          )}
        </form>

        <div className="auth-footer">
          <div className="separator">
            <span>or continue with</span>
          </div>

          <div className="social-auth-buttons">
            <button className="social-auth-button google">
              <img src="/images/google-icon.svg" alt="Google" />
              Google
            </button>
            <button className="social-auth-button facebook">
              <img src="/images/facebook-icon.svg" alt="Facebook" />
              Facebook
            </button>
          </div>

          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button 
                className="switch-button"
                onClick={() => setIsLogin(false)}
                disabled={isLoading}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button 
                className="switch-button"
                onClick={() => setIsLogin(true)}
                disabled={isLoading}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// Password strength checker
function getPasswordStrength(password) {
  if (!password) return ""
  if (password.length < 6) return "weak"
  
  let strength = 0
  if (password.length >= 8) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  if (strength < 2) return "weak"
  if (strength < 3) return "medium"
  return "strong"
}

export default AuthModal 