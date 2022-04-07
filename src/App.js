import React, {useContext}  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Leaderboard from './pages/Leaderboard';
import Shop from './pages/Shop';
import Profile from './pages/Profile.js';
import SignUp from './pages/LoginPage/SignUp';
import SignIn from './pages/LoginPage/SignIn'
import PasswordReset from './pages/LoginPage/PasswordReset';
import firebase from "firebase/compat/app";


function App() {

  var user = firebase.auth().currentUser;
  return (
    // user ?
      <Router>
        <Navbar/>
       <Routes>
         <Route path='/messages' element={< Messages />} />
         <Route path='/leaderboard' element={< Leaderboard />} />
         <Route path='/shop' element={< Shop />} />
         <Route path='/profile' element={< Profile />} />
         <Route exact path='/' element={<Home />} />
       </Routes>
      </Router>
      // :
      // <Router>

      //   <SignIn path="/" />

      // </Router>
  );
}

export default App;