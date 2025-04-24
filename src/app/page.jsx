import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import FeaturedProducts from "../components/Products/FeaturedProducts"
import Footer from "../components/Footer/Footer"
import "../styles/global.css"
import React from "react"

function HomePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
