import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import { Route, Routes,Navigate } from "react-router-dom"
  
function App() {
  return (
   <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Navigate to="/Home" />}></Route>
      <Route path="/Home" element={<Home />} />
    </Routes>
    <Footer />
  </>
  );
}
  
export default App;