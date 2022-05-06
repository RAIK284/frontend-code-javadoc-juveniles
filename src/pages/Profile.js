import React, { useState, useContext } from "react";
import "./Profile.css";
import "./AllPages.css";
import {
  PageContents,
  WelcomeText,
  ContentBody,
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
  _000,
  GreyTrophyBox,
  Coins,
  CoinImage,
  CoinImage_0001,
  CoinBgImage_0001,
  CoinAmount_0001,
  ProfileSettingButton,
  ComposeMessageButton,
} from "./PageElements";
import watermelon from "../Trophies/Watermelon.png";
import { useUserState } from "./Home";
import { useBetween } from "use-between";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { TableBody, TableHead } from "@mui/material";
import { UserContext } from "../components/UserProvider";
import { ProfileModal } from "../components/Modal";

function Profile() {
  const userInfo = useContext(UserContext);
  const { username, xp, coins, userData } = userInfo;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground">
            <div className="wrapperProfile">
              <div class="splitLeft">
                <div class="mainTitle">Profile</div>
                <div class="userNameText">@{username}</div>
                <img className="photoSize" src={userData.avatar ? "/Trophies/" + userData.avatar + ".png" : ""} />
                <div className="space" />
                <ProfileSettingButton onClick={openModal}>
                  Profile Settings
                </ProfileSettingButton>
                <div className="space" />
                <button
                  className="logoutButton"
                  onClick={() => {
                    auth.signOut();
                    navigate("/");
                  }}
                >
                  <div className="logoutText">Log Out</div>
                </button>
                <></>
              </div>
              <div class="splitRight">
                <div class="wrapperRight">
                  <div class="userNameText">Your Trophies</div>
                  <div className="shopBox">
                    <div className="trophyWrapper">
                      {userData.trophies.map((val, key) => {
                        return (
                          <GreyTrophyBox>
                            <div className="trophyName">{val}</div>
                            <img
                              className="photoSize"
                              src={`/Trophies/${val}.png`}
                            />
                          </GreyTrophyBox>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space" />
                  <div class="userNameText">
                    Your Stats
                    <table>
                      <TableHead>
                        <tr>
                          <td>All-Time XP Used</td>
                          <td>All-Time Coins Received</td>
                        </tr>
                      </TableHead>
                      <TableBody>
                        <tr>
                          <td>{userData.xpUsed}</td>
                          <td>{userData.totalCoins}</td>
                        </tr>
                      </TableBody>
                    </table>
                    <ProfileModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      pointsPublic={userData.pointsPublic}
                      uid={userData.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatBar>
          <ProfilePic>
            <ProfileImage>
              <ProfileImage_0001>
                <ProfileImage_0002
                  src={"/Trophies/" + userData.avatar + ".png"}
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
                  alt="image of XPcoin"
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
    </>
  );
}

export default Profile;
