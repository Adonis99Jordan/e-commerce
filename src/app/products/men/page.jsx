import Header from "../../../components/Header/Header"
import ProductGrid from "../../../components/Products/ProductGrid"
import Footer from "../../../components/Footer/Footer"
import "../../../styles/global.css"

function MenPage() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="page-title">Men's Products</h1>
          <ProductGrid category="men"/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MenPage


















// import React from "react"
// import products from "../../../data/products"

// const MenPage = () => {
//   const menProducts = products.filter(product => product.category === "men")
//   return (
//     <div>
//       <h1>Men's Products</h1>
//       <ul>
//         {menProducts.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// export default MenPage
