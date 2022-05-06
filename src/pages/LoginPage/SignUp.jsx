import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "../../firebase";
import "./SignUp.css";
import { TextField } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
    <div className="mt-8">
      <div className="smallback">
        <h1 className="text-3xl mb-2 text-center font-bold">Uplft</h1>
        <h2 className="spread">Spread positivity from anywhere.</h2>
        <div className="border border-white mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form className="boxup">
            {error !== null && (
              <div className="signuperror">
                {error}
              </div>
            )}
            <label htmlFor="userName" className="name">
              <TextField fullWidth id="userName" label="Username" variant="filled"
                className="my-1"
                onChange={(event) => onChangeHandler(event)} />
            </label>
            <label htmlFor="userEmail" className="emailup">
              <TextField fullWidth id="userEmail" label="Email" variant="filled"
                className="my-1"
                onChange={(event) => onChangeHandler(event)} />
            </label>
            <label htmlFor="userPassword" className="uppassword">
              <TextField fullWidth id="userPassword" label="Password" variant="filled"
                className="mt-1"
                type="password"
                onChange={(event) => onChangeHandler(event)} />
            </label>
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
            <p className="upaccount">
              Already have an account? &nbsp;
              <Link to="/" className="text-blue-500 hover:text-blue-600">
                Sign in here
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
