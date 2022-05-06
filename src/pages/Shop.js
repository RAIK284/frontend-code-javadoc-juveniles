import React, { useState, useContext, useEffect } from "react";
import "./Shop.css";
import "./AllPages.css";
import {
  PageContents,
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
  MainHeader,
} from "./PageElements";
import award from "../Trophies/Toptrophy.png";
import { UserContext } from "../components/UserProvider";
import {
  CircularProgress,
  getFormControlLabelUtilityClasses,
} from "@mui/material";
import { ShopItemModal } from "../components/Modal";
import { ProfileBar } from "../components/ProfileBar";

function Shop() {
  const userInfo = useContext(UserContext);
  const { username, xp, coins, user, userData } = userInfo;
  const [trophyData, setTrophyData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = null;
      if (!trophyData) {
        console.log("Fetching Trophies...");
        response = await fetch(
          "https://us-central1-uplft-9ed97.cloudfunctions.net/app/getTrophies"
        );
        console.log(response);
        const json = await response.json();
        setTrophyData(json);
      }
    }
    fetchData();
  }, []);

  async function buyTrophy(cost, name) {
    if (coins < cost) {
      alert("You don't have enough coins!");
      return;
    }
    // call buy trophy endpoint
    const trophyBody = {
      name: name,
    }
    const trophyResponse = await fetch(
      "https://us-central1-uplft-9ed97.cloudfunctions.net/app/buyTrophy/" + username,
      {
        method: "POST",
        body: JSON.stringify(trophyBody),
        headers: { "Content-Type": "application/json"},
      }
    );
    const json = await trophyResponse.json();
    console.log(json);
    // subtract coins from user
    const body = {
      currentCoins: coins - cost,
    };
    const response = await fetch(
      `https://us-central1-uplft-9ed97.cloudfunctions.net/app/updateUser/${user.uid}`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response)
    window.location.reload(false);
  }

  function showCorrectButton(cost, name) {
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

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function displayTrophies() {
    let data = trophyData;
    return (
      <div className="wrapper">
        {data.map((val, key) => {
          return (
            <GreyTrophyBox>
              <div className="trophyName">{val.name}</div>
              <img className="photoSize" src={`/Trophies/${val.name}.png`} />
              <div className="center">{showCorrectButton(val.cost, val.name)}</div>
            </GreyTrophyBox>
          );
        })}
        <div className="topRight">
          <img className="bestItem" src={award} onClick={openModal} />
        </div>
      </div>
    );
  }

  function loading() {
    return <CircularProgress />;
  }

  return (
    <>
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground"></div>
        </div>
        <ContentBody>
          <MainHeader>Shop</MainHeader>
          {trophyData ? displayTrophies() : loading()}
        </ContentBody>
        <ShopItemModal showModal ={showModal} setShowModal={setShowModal} trophyName={"Basketball"} />
        <ProfileBar userData={userData} username={username} xp={xp} coins={coins}/>
      </PageContents>
    </>
  );
}

export default Shop;
