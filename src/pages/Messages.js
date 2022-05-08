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
} from "./PageElements";
import { getSentButton, getReceivedButton } from "./Logic";
import { CircularProgress } from "@mui/material";
import { Modal } from "../components/Modal";
import { UserContext } from "../components/UserProvider";
import { ProfileBar } from "../components/ProfileBar";

// Creates messages page and grabs all data that goes into it
function Messages() {
  // Initializes useStates for sentMessages, receivedMessages, and isReceived
  const [sentMessages, setSentMessages] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState(null);
  const [isReceived, setIsReceived] = useState(true);

  // Grabs userInfo from the backend
  const userInfo = useContext(UserContext);

  // Sets username, xp, coins, and userData from userInfo
  const { username, xp, coins, userData } = userInfo;

  // Sets the useState for modal to false, that way the modal doesn't pop up right away
  const [showModal, setShowModal] = useState(false);

  // React hook used to grab data for both received and sent messages
  useEffect(() => {
    async function fetchData() {
      let response = null;
      // If received messages is not fetched yet, grabs received messages from backend
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
      // If sent messages is not fetched yet, grabs sent messages from backend
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

  // If compose message modal is not open, open this modal
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // Generates the table to display either sent or received messages
  function generateTable() {
    // Set data to be either received or sent messages depending on isReceived
    let data = isReceived ? receivedMessages.data : sentMessages.data;

    // Returns the table for either sent or received messages
    return (
      <tbody>
        <tr>
          <th>Time Received</th>
          <th>{isReceived ? "Sender" : "Recipient"}</th>
          <th>Message</th>
          <th>{isReceived ? "Coins Gained" : "Coins Sent"}</th>
        </tr>
        {
          // Grabs the first 50 messages, and display them with the time, sender/receipient, message, and value
          data.slice(0, 50).map((val, key) => {
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
          })
        }
      </tbody>
    );
  }

  // Returns the entire messages page, including table, buttons, and compose message button (and modal)
  return (
    <PageContents>
      <div className="bluebackground">
        <div className="whitebackground"></div>
      </div>
      <ContentBody>
        <MainHeader>Messages</MainHeader>
        <LeaderboardTabs>
          <CoinsEarnedTab onClick={() => setIsReceived(true)}>
            {getReceivedButton(isReceived)}
          </CoinsEarnedTab>
          <XpUsedTab onClick={() => setIsReceived(false)}>
            {getSentButton(isReceived)}
          </XpUsedTab>
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
        {sentMessages && receivedMessages ? (
          generateTable()
        ) : (
          <CircularProgress />
        )}
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

export default Messages;
