import React, { useState, useContext } from "react";
import "./Profile.css";
import "./AllPages.css";
import {
  PageContents,
  _000,
  GreyTrophyBox,
  ProfileSettingButton,
} from "./PageElements";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { TableBody, TableHead } from "@mui/material";
import { UserContext } from "../components/UserProvider";
import { ProfileModal } from "../components/Modal";
import { ProfileBar } from "../components/ProfileBar";

// Pulls the backend infromation that holds the different aspects of the profile.
function Profile() {
  const userInfo = useContext(UserContext);
  const { username, xp, coins, userData } = userInfo;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  /*This is the style and functionality of the home page. 
  The profile page is split into the left and right side with the componenet splitLeft on line 39. 
  The functionality is preforms with the function created above that deals with the backend endpoints
  */
  return (
    <>
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground">
            <div className="wrapperProfile">
              <div class="splitLeft">
                <div class="mainTitle">Profile</div>
                <div class="userNameText">@{username}</div>
                <img
                  className="photoSize"
                  src={
                    userData.avatar
                      ? "/Trophies/" + userData.avatar + ".png"
                      : ""
                  }
                />
                <div className="space" />
                <ProfileSettingButton onClick={openModal}>
                    <div className="profileText">
                    Profile Settings
                    </div>
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
        <ProfileBar
          userData={userData}
          username={username}
          xp={xp}
          coins={coins}
        />
      </PageContents>
    </>
  );
}

export default Profile;
