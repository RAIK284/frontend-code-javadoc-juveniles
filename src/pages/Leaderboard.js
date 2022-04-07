import React from 'react';

import { PageContents, RootWrapperLeaderboard, WelcomeText, Trophies, YourTrophies, TrophyBox, MessagesTable, TableHeader,
    SenderBox, TimeBox, SenderText, TimeText, SubjectBox, MessageBox, SubjectText, MessageText,
    CoinsGainedBox, CoinsGainedText, MessageRow, SenderBox_0001, TimeBox_0001, SenderText_0001, TimeText_0001,
    SubjectBox_0001, MessageBox_0001, MessageText_0001, SubjectText_0001, CoinBox, CoinAmount,
    CoinIcon, CoinIcon_0001, CoinBgImage, CoinNumber, Background, WhiteBackground, ContentBody, Messages, RecentMessages,
    StatBar, ProfilePic, ProfileImage, ProfileImage_0001, ProfileImage_0002, Username, Xp, XpImage, XpImage_0001,
    XpBigImage, Coins, CoinImage, CoinImage_0001, CoinBgImage_0001, CoinAmount_0001, LeaderboardHeader, LeaderboardTabs, 
    CoinsEarnedTab, Underline, Underline_0001, AllTimeCoinsEarned, AllTimeXpUsed, XpUsedTab, _000 } from './PageElements';

import "../App.css";

const data = [
  { position: 1, user: "@charlidamelio", all_time_coins_earned: 32435},
  { position: 2, user: "@bingbong", all_time_coins_earned: 32435},
  { position: 3, user: "@bigtimerush", all_time_coins_earned: 32435},
  { position: 4, user: "@beep_boop", all_time_coins_earned: 32435},
  { position: 5, user: "@dixie_damelio", all_time_coins_earned: 32435},
  { position: 6, user: "@millenial2323", all_time_coins_earned: 32435},
  { position: 7, user: "@that_cool_guy", all_time_coins_earned: 32435},
  { position: 8, user: "@jsadfaj", all_time_coins_earned: 32435},
  { position: 9, user: "@akjdsfa;lkdsfa", all_time_coins_earned: 32435},
  { position: 10, user: "@kjdshfakjhd", all_time_coins_earned: 32435},
]

function Leaderboard() {
  return (
    <PageContents>
    <RootWrapperLeaderboard>
    <Background>
      <WhiteBackground xmlns="http://www.w3.org/2000/svg">
        <path fill="white" d="M 0 0 L 1101 0 L 1101 910 L 0 910 L 0 0 Z"/>
      </WhiteBackground>
    </Background>
  <ContentBody>
      <LeaderboardHeader>
        Leaderboard
      </LeaderboardHeader>
      <LeaderboardTabs>
        <CoinsEarnedTab>
          <Underline/>
        <AllTimeCoinsEarned>
            ALL-TIME COINS EARNED
          </AllTimeCoinsEarned>
        </CoinsEarnedTab>
      <XpUsedTab>
          <Underline_0001 xmlns="http://www.w3.org/2000/svg">
            <path fill="rgb(128, 128, 128)" d="M 0 0 L 169 0 L 169 3 L 0 3 L 0 0 Z"/>
          </Underline_0001>
        <AllTimeXpUsed>
            ALL-TIME XP USED
          </AllTimeXpUsed>
        </XpUsedTab>
      </LeaderboardTabs>
      <table_leaderboard>
                    <tr>
                      <th>Position</th>
                      <th>User</th>
                      <th>Total Coins Earned</th>
                    </tr>
                    {data.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.position}</td>
                          <td>{val.user}</td>
                          <td>{val.all_time_coins_earned}</td>
                        </tr>
                      )
                    })}
              </table_leaderboard>  
    {/* <Table>
        <RecentMessages>
          Recent Messages
        </RecentMessages>
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
                  <CoinBgImage src="grida://assets-reservation/images/270:511" alt="image of CoinBgImage"/>
                </CoinIcon_0001>
              </CoinIcon>
            <CoinNumber>
                103
              </CoinNumber>
            </CoinAmount>
          </MessageRow>
        </MessagesTable>
      </Table> */}
    </ContentBody>
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
  </RootWrapperLeaderboard>	
  </PageContents>
  );
}

export default Leaderboard;