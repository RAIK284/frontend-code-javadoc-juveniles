import React, { useEffect, useState, useContext } from "react";

import {
  PageContents,
  ContentBody,
  MainHeader,
  LeaderboardTabs,
  CoinsEarnedTab,
  Underline,
  Underline_0001,
  AllTimeCoinsEarned,
  AllTimeXpUsed,
  XpUsedTab,
  _000,
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
  Coins,
  CoinImage,
  CoinImage_0001,
  CoinBgImage_0001,
  CoinAmount_0001,
} from "./PageElements";
import { CircularProgress } from "@mui/material";
import { UserContext } from "../components/UserProvider";

import fetch from "node-fetch";

import "../App.css";

function Leaderboard() {
  const [coinData, setCoinData] = useState(null);
  const [xpData, setXpData] = useState(null);
  const [isCoin, setIsCoin] = useState(true);
  const userInfo = useContext(UserContext);
  const { username, xp, coins } = userInfo;

  useEffect(() => {
    async function fetchData() {
      let response = null;
      if (!coinData) {
        console.log("Fetching Coin Leaderboard...")
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getCoinLeaderboard"
        );
        console.log(response)
        const json = await response.json();
        setCoinData(json);
      } 
      if (!xpData) {
        console.log("Fetching Xp Leaderboard...")
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getXpLeaderboard"
        );
        const json = await response.json();
        setXpData(json);
      }
    }
    fetchData();
  }, [isCoin]);

  function generateTable() {
    let data = isCoin ? coinData : xpData;
    return (
      <tbody>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>{isCoin ? "Total Coins Earned" : "Total XP Used"}</th>
        </tr>
        {data.slice(0, 10).map((val, key) => {
          return (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{val.username}</td>
              <td>{isCoin ? val.totalCoins : val.xpUsed}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  function getCoinButton() {
    if (isCoin) {
      return (
        <CoinsEarnedTab onClick={() => setIsCoin(true)}>
          <Underline />
          <AllTimeCoinsEarned>ALL-TIME COINS EARNED</AllTimeCoinsEarned>
        </CoinsEarnedTab>
      );
    }
    return (
      <CoinsEarnedTab onClick={() => setIsCoin(true)}>
        <Underline style={{ backgroundColor: "rgb(128, 128, 128)" }} />
        <AllTimeXpUsed>ALL-TIME COINS EARNED</AllTimeXpUsed>
      </CoinsEarnedTab>
    );
  }

  function getXpButton() {
    if (isCoin) {
      return (
        <XpUsedTab onClick={() => setIsCoin(false)}>
          <Underline_0001 />
          <AllTimeXpUsed>ALL-TIME XP USED</AllTimeXpUsed>
        </XpUsedTab>
      );
    }
    return (
      <XpUsedTab onClick={() => setIsCoin(false)}>
        <Underline_0001 style={{ backgroundColor: "rgb(24, 120, 208)" }} />
        <AllTimeCoinsEarned>ALL-TIME XP USED</AllTimeCoinsEarned>
      </XpUsedTab>
    );
  }

  if (coinData && xpData) {
    return (
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground"></div>
        </div>
        <ContentBody>
          <MainHeader>Leaderboard</MainHeader>
          <LeaderboardTabs>
            {getCoinButton()}
            {getXpButton()}
          </LeaderboardTabs>
          {generateTable()}
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
    );
  } else {
    return (
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground"></div>
        </div>
        <ContentBody>
          <MainHeader>Leaderboard</MainHeader>
          <LeaderboardTabs>
            {getCoinButton()}
            {getXpButton()}
          </LeaderboardTabs>
          <CircularProgress />
        </ContentBody>
      </PageContents>
    );
  }
}

export default Leaderboard;