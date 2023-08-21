import React from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './pages/Footer';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderNavbar from './pages/UnderNavbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <UnderNavbar />
    <Footer />
    </BrowserRouter>
   
    </div>
  );
}

export default App;
