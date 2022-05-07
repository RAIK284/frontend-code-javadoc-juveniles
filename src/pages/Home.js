import React, { useState, useEffect, useContext } from "react";
import {
  PageContents,
  WelcomeText,
  Trophies,
  YourTrophies,
  TrophyBox,
  ContentBody,
  Messages,
  GreyTrophyBox,
} from "./PageElements";
import { CircularProgress } from "@mui/material";
import "./AllPages.css";
import "../App.css";
import "./Shop.css";
import fetch from "node-fetch";
import { UserContext } from "../components/UserProvider";
import "./Home.css";
import { ProfileBar } from "../components/ProfileBar";

// Home page: gets all user data to display on home page, and returns the home page itself
const Home = () => {
  // Gets all user data and puts it into a list
  const userInfo = useContext(UserContext);
  // Separates userInfo into specific user data, like username, xp, coins, etc
  const { username, xp, coins, userData } = userInfo;
  const [receivedMessages, setReceivedMessages] = useState(null);

  // React hook used to fetch recent received messages
  useEffect(() => {
    // Fetches message data
    async function fetchData() {
      let response = null;
      // If messages have not yet been received, fetch them from backend
      if (!receivedMessages) {
        console.log("Fetching Received Messages...");
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getReceivedMessagesFromUser/" +
            username
        );
        const json = await response.json();
        console.log(json);
        // Sets received messages to the fetched data
        setReceivedMessages(json);
      }
    }
    fetchData();
  }, [userInfo]);

  // Function to generate table of recent received messages
  function generateTable() {
    // Sets data to fetched received messages data
    let data = receivedMessages.data;
    return (
      <tbody>
        <tr>
          <th>Time Received</th>
          <th>Sender</th>
          <th>Message</th>
          <th>Coins Gained</th>
        </tr>
        {
          // Grabs the first 5 recent messages and maps them to be displayed in the table
        data.slice(0, 5).map((val, key) => {
          // Ensures that date and time of message is displayed correctly
          const date = new Date(val.timeSent._seconds * 1000);
          return (
            <tr key={key}>
              <td>
                {date.toLocaleDateString("en-US") +
                  " at " +
                  date.toLocaleTimeString("en-US")}
              </td>
              <td>@{val.sender}</td>
              <td>{val.messageBody}</td>
              <td>{val.numberOfCoins}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  // Function to generate the trophies that a user owns, these are displayed in rows of 4 trophies
  function generateTrophies(){
    if (userData){
      return (
        <div className="homeWrapper">
        {userData.trophies.map((val, key) => {
          return (
            <GreyTrophyBox>
              <div className="trophyName">{val}</div>
              <img
                className="photoSize"
                src={`/Trophies/${val}.png`}
                alt={val}
              />
            </GreyTrophyBox>
          );
        })}
      </div>
      )
    } else {
      return (<CircularProgress />)
    }

  }

  // Returns the entire home page to be displayed
  return (
    <>
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground"></div>
        </div>
        <ContentBody>
          <WelcomeText>Welcome back, @{username}!</WelcomeText>
          <Trophies>
            <YourTrophies>Your Trophies</YourTrophies>
            <TrophyBox>
              {generateTrophies()}
            </TrophyBox>
          </Trophies>
          <Messages>{(receivedMessages && receivedMessages.data) ? generateTable() : <CircularProgress />}</Messages>
        </ContentBody>
        <ProfileBar userData={userData} username={username} xp={xp} coins={coins}/>
      </PageContents>
    </>
  );
};

export default Home;
