import {
  Underline,
  Underline_0001,
  AllTimeCoinsEarned,
  AllTimeXpUsed,
  SendMessageButton
} from "./PageElements";
import React from "react";

// Creates the button to switch to view the coin leaderboard
export function getCoinButton(isCoin) {
  // If isCoin is true, display the coins tab as blue
  if (isCoin) {
    return (
      <>
        <Underline />
        <AllTimeCoinsEarned>ALL-TIME COINS EARNED</AllTimeCoinsEarned>
      </>
    );
  }
  // Display the XP tab as gray, because coins tab is blue
  return (
    <>
      <Underline style={{ backgroundColor: "rgb(128, 128, 128)" }} />
      <AllTimeXpUsed>ALL-TIME COINS EARNED</AllTimeXpUsed>
    </>
  );
}

// Creates the button to switch to view the XP leaderboard
export function getXpButton(isCoin) {
  // If isCoin is true, make the all time xp used tab blue
  if (isCoin) {
    return (
      <>
        <Underline_0001 />
        <AllTimeXpUsed>ALL-TIME XP USED</AllTimeXpUsed>
      </>
    );
  }
  // Display the coin tab as gray, because XP tab is blue
  return (
    <>
      <Underline_0001 style={{ backgroundColor: "rgb(24, 120, 208)" }} />
      <AllTimeCoinsEarned>ALL-TIME XP USED</AllTimeCoinsEarned>
    </>
  );
}

// Creates the button to switch to the received leaderboard
export function getReceivedButton(isReceived) {
  // If isReceived is true, make received tab blue
  if (isReceived) {
    return (
      <>
        <Underline />
        <AllTimeCoinsEarned>RECEIVED MESSAGES</AllTimeCoinsEarned>
      </>
    );
  }
  // Make sent tab gray because received tab is in use
  return (
    <>
      <Underline style={{ backgroundColor: "rgb(128, 128, 128)" }} />
      <AllTimeXpUsed>RECEIVED MESSAGES</AllTimeXpUsed>
    </>
  );
}

// Creates the button to switch to the sent leaderboard
export function getSentButton(isReceived) {
  // If isReceived is false, make the tab gray
  if (isReceived) {
    return (
      <>
        <Underline_0001 />
        <AllTimeXpUsed>SENT MESSAGES</AllTimeXpUsed>
      </>
    );
  }
  // Make the sent tab blue because sent tab is in use
  return (
    <>
      <Underline_0001 style={{ backgroundColor: "rgb(24, 120, 208)" }} />
      <AllTimeCoinsEarned>SENT MESSAGES</AllTimeCoinsEarned>
    </>
  );
}

// Function that checks message for emojis, and for each emoji, updates the number of XP contained in the message
export function parseMessageForEmojis(message) {
  // Const to list each token with their values
  const tokens = [
    ["💯", 100],
    ["🍪", 20],
    ["😊", 3],
    ["🎁", 5],
    ["😎", 10],
  ];
  // Initialize xpInMessage at 0 before the message is checked
  let xpInMessage = 0;

  // For each token parsed, update the xpInMessage value
  tokens.forEach((element) => {
    if (message.includes(element[0])) {
      xpInMessage += element[1] * (message.split(element[0]).length - 1);
    }
  });
  return xpInMessage;
}

// Runs through the cost of items and determine if the user can purcahse and item or not
export function showCorrectButton(cost, name, coins, buyTrophy) {
  if (coins - cost >= 0) {
    return (
      <div className="blueBuyButton" onClick={() => buyTrophy(cost, name)}>
        <div className="buybuttonwords">{cost} coins</div>
      </div>
    );
  } else {
    return (
      <div className="ownedButton">
        <div className="ownbuttonwords">{cost} coins</div>
      </div>
    );
  }
}

// Function used to perform input validation for message
export function loadButton(message, successfulSend, setSuccessfulSend, helperText, setHelperText, handleSubmit, xp) {
  let xpInMessage = parseMessageForEmojis(message);
  // If the user does not have as much XP that is in the message, set successfulSend to false
  if (xp - xpInMessage < 0) {
    if (successfulSend) {
      setSuccessfulSend(false);
    }
    const text = "You do not have enough XP!";
    if (helperText != text) {
      setHelperText(text);
    }
  } else {
    // If user has enough XP to send message, allow the message to be sent
    if (!successfulSend) {
      setSuccessfulSend(true);
    }
    const text = "XP Used: " + xpInMessage;
    if (helperText != text) {
      setHelperText(text);
    }
  }
  // Close modal if successful send occurs
  if (successfulSend) {
    return (
      <SendMessageButton onClick={() => handleSubmit(xpInMessage)}>
        Send Message
      </SendMessageButton>
    );
  } else {
    // Change style of send message to gray if message is unable to be sent
    return (
      <SendMessageButton
        style={{
          backgroundColor: "#555555",
          border: "2px solid rgba(200, 200, 200, 0.5)",
          cursor: "default",
        }}
      >
        Send Message
      </SendMessageButton>
    );
  }
}
