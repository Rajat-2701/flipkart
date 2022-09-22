import Admin from "./components/admin/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <ProductList />
    </Router>
  );
}

export default App;
