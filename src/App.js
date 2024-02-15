import logo from './logo.svg';
import './App.css';
import Navbar from "./customers/components/Navbar/Navbar";
import HomePage from './customers/components/HomePage/HomePage';
import Footer from './customers/components/Footer/Footer';


function App() {
  return (
    <div >  
        <Navbar/>
      <div >
          <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
