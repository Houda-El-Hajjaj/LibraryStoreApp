import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from "./Pages/Home";
import './App.css'
import BookDetails from './Pages/BookDetails';
import BookBasket from './Pages/BookBasket';
import About from './Pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/basketbook" element={ <BookBasket /> }></Route>
      <Route path="/BookDetails/:bookrank" element={ <BookDetails /> }></Route>
      <Route path="/About" element={ <About /> }></Route>  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
