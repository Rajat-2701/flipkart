import Admin from "./components/admin/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import Navbar from "./components/Navbar/Navbar";
import SingleProduct from "./components/products/SingleProduct";
import Cart from "./components/Cart/Cart";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <Routes>
        <Route exact path="/all-products" element={<ProductList />} />
      </Routes>
      <Routes>
        <Route exact path="/products/single-product" element={<SingleProduct />} />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
