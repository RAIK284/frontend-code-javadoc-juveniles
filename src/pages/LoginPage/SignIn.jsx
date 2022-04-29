import React, {useState} from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import "./SignIn.css";
import { TextField } from '@mui/material';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        console.log(email, password);
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Incorrect username or password");
          console.error("Incorrect username or password", error);
        });
      };
      
      const onChangeHandler = (event) => {
          const name = event.currentTarget.id;
          const value = event.currentTarget.value;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
   

  return (
    <div className="mt-8">
      <div className="smallback">
      <h1 className="text-3xl">Uplft</h1>
      <h2 className="spread">Spread positivity from anywhere.</h2>
       <div className="box">
        {error !== null && <div className = "error">{error}</div>}
        <form className="">
          <label htmlFor="userEmail" className="email">
          <TextField fullWidth id="userEmail" label="Email or username" variant="filled" 
          className="my-1"
          onChange = {event => onChangeHandler(event)}/>
          </label>
          <label htmlFor="userPassword" className="password">
          <TextField fullWidth id="userPassword" label="Password" variant="filled" 
          className="mt-1"
          onChange = {(event) => onChangeHandler(event)}
          type = "password"/>
          </label>
          <hr className="line1"></hr>
          <p className="ortag">OR</p>
          <hr className="line2"></hr>
          <button className="login" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Log In
          </button>
        </form>
        <p className="account">
          Don't have an account? &nbsp;
          <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
           Sign up.
          </Link>{" "}
          <br />{" "}
        </p>
        </div>
        </div>
    </div>
  );
};

export default SignIn;
