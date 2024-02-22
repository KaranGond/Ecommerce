import logo from './logo.svg';
import './App.css';
import Navbar from "./customers/components/Navbar/Navbar";
import HomePage from './customers/components/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './customers/components/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
      <Navbar />
      <div >
        {/* <HomePage/> */}
        {/* <BrowserRouter>
          <Product/>
          </BrowserRouter> */}

        <ProductDetails/>


      </div>
      <Footer />
    </div>
  );
}

export default App;
