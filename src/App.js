import './App.css';
import Navbar from './components/Navbar';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Routes>
         <Route path='/' exact component={Home} />
         <Route path='/reports' component={Reports} />
         <Route path='/products' component={Products} />
       </Routes>
    </Router>
 
    </>
  );
}

export default App;
