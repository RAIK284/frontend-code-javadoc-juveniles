import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";
import { UserContext } from "./UserProvider";

import graphic from "./LoginXP.png";
import {
  TextField,
  Checkbox,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import basketball from "../Trophies/Basketball.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(24, 50, 86, 0.7);
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 560px;
  background: white;
  border-radius: 6px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  line-height: 1.8;
  color: #555555;
`;

const Spacer = styled.span`
  width: 50px;
  height: 24px;
  background: white;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  top: 10px;
  left: 610px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

const SendMessageButton = styled.button`
  color: white;
  position: relative;
  width: 225px;
  height: 36px;
  left: 200px;
  background: #2295ff;
  border: 2px solid rgba(34, 149, 255, 0.5);
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`;

// Profile modal
const ApplySettingsButton = styled.button`
  color: white;
  position: relative;
  width: 225px;
  height: 36px;
  left: 200px;
  background: #2295ff;
  border: 2px solid rgba(34, 149, 255, 0.5);
  box-sizing: border-box;
  border-radius: 6px;
`;

// Log in modal
const LogInWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 485px;
  background: white;
  border-radius: 6px;
`;

const PhotoSize = styled.div`
  background-image: url(${graphic});
  left: 100px;
  position: relative;
  height: 220px;
  width: 450px;
`;

const SwitchWrapper = styled.div `
    displau: flex;
    align-items: center;
    width: 650px;
`

const ProfileWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 261px;
  background: white;
  border-radius: 6px;
`;
const TrophyPhoto = styled.div`
  background-image: url(${basketball});
  left: 100px;
  position: relative;
  height: 220px;
  width: 450px;
`;

// Shop item modal

const BasketballImage = styled.div`
  background-image: url(${basketball});
  left: 160px;
  position: relative;
  height: 280px;
  width: 280px;
`;

const tokens = [
  ["💯", 100],
  ["🍪", 20],
  ["😊", 3],
  ["🎁", 5],
  ["😎", 10],
];

export const Modal = ({
  showModal,
  setShowModal,
  setSentMessages,
  setReceivedMessages,
}) => {
  const [successfulSend, setSuccessfulSend] = useState(true);
  const [successfulRecipient, setSuccessfulRecipient] = useState(true);
  const [helperText, setHelperText] = useState("XP Used: 0");
  const [helperRecipientText, setHelperRecipientText] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const userInfo = useContext(UserContext);
  const { username, xp, coins, user, userData } = userInfo;

  function parseMessageForEmojis(message) {
    let xpInMessage = 0;
    console.log(message);
    tokens.forEach((element) => {
      console.log(element);
      if (message.includes(element[0])) {
        xpInMessage += element[1] * (message.split(element[0]).length - 1);
      }
    });
    console.log(xpInMessage);
    return xpInMessage;
  }

  async function handleSubmit(xpInMessage) {
    console.log(user);
    setHelperRecipientText("");
    setSuccessfulRecipient(true);
    console.log("Attempting to Send Message Received Messages...");
    const body = {
      messageBody: message,
      recipientName: recipient,
      sender: username,
      numberOfCoins: xpInMessage,
    };
    const response = await fetch(
      "https://us-central1-uplft-9ed97.cloudfunctions.net/app/addMessage",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await response.json();
    console.log(json);

    if (response.status == 200) {
      if (xpInMessage != 0) {
        const senderBody = {
          currentXp: xp - xpInMessage,
          xpUsed: userData.xpUsed + xpInMessage,
        };
        console.log(user);
        await fetch(
          `https://us-central1-uplft-9ed97.cloudfunctions.net/app/updateUser/${user.uid}`,
          {
            method: "post",
            body: JSON.stringify(senderBody),
            headers: { "Content-Type": "application/json" },
          }
        );
        const recipientDataResponse = await fetch(
          `https://us-central1-uplft-9ed97.cloudfunctions.net/app/getUserByUsername/${recipient}`
        );
        const recipientData = await recipientDataResponse.json();
        const recipientBody = {
          currentCoins: recipientData.currentCoins + xpInMessage,
          totalCoins: recipientData.totalCoins + xpInMessage,
        };
        await fetch(
          `https://us-central1-uplft-9ed97.cloudfunctions.net/app/updateUser/${recipientData.id}`,
          {
            method: "post",
            body: JSON.stringify(recipientBody),
            headers: { "Content-Type": "application/json" },
          }
        );
        window.location.reload(false);
      }
      setShowModal((prev) => !prev);
      setSentMessages(null);
      setReceivedMessages(null);
    } else if (response.status == 404) {
      setHelperRecipientText("Invalid User");
      setSuccessfulRecipient(false);
    } else {
      setHelperText("Unknown Error, please try again");
      setSuccessfulSend(false);
    }
    return 1;
  }

  function loadButton() {
    let xpInMessage = parseMessageForEmojis(message);
    if (xp - xpInMessage < 0) {
      if (successfulSend) {
        setSuccessfulSend(false);
      }
      const text = "You do not have enough XP!";
      if (helperText != text) {
        setHelperText(text);
      }
    } else {
      if (!successfulSend) {
        setSuccessfulSend(true);
      }
      const text = "XP Used: " + xpInMessage;
      if (helperText != text) {
        setHelperText(text);
      }
    }
    if (successfulSend) {
      return (
        <SendMessageButton onClick={() => handleSubmit(xpInMessage)}>
          Send Message
        </SendMessageButton>
      );
    } else {
      return (
        <SendMessageButton
          style={{
            backgroundColor: "#555555",
            border: "2px solid rgba(200, 200, 200, 0.5)",
          }}
        >
          Send Message
        </SendMessageButton>
      );
    }
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleRecipientChange(event) {
    setRecipient(event.target.value);
  }

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
              <h1>Compose Message</h1>
              <Spacer />
              <TextField
                id="username"
                variant="filled"
                label="Recipient username"
                value={recipient}
                onChange={handleRecipientChange}
                helperText={helperRecipientText}
                error={!successfulRecipient}
              />
              <Spacer />

              <p>
                Remember, emojis cost XP and can be used to sent coins to other
                users. Type any of the below emojis into your message to send
                coins to other users! Copy the emojis from below!
              </p>
              <Spacer />
              <p>😊: 3 XP 🎁: 5 XP 😎: 10 XP 🍪: 20 XP 💯: 100 XP</p>
              <Spacer />
              <TextField
                id="message"
                variant="filled"
                label="Message"
                multiline
                rows={5}
                value={message}
                onChange={handleMessageChange}
                helperText={helperText}
                error={!successfulSend}
              />
              {loadButton()}
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export const ProfileModal = ({ showModal, setShowModal, pointsPublic, uid }) => {
  const [checked, setChecked] = React.useState(pointsPublic);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = async () => {
    const body = {
      pointsPublic: checked,
    };
    const response = await fetch(
      `https://us-central1-uplft-9ed97.cloudfunctions.net/app/updateUser/${uid}`,
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await response.json();
    console.log(JSON.stringify(body));
    console.log("checked: " + checked);
    setShowModal((prev) => !prev);
  }


  return (
    <>
      {showModal ? (
        <Background>
          <ProfileWrapper showModal={showModal}>
            <ModalContent>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
              <h1>Profile Settings</h1>
              <Spacer />

              <SwitchWrapper>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      color="primary"
                      size="medium"
                      edge="false"
                      onChange={handleChange}
                    />
                  }
                  label="Make my trophies and profile stats visible to others"
                  labelPlacement="start"
                />
              </SwitchWrapper>

              <Spacer />

              <ApplySettingsButton
                onClick={() => handleSubmit()}
              >
                Apply Settings
              </ApplySettingsButton>
            </ModalContent>
          </ProfileWrapper>
        </Background>
      ) : null}
    </>
  );
};

export const LogInModal = ({ showModal, setShowModal }) => {
  const [checked, setChecked] = React.useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {showModal ? (
        <Background>
          <LogInWrapper showModal={showModal}>
            <ModalContent>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
              <h1>Log In Bonus</h1>
              <Spacer />
              <p>Thanks for logging in. You earned 50 XP!</p>
              <Spacer />
              <PhotoSize />
              <Spacer />
              <p>
                Don't forget to use your XP to send positive messages to
                friends. The world could use some positivity right now!
              </p>
            </ModalContent>
          </LogInWrapper>
        </Background>
      ) : null}
    </>
  );
};

export const ShopItemModal = ({ showModal, setShowModal }) => {
  const [checked, setChecked] = React.useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {showModal ? (
        <Background>
          <LogInWrapper showModal={showModal}>
            <ModalContent>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
              <h1>Popular Item</h1>
              <Spacer />
              <p>The Basketball is Uplft's most popular shop item!</p>
              <Spacer />
              <BasketballImage />
              <Spacer />
            </ModalContent>
          </LogInWrapper>
        </Background>
      ) : null}
    </>
  );
};
