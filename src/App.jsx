import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import Productdetails from "./Pages/ProductDetails"
import WishList from "./Pages/WishList"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Mobiles from "./Pages/Mobiles"
import Laptops from "./Pages/Laptops"



const App = () => {
  const [Search, SetSearch] = useState()
  return (
    <div>
      <Navbar Search={Search} SetSearch={SetSearch} />

      <main className="pt-24 pb-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/shop" element={<Shop Search={Search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptops" element={<Laptops/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
