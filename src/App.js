import logo from './logo.svg';
import './App.css';
import Navbar from "./customers/components/Navbar/Navbar";
import HomePage from './customers/components/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';


function App() {
  return (
    <div >  
        <Navbar/>
      <div >
          {/* <HomePage/> */}
          <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
