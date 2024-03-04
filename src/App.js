import logo from './logo.svg';
import './App.css';
import Navbar from "./customers/components/Navbar/Navbar";
import HomePage from './customers/components/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/Checkout/Checkout';
import Order from './customers/components/Order/Order';
import OrderDetails from './customers/components/Order/OrderDetails';

function App() {
  return (
    <div >
      <Navbar />
      <div >
        {/* <HomePage/> */}
        {/* <BrowserRouter>
          <Product/>
          </BrowserRouter> */}

        {/* <ProductDetails/> */}

          {/* <Cart/> */}
          {/* <BrowserRouter>
          <Checkout/>
          </BrowserRouter> */}
          {/* <Order/> */}
          <OrderDetails/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
