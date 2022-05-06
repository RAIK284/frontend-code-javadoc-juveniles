import React, { useState, useContext } from "react";
import "./Profile.css";
import "./AllPages.css";
import {
  PageContents,
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
} from "./PageElements";
import { useUserState } from "./Home";
import { useBetween } from "use-between";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { TableBody, TableHead } from "@mui/material";
import { UserContext } from "../components/UserProvider";
import { ProfileModal } from "../components/Modal";
import { ProfileBar } from "../components/ProfileBar";

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
        <ProfileBar userData={userData} username={username} xp={xp} coins={coins}/>
      </PageContents>
    </>
  );
}

export default Profile;
