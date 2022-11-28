import './components/styles/main.module.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/aside/Header';
import Footer from './components/aside/Footer';
import Home from './components/Home';
import Support from './components/Support';
import Buy from './components/Buy';
import ErrorPage from './components/404';

function App() {

  return (
    <Router>

      <Routes>
        <Route path='*' element={<ErrorPage />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/shop' element={<Buy />}></Route>
      </Routes>

    </Router>
  )
}

export default App;
