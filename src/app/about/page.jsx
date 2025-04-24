import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./about.css"
import "../../styles/global.css"

function AboutPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="about-hero">
          <div className="container">
            <h1 className="page-title">About ATHLETIX</h1>
          </div>
        </div>

        <div className="container">
          <div className="about-content">
            <section className="about-section">
              <h2>Our Story</h2>
              <p>
                Founded in 2024, ATHLETIX was born from a passion for combining
                performance athletics with contemporary style. We believe that
                athletic wear should not only enhance your performance but also
                make you feel confident and stylish.
              </p>
            </section>

            <section className="about-section">
              <h2>Our Mission</h2>
              <p>
                At ATHLETIX, our mission is to provide premium athletic wear that
                empowers individuals to achieve their fitness goals while
                maintaining their personal style. We are committed to creating
                sustainable, high-quality products that stand the test of time.
              </p>
            </section>

            <div className="about-grid">
              <div className="about-card">
                <div className="about-card-icon">🌿</div>
                <h3>Sustainability</h3>
                <p>
                  We use eco-friendly materials and sustainable manufacturing
                  processes to minimize our environmental impact.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">💪</div>
                <h3>Quality</h3>
                <p>
                  Every product is rigorously tested to ensure it meets our high
                  standards of durability and performance.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">🎨</div>
                <h3>Design</h3>
                <p>
                  Our designs blend contemporary aesthetics with functional
                  features for the perfect balance of style and performance.
                </p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">♻️</div>
                <h3>Innovation</h3>
                <p>
                  We continuously innovate our products with the latest
                  technologies and materials in athletic wear.
                </p>
              </div>
            </div>

            <section className="about-section">
              <h2>Our Commitment</h2>
              <p>
                We're committed to creating a community that celebrates active
                living and personal growth. Through our products and services, we
                aim to inspire and support individuals on their fitness journey.
              </p>
            </section>

            <section className="about-team">
              <h2>Join Our Community</h2>
              <p>
                Follow us on social media and join the ATHLETIX community to stay
                updated on new releases, fitness tips, and exclusive offers.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage 