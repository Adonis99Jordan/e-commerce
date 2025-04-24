import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./app/page"
import ProductsPage from "./app/products/page"
import MenPage from "./app/products/men/page"
import WomenPage from "./app/products/women/page"
import AboutPage from "./app/about/page"
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/men" element={<MenPage />} />
        <Route path="/products/women" element={<WomenPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
