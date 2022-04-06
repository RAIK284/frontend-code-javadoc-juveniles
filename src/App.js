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
import {UserContext} from './pages/LoginPage/UserProvider';
import Application from './pages/LoginPage/Application';


function App() {
  <UserContext>
    <Application />
  </UserContext>
}

export default App;
