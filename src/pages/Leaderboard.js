import React, { useEffect, useState } from "react";

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
} from "./PageElements";

import fetch from "node-fetch";

import "../App.css";

function Leaderboard() {
  const [coinData, setCoinData] = useState(null);
  const [xpData, setXpData] = useState(null);
  const [isCoin, setIsCoin] = useState(true);

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
          <table_leaderboard>{generateTable()}</table_leaderboard>
        </ContentBody>
      </PageContents>
    );
  }
}

export default Leaderboard;