import styled from "@emotion/styled";

// Style that contains all page elements that are not the navBar, and gives it a light blue color
export const PageContents = styled.div`
	position: relative;
    left: 264px;
    width: 100vw;
	height: 1024px;
    background-color: rgba(194, 229, 255, 1); `;

// Diplays the white background on all pages
export const WhiteBackground = styled.svg`
	width: 1100px;
	height: 910px;
	border-radius: 14px;

`;

// Holds the content body for items in the pages
export const ContentBody = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 36px;
	width: 1034px;
	height: 587px;
	box-sizing: border-box;
	position: absolute;
	left: 70px;
	top: 114px;
`;

// Style for the text at the top of each page
export const WelcomeText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
	width: 733px;
`;

// Container for trophies on the home page
export const Trophies = styled.div`
	width: 1034px;
	height: 366px;
	position: relative;
`;

// Container to hold background of trophy box in home page
export const YourTrophies = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 193px;
	position: absolute;
	left: 0px;
	top: 0px;
	height: 28px;
`;

// Holds each individual trophy in home page and allows user to scroll to see their trophies
export const TrophyBox = styled.div`
	height: 331px;
	background-color: #EFEFEF;
	border-radius: 6px;
	position: absolute;
	left: 0px;
	top: 35px;
	right: 0px;
	overflow-y: scoll;
`;

// Holds messages container in the home page
export const Messages = styled.div`
	width: 1034px;
	height: 116px;
	position: relative;
`;

// Contains profile bar
export const StatBar = styled.div`
	width: 439px;
	height: 36px;
	position: absolute;
	top: 39px;
	left: 654px;
`;

// Displays profile picture size on the top of each page
export const ProfilePic = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 8px;
	width: 195px;
	height: 36px;
	box-sizing: border-box;
	position: absolute;
	left: 0px;
	top: 0px;
`;

// Displays pofile pictire at the top of each page
export const ProfileImage = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
`;

// Displays image shape to be masked on top of stat bar
export const ProfileImage_0001 = styled.div`
	width: 36px;
	height: 36px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 18px;
`;

// Displays image on the stat bar
export const ProfileImage_0002 = styled.img`
	width: 47px;
	height: 52px;
	object-fit: scale-down;
	max-width: 100%;
	max_height: 100%;
	position: absolute;
	left: 0px;
	top: -10px;
`;

// Button to send message tht a user creates
export const SendMessageButton = styled.button`
  color: white;
  position: relative;
  width: 225px;
  height: 36px;
  left: 200px;
  background: #2295ff;
  border: 2px solid rgba(34, 149, 255, 0.5);
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`;

// Holds the username text in stat bar
export const Username = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
	width: 151px;
`;

// Holds the XP text in the stat bar
export const Xp = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 8px;
	width: 92px;
	height: 36px;
	box-sizing: border-box;
	position: absolute;
	left: 225px;
	top: 0px;
`;

// Holds the XP image container
export const XpImage = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
`;

// Contains shape of XP image to be masked on stat bar
export const XpImage_0001 = styled.div`
	width: 36px;
	height: 36px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 18px;
`;

// Contains actual image of XP icon
export const XpBigImage = styled.img`
	width: 48px;
	height: 52px;
	object-fit: cover;
	position: absolute;
	left: -6px;
	top: -6px;
`;

// Holds coin amount text to be shown on stat bar
export const _000 = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
`;

// Displays text of "Coins" on stat bar
export const Coins = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 8px;
	width: 92px;
	height: 36px;
	box-sizing: border-box;
	position: absolute;
	left: 347px;
	top: 0px;
`;

// Cointainer for coin amount and coin image
export const CoinImage = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
`;

// Holds the shape for coin image to be masked
export const CoinImage_0001 = styled.div`
	width: 36px;
	height: 36px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 18px;
`;

// Displays image for coin icon on stat bar
export const CoinBgImage_0001 = styled.img`
	width: 48px;
	height: 52px;
	object-fit: cover;
	position: absolute;
	left: -6px;
	top: -6px;
`;

// Shows coin amount to be displayed on stat bar
export const CoinAmount_0001 = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
`;

// Holds trophy items in the shop 
export const GreyTrophyBox = styled.div`
	padding: 15px 15px;	
	height: 273px;
	width: 232px;
	left: 846px;
	top: 178px;
	right: 0px;
	border-radius: 6px;
	background: #EFEFEF
`;

// Style for the main text at the top of the page
export const MainHeader = styled.span`
	color: rgb(64, 64, 64);
	text-overflow: ellipsis;
	font-size: 36px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
	width: 733px;
`;

// Container to hold both leaderboard tabs
export const LeaderboardTabs = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	gap: 24px;
	box-sizing: border-box;
`;

// Style to show the group of coins earned text and underline
export const CoinsEarnedTab = styled.div`
	width: 280px;
	height: 29px;
	position: relative;
	cursor: pointer;
`;

// Underline for coins earned tab
export const Underline = styled.div`
	width: 280px;
	height: 3px;
	background-color: rgb(24, 120, 208);
	position: absolute;
	left: 0px;
	top: 26px;
`;

// Coins earned tab text
export const AllTimeCoinsEarned = styled.span`
	color: rgb(24, 120, 208);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 226px;
	position: absolute;
	left: 8px;
	top: 0px;
`;

// Style for the grouping of XP used tab and underline
export const XpUsedTab = styled.div`
	width: 250px;
	height: 29px;
	position: relative;
	cursor: pointer;
`;

// XP used underline
export const Underline_0001 = styled.svg`
	position: absolute;
	width: 214px;
	height: 3px;
	left: -0.43px;
	top: 26px;
	background: #808080;
`;

// Text for XP used tab
export const AllTimeXpUsed = styled.span`
	color: rgb(128, 128, 128);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 250px;
	position: absolute;
	left: 8px;
	top: 0px;
`;

// Button to compose message in messages page
export const ComposeMessageButton = styled.button`
	color: white;
	position: absolute;
	width: 225px;
	height: 36px;
	left: 802px;
	top: 72px;
	background: #2295FF;
	border: 2px solid rgba(34, 149, 255, 0.5);
	box-sizing: border-box;
	border-radius: 6px;
	cursor: pointer;
`;

// Button for profile settings in profile page
export const ProfileSettingButton = styled.button`
	position:relative;
	width: 200px;
	height: 36px;
	padding-top: 5px;
	background:white;
	border: 2px solid #2F5890;
	box-sizing: border-box;
	border-radius: 6px;
	padding-bottom: 10px;
`;

