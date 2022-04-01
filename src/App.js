import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Leaderboard from './pages/Leaderboard';
import Shop from './pages/Shop';
import Profile from './pages/Profile.js';


function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Routes>
         <Route path='/messages' element={< Messages />} />
         <Route path='/leaderboard' element={< Leaderboard />} />
         <Route path='/shop' element={< Shop />} />
         <Route path='/profile' element={< Profile />} />
         <Route exact path='/' element={<Home />} />
       </Routes>
    </Router>
 
    </>
  );
}

export default App;