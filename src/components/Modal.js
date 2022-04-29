import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";
import { useUserState } from "../pages/Home.js";
import { useBetween } from "use-between";
import {
  TextField,
  Checkbox,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(24, 50, 86, 0.7);
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  // align-items: center;
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

const SwitchWrapper = styled.div`
  displau: flex;
  align-items: center;
  width: 650px;
`;

const ProfileWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 261px;
  background: white;
  border-radius: 6px;
`;

const tokens = [["💯", 100], ["🍪", 20]];

export const Modal = ({ showModal, setShowModal }) => {
  const [successfulSend ,setSuccessfulSend] = useState(true);
  const [successfulRecipient ,setSuccessfulRecipient] = useState(true);
  const [helperText, setHelperText] = useState("XP Used: 0");
  const [helperRecipientText, setHelperRecipientText] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const useSharedUserState = useBetween(useUserState);
  const { username, xp, coins } = useSharedUserState;

  function parseMessageForEmojis(message) {
    let xpInMessage = 0;
    console.log(message)
    tokens.forEach((element) => {
      console.log(element)
      if (message.includes(element[0])) {
        xpInMessage += element[1] * (message.split(element[0]).length - 1)
      }
    });
    console.log(xpInMessage)
    return xpInMessage;
  }

  async function handleSubmit() {
    setHelperRecipientText("")
    setSuccessfulRecipient(true)
    console.log("Attempting to Send Message Received Messages...");
    const body = {messageBody: message, recipientName: recipient, sender: username, numberOfCoins: 5}
    const response = await fetch(
      "https://us-central1-uplft-9ed97.cloudfunctions.net/app/addMessage", {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
      });
    const json = await response.json();
    console.log(json);

    if(response.status == 200){
        setShowModal((prev) => !prev)
    }else if (response.status == 404){
        setHelperRecipientText("Invalid User")
        setSuccessfulRecipient(false)
    }
    return 1;
  }

  function loadButton() {
    let xpInMessage = parseMessageForEmojis(message)
    if(xp - xpInMessage < 0){
        if (successfulSend){setSuccessfulSend(false)}
        const text = "You do not have enough XP!";
        if (helperText != text) {setHelperText(text)}
    } else {
        if (!successfulSend){setSuccessfulSend(true)}
        const text = "XP Used: " + xpInMessage;
        if (helperText != text) {setHelperText(text)}
    }
    if (successfulSend) {
      return (
        <SendMessageButton onClick={handleSubmit}>
          Send Message
        </SendMessageButton>
      );
    } else {
      return (
        <SendMessageButton
          style={{ backgroundColor: "#555555" }}
        >
          Send Message
        </SendMessageButton>
      );
    }
  }

  function handleMessageChange(event){
      setMessage(event.target.value)
  }

  function handleRecipientChange(event){
    setRecipient(event.target.value)
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
                coins to other users!
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

export const ProfileModal = ({ showModal, setShowModal }) => {
  const [checked, setChecked] = React.useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
                onClick={() => setShowModal((prev) => !prev)}
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
