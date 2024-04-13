import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customers/components/HomePage/HomePage';
import Cart from '../customers/components/Cart/Cart';
import Navbar from '../customers/components/Navbar/Navbar';
import Footer from '../customers/components/Footer/Footer';
import Product from '../customers/components/Product/Product';
import ProductDetails from '../customers/components/ProductDetails/ProductDetails';
import Checkout from '../customers/components/Checkout/Checkout';
import OrderDetails from '../customers/components/Order/OrderDetails';

function CustomerRouters() {
  return (
    <div>
      <div>
        <Navbar />
        {/* Ensure that HomePage is rendered first */}
        
      </div>
      <Routes>
        {/* The default route should be listed first */}
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:product" element={<ProductDetails />} />
        <Route path="/checkout/" element={<Checkout/>}/>
        <Route path="account/order/:orderId" element={<OrderDetails/>}/>

      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CustomerRouters;
