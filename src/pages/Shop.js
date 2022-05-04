import React, {useState, useContext} from 'react';
import "./Shop.css";
import "./AllPages.css";
import { PageContents, WelcomeText, ContentBody,
  StatBar, ProfilePic, ProfileImage, ProfileImage_0001, ProfileImage_0002, Username, Xp, XpImage, XpImage_0001, 
  XpBigImage, _000, GreyTrophyBox, Coins, CoinImage, CoinImage_0001, CoinBgImage_0001, CoinAmount_0001, MainHeader } from './PageElements';
import duck from '../Trophies/Duck.png'
import basketball from '../Trophies/Basketball.png'
import waterbottle from '../Trophies/waterbottle.png'
import watermelon from '../Trophies/watermelon.png'
import book from '../Trophies/book.png'
import paint from '../Trophies/paint.png'
import golfing from '../Trophies/golfing.png'
import sun from '../Trophies/sun.png'
import award from '../Trophies/toptrophy.png'
import { useUserState } from './Home';
import { useBetween } from 'use-between';
import { UserContext } from '../components/UserProvider';
import { ShopItemModal } from '../components/Modal';


function Shop() {

  const userInfo = useContext(UserContext);
  const { username, xp, coins } = userInfo;

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  function buyTrophy(trophy) {
    // Check if user has enough coins to buy button
    // If so, run below lines
    var x = document.getElementById(trophy);
    x.style.display = "none";
    // Also change amount of coins user has (decrease by 30)
    // Also add trophy to user's trophies
  }

  return (
    <>
      <PageContents>

          <div className='bluebackground'>
            <div className='whitebackground'>
            </div>
          </div>
          <ContentBody>
            <MainHeader>
              Shop
            </MainHeader>
            <div class="wrapper">
            <GreyTrophyBox>
              <div class="trophyName">
                Basketball
              </div>
              <img className="photoSize" src={basketball}/>
              <div className="topRight">
                <img className="bestItem" src={award} onClick={openModal}/>
              </div>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "basketball" onClick={() => buyTrophy("basketball")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Duck
              </div>
              <img className="photoSize" src={duck}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "duck" onClick={() => buyTrophy("duck")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Water Bottle
              </div>
              <img className="photoSize" src={waterbottle}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "waterbottle" onClick={() => buyTrophy("waterbottle")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Watermelon
              </div>
              <img className="photoSize" src={watermelon}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "watermelon" onClick={() => buyTrophy("watermelon")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Book
              </div>
              <img className="photoSize" src={book}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "book" onClick={() => buyTrophy("book")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Paint
              </div>
              <img className="photoSize" src={paint}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "paint" onClick={() => buyTrophy("paint")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Golfin' Gary
              </div>
              <img className="photoSize" src={golfing}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "golfingary" onClick={() => buyTrophy("golfingary")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <GreyTrophyBox>
              <div class="trophyName">
                Sun
              </div>
              <img className="photoSize" src={sun}/>
              <div class="center">
                <div class="ownedButton">
                <div class="ownbuttonwords">
                    Owned
                  </div>
                </div>
                <div class="blueBuyButton" id = "sun" onClick={() => buyTrophy("sun")}>
                <div class="buybuttonwords">
                    30 coins
                  </div>
                </div>
              </div>
            </GreyTrophyBox>
            <ShopItemModal showModal ={showModal} setShowModal={setShowModal} />

            </div>
          </ContentBody>

      
      
      <StatBar>
          <ProfilePic>
            <ProfileImage>
              <ProfileImage_0001>
                <ProfileImage_0002 src="https://www.biography.com/.image/t_share/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg" alt="image of ProfileImage"/>
              </ProfileImage_0001>
            </ProfileImage>
          <Username>
              @{username}
            </Username>
          </ProfilePic>
        <Xp>
            <XpImage>
              <XpImage_0001>
                <XpBigImage src="https://image.shutterstock.com/image-vector/vector-icon-gold-achievement-xp-260nw-1151064896.jpg" alt="image of XPcoin"/>
              </XpImage_0001>
            </XpImage>
          <_000>
              {xp}
            </_000>
          </Xp>
        <Coins>
            <CoinImage>
              <CoinImage_0001>
                <CoinBgImage_0001 src="https://image.shutterstock.com/image-vector/vector-money-icon-gold-coin-260nw-1138554755.jpg" alt="image of CoinBgImage"/>
              </CoinImage_0001>
            </CoinImage>
          <CoinAmount_0001>
              {coins}
            </CoinAmount_0001>
          </Coins>
        </StatBar>
      </PageContents>  
    </>
    
  );
}

export default Shop;