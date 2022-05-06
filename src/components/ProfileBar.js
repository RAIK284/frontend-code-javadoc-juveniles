import React, { useState } from "react";
import {
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
  Coins,
  CoinImage,
  CoinImage_0001,
  CoinBgImage_0001,
  CoinAmount_0001,
} from "../pages/PageElements";

export const ProfileBar = ({userData, username, xp, coins}) => {
  return (
    <StatBar>
      <ProfilePic>
        <ProfileImage>
          <ProfileImage_0001>
            <ProfileImage_0002
              src={
                userData.avatar ? "/Trophies/" + userData.avatar + ".png" : ""
              }
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
  );
}
