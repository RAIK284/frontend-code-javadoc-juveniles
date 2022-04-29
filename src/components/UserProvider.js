import react, { Component, createContext, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import fetch from "node-fetch";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = useAuthState(auth)[0];
  const [username, setUsername] = useState(null);
  const [xp, setXp] = useState(null);
  const [coins, setCoins] = useState(null);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      let response = null;
      console.log("user", user)
      if (user) {
        response = await fetch(`https://us-central1-uplft-9ed97.cloudfunctions.net/app/getUserById/${user.uid}`)
        const json =  await response.json();
        setUserData(json);
        setUsername(json.username);
        setXp(json.currentXp);
        setCoins(json.currentCoins);
        console.log("user data: ", json);
      }
    }
    fetchData();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, username, xp, coins, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;