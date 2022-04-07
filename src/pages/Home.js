import React from 'react';
import { PageContents, RootWrapperHome, WelcomeText, Trophies, YourTrophies, TrophyBox, MessagesTable, TableHeader,
    SenderBox, TimeBox, SenderText, TimeText, SubjectBox, MessageBox, SubjectText, MessageText,
    CoinsGainedBox, CoinsGainedText, MessageRow, SenderBox_0001, TimeBox_0001, SenderText_0001, TimeText_0001,
    SubjectBox_0001, MessageBox_0001, MessageText_0001, SubjectText_0001, CoinBox, CoinAmount,
    CoinIcon, CoinIcon_0001, CoinBgImage, CoinNumber, Background, WhiteBackground, ContentBody, Messages, RecentMessages,
    StatBar, ProfilePic, ProfileImage, ProfileImage_0001, ProfileImage_0002, Username, Xp, XpImage, XpImage_0001,
    XpBigImage, _000, Coins, CoinImage, CoinImage_0001, CoinBgImage_0001, CoinAmount_0001 } from './PageElements';

import "../App.css";

    const data = [
      { time: "02/12/2022 4:36pm", sender: "@charlidamelio", subject: "Hello", message: "You are so cool!", coins: 103 },
      { time: "02/12/2022 5:36pm", sender: "@minecraft_luv", subject: "Yeah!", message: "cool beans", coins: 15 },
      { time: "02/12/2022 6:36pm", sender: "@directioner4lyfe", subject: "Nice", message: "positive positive positive", coins: 40 },
    ]
 
    const Home = () => {
      return (
        <>  
        <PageContents>
        <RootWrapperHome>
        <Background>
          <WhiteBackground xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(255, 255, 255, 1)" d="M 0 0 L 1106 0 L 1106 910 L 0 910 L 0 0 Z"/>
          </WhiteBackground>
        </Background>
      <ContentBody>
          <WelcomeText>
            Welcome back, @username!
          </WelcomeText>
        <Trophies>
            <YourTrophies>
              Your Trophies
            </YourTrophies>
          <TrophyBox/>
          </Trophies>
        <Messages>
            <RecentMessages>
              Recent Messages
            </RecentMessages>
          {/* <MessagesTable>
              <TableHeader>
                <SenderBox/>
              <TimeBox/>
              <SenderText>
                  Sender
                </SenderText>
              <TimeText>
                  Time Received
                </TimeText>
              <SubjectBox/>
              <MessageBox/>
              <SubjectText>
                  Subject
                </SubjectText>
              <MessageText>
                  Message
                </MessageText>
              <CoinsGainedBox/>
              <CoinsGainedText>
                  Coins Gained
                </CoinsGainedText>
              </TableHeader> */}
              <table>
                  <tr>
                    <th>Time Received</th>
                    <th>Sender</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Coins Gained</th>
                  </tr>
                  {data.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.time}</td>
                        <td>{val.sender}</td>
                        <td>{val.subject}</td>
                        <td>{val.message}</td>
                        <td>{val.coins}</td>
                      </tr>
                    )
                  })}
              </table>  
            {/* <MessageRow>
                <SenderBox_0001/>
              <TimeBox_0001/>
              <SenderText_0001>
                  @kevinhart56
                </SenderText_0001>
              <TimeText_0001>
                  02/12/2022 4:36pm
                </TimeText_0001>
              <SubjectBox_0001/>
              <MessageBox_0001/>
              <MessageText_0001>
                  Have a great day man, you are the best! 😊 💯
                </MessageText_0001>
              <SubjectText_0001>
                  I love you bro!
                </SubjectText_0001>
              <CoinBox/>
              <CoinAmount>
                  <CoinIcon>
                    <CoinIcon_0001>
                      <CoinBgImage src="grida://assets-reservation/images/187:126" alt="image of CoinBgImage"/>
                    </CoinIcon_0001>
                  </CoinIcon>
                <CoinNumber>
                    103
                  </CoinNumber>
                </CoinAmount>
              </MessageRow> */}
            {/* </MessagesTable> */}
          </Messages>
        </ContentBody>
     
      </RootWrapperHome>  
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
                <XpBigImage src="https://image.shutterstock.com/image-vector/vector-icon-gold-achievement-xp-260nw-1151064896.jpg" alt="image of XpBigImage"/>
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
    };
   
   
    export default Home;
