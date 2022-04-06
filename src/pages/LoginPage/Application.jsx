import React, {useContext}  from 'react';
import '../../App.css';
import Navbar from '../../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Messages from '../Messages';
import Leaderboard from '../Leaderboard';
import Shop from '../Shop';
import Profile from '../Profile.js';
import SignUp from './SignUp';
import SignIn from './SignIn'
import PasswordReset from './PasswordReset';
import {UserContext} from './UserProvider';


function Application() {
  const user = useContext(UserContext);
  return (
    user ?
    //   <Router>
    //     <Navbar/>
    //    <Routes>
    //      <Route path='/messages' element={< Messages />} />
    //      <Route path='/leaderboard' element={< Leaderboard />} />
    //      <Route path='/shop' element={< Shop />} />
    //      <Route path='/profile' element={< Profile />} />
    //      <Route exact path='/' element={<Home />} />
    //    </Routes>
    //   </Router>
    <SignIn />
      :
      <Router>
        <SignUp path="signup" />
        <SignIn path="/" />
        <PasswordReset path = "passwordReset" />
      </Router>
  );
}

export default Application;
