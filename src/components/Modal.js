import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";
import { UserContext } from "./UserProvider";
import { loadButton } from "../pages/Logic";
import graphic from "./LoginXP.png";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

// Displays background of modal, in order to gray out the background
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

// Displays the white background of the modal
const ModalWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 560px;
  background: white;
  border-radius: 6px;
`;

// Wrapper to contain the modal contents, so that padding and layout is correct
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

// Spacer to go between text/images/buttons in the modal
const Spacer = styled.span`
  width: 50px;
  height: 24px;
  background: white;
`;

// Icon for the close button to be placed in top right of modal
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  top: 10px;
  left: 610px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

// Button for apply settings in profile settings modal
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

// White background for the log-in bonus modal
const LogInWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 485px;
  background: white;
  border-radius: 6px;
`;

// Styling for the XP photos in the log-in modal
const PhotoSize = styled.div`
  background-image: url(${graphic});
  left: 100px;
  position: relative;
  height: 220px;
  width: 450px;
`;

// Cointain the switch in the profile modal to switch settings
const SwitchWrapper = styled.div`
  displau: flex;
  align-items: center;
  width: 650px;
`;

// White background for the profile settings modal
const ProfileWrapper = styled.div`
  position: relative;
  top: 120px;
  width: 678px;
  height: 310px;
  background: white;
  border-radius: 6px;
`;

// Styling for the trophy image for most popular shop item modal
const BasketballImage = styled.div`
  background-repeat: no-repeat;
  left: 160px;
  position: relative;
  top: -120px;
  height: 280px;
  width: 280px;
`;

// Holds all data and the component for send message modal
export const Modal = ({
  showModal,
  setShowModal,
  setSentMessages,
  setReceivedMessages,
}) => {
  // Initializes use states for successful send, successful recipient, helper text
  // helperRecipientText, message, and recipient
  const [successfulSend, setSuccessfulSend] = useState(true);
  const [successfulRecipient, setSuccessfulRecipient] = useState(true);
  const [helperText, setHelperText] = useState("XP Used: 0");
  const [helperRecipientText, setHelperRecipientText] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  // Grabs userInfo from the backend
  const userInfo = useContext(UserContext);

  // Sets username, xp, coins, and userData from userInfo
  const { username, xp, coins, user, userData } = userInfo;

  // Function that handles the sending of a message
  async function handleSubmit(xpInMessage) {
    console.log(user);
    setHelperRecipientText("");
    setSuccessfulRecipient(true);
    console.log("Attempting to Send Message Received Messages...");

    // Creates message body using message data
    const body = {
      messageBody: message,
      recipientName: recipient,
      sender: username,
      numberOfCoins: xpInMessage,
    };

    // Request that posts message to the backend
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

    // If message sends correctly, update the sender's xp and the recipient's coins
    if (response.status == 200) {
      if (xpInMessage != 0) {
        const senderBody = {
          currentXp: xp - xpInMessage,
          xpUsed: userData.xpUsed + xpInMessage,
        };
        console.log(user);
        // Updates sender's XP in backend
        await fetch(
          `https://us-central1-uplft-9ed97.cloudfunctions.net/app/updateUser/${user.uid}`,
          {
            method: "post",
            body: JSON.stringify(senderBody),
            headers: { "Content-Type": "application/json" },
          }
        );
        // Updates recipient's coins in backend
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
      // Closes the modal when message is sent
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

  // Function to handle setting the message value
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  // Funtion to handle setting the recipient value
  function handleRecipientChange(event) {
    setRecipient(event.target.value);
  }

  // Return the sendMessage modal component
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
              {loadButton(message, successfulSend, setSuccessfulSend, helperText, setHelperText, handleSubmit, xp)}
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

// Holds all data and the component for the profile settings modal
export const ProfileModal = ({
  showModal,
  setShowModal,
  pointsPublic,
  uid,
}) => {
  // Grabs userInfo from backend
  const userInfo = useContext(UserContext);
  // Sets userData to be this fetched userInfo data
  const { userData } = userInfo;

  // Initializes useStates for checked and avatarSet
  const [checked, setChecked] = React.useState(pointsPublic);
  const [avatarSet, setAvatarSet] = React.useState(userData.avatar);

  // Function to handle setting a new item to be checked as avatar
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Function to handle changes in avatarset
  const handleAvatarChange = (event) => {
    setAvatarSet(event.target.value);
  };

  // Function to handle submitting changes in profile
  const handleSubmit = async () => {
    const body = {
      pointsPublic: checked,
      avatar: avatarSet,
    };
    // If user submits, update user information in the backend (privacy and avatar)
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
    window.location.reload(false);
  };

  // Ensures that only one of each trophy is an option for the user's avatar
  function onlyUniqueItems(value, index, self) {
    return self.indexOf(value) === index;
  }

  // Returns the profile modal to be displayed in the profile page
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
              <SwitchWrapper>
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 120, left: "8px" }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Change Avatar
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={avatarSet}
                    onChange={handleAvatarChange}
                    label="Age"
                  >
                    <MenuItem value="Watermelon">Watermelon</MenuItem>
                    {userData.trophies
                      .filter(onlyUniqueItems)
                      .map((val, key) => {
                        return <MenuItem value={val}>{val}</MenuItem>;
                      })}
                  </Select>
                </FormControl>
              </SwitchWrapper>
              <Spacer />
              <ApplySettingsButton onClick={() => handleSubmit()}>
                Apply Settings
              </ApplySettingsButton>
            </ModalContent>
          </ProfileWrapper>
        </Background>
      ) : null}
    </>
  );
};

// Holds all data and the component for the log-in bonus modal
export const LogInModal = ({ showModal, setShowModal }) => {
  // Initializes useStaes for the modal
  const [checked, setChecked] = React.useState();
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Retuns the log-in bonus modal to be displayed in the home page
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

// Holds all data and the component for the shop item mdoal modal
export const ShopItemModal = ({ showModal, setShowModal, trophyName }) => {
  // Initializes useState for displaying the recent purchasers
  const [recentPurchasers, setRecentPurchasers] = React.useState(["loading"]);

  // Fetches data from the backend fo the recently purchasers of a trophy
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://us-central1-uplft-9ed97.cloudfunctions.net/app/getRecentPurchasers/${trophyName}`
      );
      const data = await response.json();
      setRecentPurchasers(data);
    }
    fetchData();
  }, [showModal]);

  // Returns the modal to be displayed in the shop page.
  return (
    <>
      {showModal ? (
        <Background>
          <LogInWrapper showModal={showModal}>
            <ModalContent>
              <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
              <h1>Popular Item</h1>
              <Spacer />
              <p>The {trophyName} is Uplft's most popular shop item!</p>
              <p>
                <br />
                <strong>Recent Purchasers:</strong>
                <br />
                {recentPurchasers.map((person) => (
                  <p>{person}</p>
                ))}
              </p>
              <BasketballImage
                style={{
                  backgroundImage: "url(/Trophies/" + trophyName + ".png)",
                }}
              />
            </ModalContent>
          </LogInWrapper>
        </Background>
      ) : null}
    </>
  );
};
