import Header from "../../components/Header/Header"
import ProductGrid from "../../components/Products/ProductGrid"
import Footer from "../../components/Footer/Footer"
import { allProducts } from "../../data/products"
import "../../styles/global.css"
import { useLocation } from "react-router-dom"

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function ProductsPage() {
  const query = useQuery()
  const search = query.get("search")?.toLowerCase() || ""

  // Simple category search: match category or product name
  const filteredProducts = search
    ? allProducts.filter(
        (product) =>
          product.category.toLowerCase().includes(search) ||
          product.name.toLowerCase().includes(search)
      )
    : allProducts

  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="page-title">All Products</h1>
          <ProductGrid products={filteredProducts} />
          {search && filteredProducts.length === 0 && (
            <p style={{ marginTop: "2rem", color: "var(--color-accent)" }}>
              No products found for "{search}"
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductsPage
