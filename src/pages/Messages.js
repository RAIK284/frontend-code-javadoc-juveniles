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
  ComposeMessageButton,
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
  MessagesTable,
} from "./PageElements";
import { CircularProgress } from "@mui/material";
import { Modal } from "../components/Modal";
import { UserContext } from "../components/UserProvider";
import { useUserState } from "./Home";
import { useBetween } from "use-between";
import { ProfileBar } from "../components/ProfileBar";

const username = "maxrad02";

function Messages() {
  const [sentMessages, setSentMessages] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState(null);
  const [isReceived, setIsReceived] = useState(true);
  const userInfo = useContext(UserContext);
  const { username, xp, coins, userData } = userInfo;

  const [showModal, setShowModal] = useState(false);

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
      if (!sentMessages) {
        console.log("Fetching Sent Messages...");
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getSentMessagesFromUser/" +
            username
        );
        const json = await response.json();
        setSentMessages(json);
      }
    }
    fetchData();
  }, [isReceived, sentMessages]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function getReceivedButton() {
    if (isReceived) {
      return (
        <CoinsEarnedTab onClick={() => setIsReceived(true)}>
          <Underline />
          <AllTimeCoinsEarned>RECEIVED MESSAGES</AllTimeCoinsEarned>
        </CoinsEarnedTab>
      );
    }
    return (
      <CoinsEarnedTab onClick={() => setIsReceived(true)}>
        <Underline style={{ backgroundColor: "rgb(128, 128, 128)" }} />
        <AllTimeXpUsed>RECEIVED MESSAGES</AllTimeXpUsed>
      </CoinsEarnedTab>
    );
  }

  function getSentButton() {
    if (isReceived) {
      return (
        <XpUsedTab onClick={() => setIsReceived(false)}>
          <Underline_0001 />
          <AllTimeXpUsed>SENT MESSAGES</AllTimeXpUsed>
        </XpUsedTab>
      );
    }
    return (
      <XpUsedTab onClick={() => setIsReceived(false)}>
        <Underline_0001 style={{ backgroundColor: "rgb(24, 120, 208)" }} />
        <AllTimeCoinsEarned>SENT MESSAGES</AllTimeCoinsEarned>
      </XpUsedTab>
    );
  }

  function generateTable() {
    let data = isReceived ? receivedMessages.data : sentMessages.data;
    return (
      <tbody>
        <tr>
          <th>Time Received</th>
          <th>{isReceived ? "Sender" : "Recipient"}</th>
          <th>Message</th>
          <th>{isReceived ? "Coins Gained" : "Coins Sent"}</th>
        </tr>
        {data.slice(0, 50).map((val, key) => {
          const date = new Date(val.timeSent._seconds * 1000);
          return (
            <tr key={key}>
              <td>
                {date.toLocaleDateString("en-US") +
                  " at " +
                  date.toLocaleTimeString("en-US")}
              </td>
              <td>@{isReceived ? val.sender : val.recipient}</td>
              <td>{val.messageBody}</td>
              <td>{val.numberOfCoins}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  return (
    <PageContents>
      <div className="bluebackground">
        <div className="whitebackground"></div>
      </div>
      <ContentBody>
        <MainHeader>Messages</MainHeader>
        <LeaderboardTabs>
          {getReceivedButton()}
          {getSentButton()}
          <ComposeMessageButton onClick={openModal}>
            Compose Message
          </ComposeMessageButton>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setReceivedMessages={setReceivedMessages}
            setSentMessages={setSentMessages}
          />
        </LeaderboardTabs>
        {(sentMessages && receivedMessages) ? generateTable() : <CircularProgress />}
      </ContentBody>
      <ProfileBar userData={userData} username={username} xp={xp} coins={coins}/>
    </PageContents>
  );
}

export default Messages;
