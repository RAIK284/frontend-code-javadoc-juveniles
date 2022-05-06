import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./SignIn.css";
import { TextField } from '@mui/material';

/* this is the file that controls the sign-in page and its functionality with the layout*/
const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  /* this checks if the email and password is correct, if not it sends an error */
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Incorrect username or password");
      console.error("Incorrect username or password", error);
    });
  };

  /* This sets the value for the email and for the password */
  const onChangeHandler = (event) => {
    const name = event.currentTarget.id;
    const value = event.currentTarget.value;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    <div className="sidebars">
      <div className="smallback">
        <h1 className="title"> Uplft</h1>
        <h2 className="spread">Spread positivity from anywhere.</h2>
        <div className="box">
          {error !== null && <div className="error">{error}</div>}
          <form>
            {/* fillable text boxes for login credentials */}
            <label htmlFor="userEmail" className="email">
              <TextField fullWidth id="userEmail" label="Email" variant="filled"
                onChange={(event) => onChangeHandler(event)} />
            </label>
            <label htmlFor="userPassword" className="password">
              <TextField fullWidth id="userPassword" label="Password" variant="filled" type="password"
                onChange={(event) => onChangeHandler(event)} />
            </label>
            <hr className="line1"></hr>
            <p className="ortag">OR</p>
            <hr className="line2"></hr>
            {/* clicking this button will check with the database if the name and password are valid */}
            <button className="login" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
              Log In
            </button>
          </form>
          {/* link to the sign up page */}
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
