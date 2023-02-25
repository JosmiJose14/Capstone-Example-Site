import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"
  
function App() {
  return (
   <>
    <Navbar />
    <Routes>
    <Route path="/Home" element={<Home />} />
  </Routes>
  <Footer />
  </>
  );
}
  
export default App;