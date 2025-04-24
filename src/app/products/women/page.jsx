import Header from "../../../components/Header/Header"
import ProductGrid from "../../../components/Products/ProductGrid"
import Footer from "../../../components/Footer/Footer"
import "../../../styles/global.css"

function WomenPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="page-title">Women's Products</h1>
          <ProductGrid category="men"/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default WomenPage













// import React from "react"
// import products from "../../../data/products"

// const WomenPage = () => {
//   const womenProducts = products.filter(product => product.category === "women")
//   return (
//     <div>
//       <h1>Women's Products</h1>
//       <ul>
//         {womenProducts.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// export default WomenPage