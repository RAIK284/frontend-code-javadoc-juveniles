import React from 'react';
import { RootWrapperHome, WelcomeText, Trophies, YourTrophies, TrophyBox, MessagesTable, TableHeader, 
SenderBox, TimeBox, SenderText, TimeText, SubjectBox, MessageBox, SubjectText, MessageText, 
CoinsGainedBox, CoinsGainedText, MessageRow, SenderBox_0001, TimeBox_0001, SenderText_0001, TimeText_0001, 
SubjectBox_0001, MessageBox_0001, MessageText_0001, SubjectText_0001, CoinBox, CoinAmount, 
CoinIcon, CoinIcon_0001, CoinBgImage, CoinNumber } from './PageElements';

const Home = () => {
  return ( 
    <>  
    <RootWrapperHome>
    <WelcomeText>
      Welcome back, @username!
    </WelcomeText>
  <Trophies>
      <YourTrophies>
        Your Trophies
      </YourTrophies>
    <TrophyBox/>
    </Trophies>
  <MessagesTable>
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
      </TableHeader>
    <MessageRow>
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
      </MessageRow>
    </MessagesTable>
  </RootWrapperHome>
  </>
  );
};

export default Home;