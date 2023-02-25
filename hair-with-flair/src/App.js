import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"
  
function App() {
  return (
   <>
    <Navbar />

    <Routes>
    <Route path="/Home" element={<Home />} />
  </Routes>
  </>
  );
}
  
export default App;