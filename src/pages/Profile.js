import React from 'react';
import "./Profile.css";
import "./AllPages.css";
import { PageContents, WelcomeText, ContentBody,
  StatBar, ProfilePic, ProfileImage, ProfileImage_0001, ProfileImage_0002, Username, Xp, XpImage, XpImage_0001, 
  XpBigImage, _000, GreyTrophyBox, Coins, CoinImage, CoinImage_0001, CoinBgImage_0001, CoinAmount_0001, MainHeader } from './PageElements';
import watermelon from '../Trophies/watermelon.png'
  function Profile() {
  return (
    <>
      <PageContents>
          <div className='bluebackground'>
            <div className='whitebackground'>
              <div className='wrapperProfile'>
              <div class="splitLeft">
                <div class='mainTitle'>
                  Profile
                </div>
                <div class="userNameText">
                  @username
                </div>
                <img className="photoSize" src={watermelon}/>
                <div className='space'/>
                <button className="profileSettingButton" >
                  <div className="profileText">
                    Profile Settings
                  </div>
                </button>
                <div className='space'/>
                <button className="logoutButton" >
                  <div className="logoutText">
                    Log Out
                  </div>
                </button>
              <>
              </>
              </div>

              <div class="splitRight">
                <div class="wrapperRight">
                  <div class="userNameText">
                   Your Trophies
                  </div>
                    <div className='shopBox'>
                    </div>
                  <div className='space'/>
                  <div class="userNameText">
                    Your Stats
                    <table>
                      <tr>
                        <th>All-Time XP Used</th>
                        <th>All-Time Coins Sent</th>
                        
                      </tr>
                      <tr>
                        <th>All-Time Coins Received</th>
                        <th>All-Time Messages Sent</th>                        
                      </tr>
                    </table>
                  
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
                <ProfileImage_0002 src="https://www.biography.com/.image/t_share/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg" alt="image of ProfileImage"/>
              </ProfileImage_0001>
            </ProfileImage>
          <Username>
              @username
            </Username>
          </ProfilePic>
        <Xp>
            <XpImage>
              <XpImage_0001>
                <XpBigImage src="https://image.shutterstock.com/image-vector/vector-icon-gold-achievement-xp-260nw-1151064896.jpg" alt="image of XPcoin"/>
              </XpImage_0001>
            </XpImage>
          <_000>
              000
            </_000>
          </Xp>
        <Coins>
            <CoinImage>
              <CoinImage_0001>
                <CoinBgImage_0001 src="https://image.shutterstock.com/image-vector/vector-money-icon-gold-coin-260nw-1138554755.jpg" alt="image of CoinBgImage"/>
              </CoinImage_0001>
            </CoinImage>
          <CoinAmount_0001>
              000
            </CoinAmount_0001>
          </Coins>
        </StatBar>
      </PageContents>  
    </>
  );
}

export default Profile;