import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, generateUserDocument } from "../../firebase";
import "./SignUp.css";
import { TextField } from '@mui/material';

/* this is the file that controls the sign-up page and its functionality with the layout*/
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /* this checks if the email, username, and password are valid or it shoots an error */
  const createUserWithEmailAndPasswordHandler = async (event, email, password, username) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log("new user:", user);
      await generateUserDocument(user, { username });
      window.location.reload(false);
    }
    catch (error) {
      setError('Error signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setUsername("");
  };

  /* this sets the name, password, and the username that the user enters */
  const onChangeHandler = event => {
    const name = event.currentTarget.id;
    const value = event.currentTarget.value;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "userName") {
      setUsername(value);
    }
  };

  return (
    <div className="sidebars">
      <div className="smallback">
        <h1 className="title">Uplft</h1>
        <h2 className="spread">Spread positivity from anywhere.</h2>
        <form className="boxup">
          {error !== null && (
            <div className="signuperror">
              {error}
            </div>
          )}
          {/* fillable text boxes for signup credentials */}
          <label htmlFor="userName" className="name">
            <TextField fullWidth id="userName" label="Username" variant="filled"
              onChange={(event) => onChangeHandler(event)} />
          </label>
          <label htmlFor="userEmail" className="emailup">
            <TextField fullWidth id="userEmail" label="Email" variant="filled"
              onChange={(event) => onChangeHandler(event)} />
          </label>
          <label htmlFor="userPassword" className="uppassword">
            <TextField fullWidth id="userPassword" label="Password" variant="filled"
              type="password"
              onChange={(event) => onChangeHandler(event)} />
          </label>
          {/* clicking this button will check with the database if the credentials are valid to create a user*/}
          <button
            className="signUp"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password, username);
              navigate("/");
            }}
          >
            Sign up
          </button>
          <p className="requirements">
            Passwords must be at least 8 characters long and include: <br></br>
            An uppercase character<br></br>
            A number<br></br>
            At least one special character
          </p>
          {/* link to the sign in page */}
          <p className="upaccount">
            Already have an account? &nbsp;
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Sign in here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
