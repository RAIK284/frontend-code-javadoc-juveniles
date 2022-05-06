import React, { useState, useEffect, useContext } from "react";
import {
  PageContents,
  RootWrapperHome,
  WelcomeText,
  Trophies,
  YourTrophies,
  TrophyBox,
  MessagesTable,
  TableHeader,
  SenderBox,
  TimeBox,
  SenderText,
  TimeText,
  SubjectBox,
  MessageBox,
  SubjectText,
  MessageText,
  CoinsGainedBox,
  CoinsGainedText,
  MessageRow,
  SenderBox_0001,
  TimeBox_0001,
  SenderText_0001,
  TimeText_0001,
  SubjectBox_0001,
  MessageBox_0001,
  MessageText_0001,
  SubjectText_0001,
  CoinBox,
  CoinAmount,
  CoinIcon,
  CoinIcon_0001,
  CoinBgImage,
  CoinNumber,
  Background,
  WhiteBackground,
  ContentBody,
  Messages,
  RecentMessages,
  GreyTrophyBox,
  StatBar,
  ProfilePic,
  ProfileImage,
  ProfileImage_0001,
  ProfileImage_0002,
  Username,
  Xp,
  XpImage,
  XpImage_0001,
  XpBigImage,
  _000,
  Coins,
  CoinImage,
  CoinImage_0001,
  CoinBgImage_0001,
  CoinAmount_0001,
} from "./PageElements";
import { CircularProgress } from "@mui/material";
import "./AllPages.css";
import "../App.css";
import "./Shop.css";
import { auth } from "../firebase";
import fetch from "node-fetch";
import { useAuthState } from "react-firebase-hooks/auth";
import { useBetween } from "use-between";
import { UserContext } from "../components/UserProvider";
import "./Home.css";
import { ProfileBar } from "../components/ProfileBar";

export const useUserState = () => {
  const [user, setUser] = useState(useAuthState(auth)[0]);
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState(null);
  const [xp, setXp] = useState(null);
  const [coins, setCoins] = useState(null);

  return {
    user,
    setUser,
    userData,
    setUserData,
    username,
    setUsername,
    xp,
    setXp,
    coins,
    setCoins,
  };
};

const Home = () => {
  const userInfo = useContext(UserContext);
  const { username, xp, coins, userData } = userInfo;
  const [receivedMessages, setReceivedMessages] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = null;
      if (!receivedMessages) {
        console.log("Fetching Received Messages...");
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getReceivedMessagesFromUser/" +
            username
        );
        const json = await response.json();
        console.log(json);
        setReceivedMessages(json);
      }
    }
    fetchData();
  }, [userInfo]);

  function generateTable() {
    let data = receivedMessages.data;
    return (
      <tbody>
        <tr>
          <th>Time Received</th>
          <th>Sender</th>
          <th>Message</th>
          <th>Coins Gained</th>
        </tr>
        {data.slice(0, 5).map((val, key) => {
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
