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
} from "./PageElements";
import { CircularProgress } from "@mui/material";
import { Modal } from "../components/Modal";
import { UserContext } from "../components/UserProvider";
import { useUserState } from "./Home";
import { useBetween } from "use-between";

const username = "maxrad02";

function Messages() {
  const [sentMessages, setSentMessages] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState(null);
  const [isReceived, setIsReceived] = useState(true);

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
  }, [isReceived, setShowModal]);

  const useSharedUserState = useBetween(useUserState);
  const { username, xp, coins } = useSharedUserState;

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
        {data.slice(0, 10).map((val, key) => {
          return (
            <tr key={key}>
              <td>time</td>
              <td>{isReceived ? val.sender : val.recipient}</td>
              <td>{val.messageBody}</td>
              <td>{val.numberOfCoins}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  if (sentMessages && receivedMessages) {
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
            <Modal showModal={showModal} setShowModal={setShowModal} />
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
          <MainHeader>Messages</MainHeader>
          <LeaderboardTabs>
            {getReceivedButton()}
            {getSentButton()}
            <ComposeMessageButton onClick={openModal}>
              Compose Message
            </ComposeMessageButton>
            <Modal showModal={showModal} setShowModal={setShowModal} />
          </LeaderboardTabs>
          <CircularProgress />
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
  }
}

export default Messages;
