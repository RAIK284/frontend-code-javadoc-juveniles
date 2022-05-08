import React, { useState, useContext, useEffect } from "react";
import "./Shop.css";
import "./AllPages.css";
import {
  PageContents,
  ContentBody,
  _000,
  GreyTrophyBox,
  MainHeader,
} from "./PageElements";
import { showCorrectButton } from "./Logic"
import { UserContext } from "../components/UserProvider";
import { CircularProgress } from "@mui/material";
import { ShopItemModal } from "../components/Modal";
import { ProfileBar } from "../components/ProfileBar";

function Shop() {
  const userInfo = useContext(UserContext);
  const { username, xp, coins, user, userData } = userInfo;
  const [trophyData, setTrophyData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Pulls the trophy data from the backend including the image url, image name, and cost of the trophy
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

  // A catch all for not buying a trophy if you don't have enough coinsF
  async function buyTrophy(cost, name) {
    if (coins < cost) {
      alert("You don't have enough coins!");
      return;
    }

    // calls buy trophy endpoint to sync the front end to the backend
    const trophyBody = {
      name: name,
    };
    const trophyResponse = await fetch(
      "https://us-central1-uplft-9ed97.cloudfunctions.net/app/buyTrophy/" +
        username,
      {
        method: "POST",
        body: JSON.stringify(trophyBody),
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await trophyResponse.json();
    console.log(json);

    // Calculates and handles the backend proccess of buying and item by subtracting coins from user
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
    console.log(response);
    window.location.reload(false);
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // Function to display each trophy while pulling data from the backend such as the cost and the picture of the item
  function displayTrophies() {
    let data = trophyData;
    return (
      <div className="wrapper">
        {data.map((val, key) => {
          return (
            <GreyTrophyBox>
              <div className="trophyName">{val.name}</div>
              <img className="photoSize" src={`/Trophies/${val.name}.png`} />
              <div className="center">
                {showCorrectButton(val.cost, val.name, coins, buyTrophy)}
              </div>
            </GreyTrophyBox>
          );
        })}
        <div className="topRight">
          <img className="bestItem" src={"/Trophies/Toptrophy.png"} onClick={openModal} />
        </div>
      </div>
    );
  }

  return (
    <>
      <PageContents>
        <div className="bluebackground">
          <div className="whitebackground"></div>
        </div>
        <ContentBody>
          <MainHeader>Shop</MainHeader>
          {trophyData ? displayTrophies() : <CircularProgress />}
        </ContentBody>
        <ShopItemModal showModal ={showModal} setShowModal={setShowModal} trophyName={trophyData ? trophyData[0].name: ""} />
        <ProfileBar userData={userData} username={username} xp={xp} coins={coins}/>
      </PageContents>
    </>
  );
}

export default Shop;
