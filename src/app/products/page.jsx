import Header from "../../components/Header/Header"
import ProductGrid from "../../components/Products/ProductGrid"
import Footer from "../../components/Footer/Footer"
import "../../styles/global.css"

function ProductsPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="page-title">All Products</h1>
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductsPage
