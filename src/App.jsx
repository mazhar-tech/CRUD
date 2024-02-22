import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewProducts from "./components/AddNewProducts";
import ProductsList from './components/ProductsList';
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/add-product" element={<AddNewProducts />} />
      <Route path="/product-list" element={<ProductsList />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
