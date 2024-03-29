import React, { useEffect, useState, useContext } from "react";

import {
  PageContents,
  ContentBody,
  MainHeader,
  LeaderboardTabs,
  CoinsEarnedTab,
  XpUsedTab,
} from "./PageElements";
import { CircularProgress } from "@mui/material";
import { UserContext } from "../components/UserProvider";
import { ProfileBar } from "../components/ProfileBar";

import fetch from "node-fetch";
import { getCoinButton, getXpButton }from "./Logic"

import "../App.css";

// Creates leaderboard page and grabs all data to be used for it, including both a coins and XP leaderboard
function Leaderboard() {
  // Initializes useStates for coin data, XP data, and isCoin
  const [coinData, setCoinData] = useState(null);
  const [xpData, setXpData] = useState(null);
  const [isCoin, setIsCoin] = useState(true);

  // Grabs userInfo from the backend
  const userInfo = useContext(UserContext);
  // Sets username, xp, coins, and userData from userInfo
  const { username, xp, coins, userData } = userInfo;

  // React hook used to grab both coin leaderboard and XP leaderboard data
  useEffect(() => {
    async function fetchData() {
      let response = null;
      // If coin data is not yet initialized, fetch that data from the backend
      if (!coinData) {
        console.log("Fetching Coin Leaderboard...");
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getCoinLeaderboard"
        );
        console.log(response);
        const json = await response.json();
        setCoinData(json);
      }
      // If XP data is not initialized, fetch that data from the backend
      if (!xpData) {
        console.log("Fetching Xp Leaderboard...");
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getXpLeaderboard"
        );
        const json = await response.json();
        setXpData(json);
      }
    }
    fetchData();
  }, [isCoin]);

  // Generate the leaderboard table, depending on whether or not isCoin is true
  // If isCoin is true, get coin leaderboard, else, get XP leaderboard
  function generateTable() {
    // Set data to either coinData or xpData depending on isCoin
    let data = isCoin ? coinData : xpData;

    // Return the leaderboard table
    return (
      <tbody>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>{isCoin ? "Total Coins Earned" : "Total XP Used"}</th>
        </tr>
        {
          // Grab the first 10 leaderboard values, and display them with the rank and username
          data.slice(0, 10).map((val, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{val.username}</td>
                <td>{isCoin ? val.totalCoins : val.xpUsed}</td>
              </tr>
            );
          })
        }
      </tbody>
    );
  }

  // Returns the entire leaderboard page, including the buttons and table
  return (
    <PageContents>
      <div className="bluebackground">
        <div className="whitebackground"></div>
      </div>
      <ContentBody>
        <MainHeader>Leaderboard</MainHeader>
        <LeaderboardTabs>
          <CoinsEarnedTab onClick={() => setIsCoin(true)}>
            {getCoinButton(isCoin)}
          </CoinsEarnedTab>
          <XpUsedTab onClick={() => setIsCoin(false)}>
            {getXpButton(isCoin)} 
          </XpUsedTab>
        </LeaderboardTabs>
        {coinData && xpData ? generateTable() : <CircularProgress />}
      </ContentBody>
      <ProfileBar
        userData={userData}
        username={username}
        xp={xp}
        coins={coins}
      />
    </PageContents>
  );
}

export default Leaderboard;
