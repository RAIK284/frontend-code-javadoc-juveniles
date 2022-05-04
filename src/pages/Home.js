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
import { auth } from "../firebase";
import fetch from "node-fetch";
import { useAuthState } from "react-firebase-hooks/auth";
import { useBetween } from "use-between";
import { UserContext } from "../components/UserProvider";

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
  const { username, xp, coins } = userInfo;
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
  }, []);

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

  function loading(){
    return (<CircularProgress />)
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
            <TrophyBox />
          </Trophies>
          <Messages>{receivedMessages ? generateTable() : loading()}</Messages>
        </ContentBody>

        <StatBar>
          <ProfilePic>
            <ProfileImage>
              <ProfileImage_0001>
                <ProfileImage_0002
                  src="https://www.biography.com/.image/t_share/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg"
                  alt="image of ProfileImage"
                />
              </ProfileImage_0001>
            </ProfileImage>
            <Username>@{username}</Username>
          </ProfilePic>
          <Xp>
            <XpImage>
              <XpImage_0001>
                <XpBigImage
                  src="https://image.shutterstock.com/image-vector/vector-icon-gold-achievement-xp-260nw-1151064896.jpg"
                  alt="image of XpBigImage"
                />
              </XpImage_0001>
            </XpImage>
            <_000>{xp}</_000>
          </Xp>
          <Coins>
            <CoinImage>
              <CoinImage_0001>
                <CoinBgImage_0001
                  src="https://image.shutterstock.com/image-vector/vector-money-icon-gold-coin-260nw-1138554755.jpg"
                  alt="image of CoinBgImage"
                />
              </CoinImage_0001>
            </CoinImage>
            <CoinAmount_0001>{coins}</CoinAmount_0001>
          </Coins>
        </StatBar>
      </PageContents>
    </>
  );
};

export default Home;
