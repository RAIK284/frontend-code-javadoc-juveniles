import styled from "@emotion/styled";

export const HomeContents = styled.div`
	position: relative;
    left: 264px;
    width: 100vw;
	height: 1024px;
    background-color: rgba(194, 229, 255, 1); `;

export const RootWrapperHome = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 36px;
	box-sizing: border-box;
    `;

export const Background = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 10px;
	width: 1500px;
	height: 1024px;
	background-color: rgba(194, 229, 255, 1);
	box-sizing: border-box;
	padding: 90px 35px 24px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

export const WhiteBackground = styled.svg`
	width: 1500px;
	height: 910px;
`;

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

export const WelcomeText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
	width: 733px;
`;

export const Trophies = styled.div`
	width: 1034px;
	height: 366px;
	position: relative;
`;

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

export const TrophyBox = styled.div`
	height: 331px;
	background-color: rgba(244, 244, 244, 1);
	border-radius: 6px;
	position: absolute;
	left: 0px;
	top: 35px;
	right: 0px;
`;

export const Messages = styled.div`
	width: 1034px;
	height: 116px;
	position: relative;
`;

export const RecentMessages = styled.span`
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

export const MessagesTable = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	flex: none;
	gap: 0;
	width: 1034px;
	height: 80px;
	box-sizing: border-box;
	position: absolute;
	left: 0px;
	top: 36px;
`;

export const TableHeader = styled.div`
	width: 1034px;
	height: 44px;
	position: relative;
`;

export const SenderBox = styled.div`
	width: 171px;
	height: 44px;
	background-color: rgba(219, 219, 219, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 170px;
	top: 0px;
`;

export const TimeBox = styled.div`
	width: 171px;
	height: 44px;
	background-color: rgba(219, 219, 219, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 0px;
	top: 0px;
`;

export const SenderText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 143px;
	position: absolute;
	left: 186px;
	top: 11px;
	height: 21px;
`;

export const TimeText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 144px;
	position: absolute;
	left: 15px;
	top: 11px;
	height: 21px;
`;

export const SubjectBox = styled.div`
	width: 164px;
	height: 44px;
	background-color: rgba(219, 219, 219, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 340px;
	top: 0px;
`;

export const MessageBox = styled.div`
	width: 376px;
	height: 44px;
	background-color: rgba(219, 219, 219, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 503px;
	top: 0px;
`;

export const SubjectText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 136px;
	position: absolute;
	left: 356px;
	top: 11px;
	height: 21px;
`;

export const MessageText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 348px;
	position: absolute;
	left: 519px;
	top: 11px;
	height: 21px;
`;

export const CoinsGainedBox = styled.div`
	width: 156px;
	height: 44px;
	background-color: rgba(219, 219, 219, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 878px;
	top: 0px;
`;

export const CoinsGainedText = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 700;
	text-align: left;
	width: 128px;
	position: absolute;
	left: 894px;
	top: 11px;
	height: 21px;
`;

export const MessageRow = styled.div`
	height: 36px;
	position: relative;
	align-self: stretch;
`;

export const SenderBox_0001 = styled.div`
	width: 171px;
	height: 36px;
	background-color: rgba(255, 255, 255, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 170px;
	top: 0px;
`;

export const TimeBox_0001 = styled.div`
	width: 171px;
	height: 36px;
	background-color: rgba(255, 255, 255, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 0px;
	top: 0px;
`;

export const SenderText_0001 = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 143px;
	position: absolute;
	left: 186px;
	top: 10px;
	height: 16px;
`;

export const TimeText_0001 = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 144px;
	position: absolute;
	left: 16px;
	top: 10px;
	height: 16px;
`;

export const SubjectBox_0001 = styled.div`
	width: 164px;
	height: 36px;
	background-color: rgba(255, 255, 255, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 340px;
	top: 0px;
`;

export const MessageBox_0001 = styled.div`
	width: 376px;
	height: 36px;
	background-color: rgba(255, 255, 255, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 503px;
	top: 0px;
`;

export const MessageText_0001 = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 351px;
	position: absolute;
	left: 519px;
	top: 10px;
	height: 16px;
`;

export const SubjectText_0001 = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 136px;
	position: absolute;
	left: 356px;
	top: 10px;
	height: 16px;
`;

export const CoinBox = styled.div`
	width: 156px;
	height: 36px;
	background-color: rgba(255, 255, 255, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	position: absolute;
	left: 878px;
	top: 0px;
`;

export const CoinAmount = styled.div`
	width: 128px;
	height: 16px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

export const CoinIcon = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	left: 894px;
	top: 10px;
`;

export const CoinIcon_0001 = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 894px;
	top: 10px;
	border-radius: 8px;
`;

export const CoinBgImage = styled.img`
	width: 29px;
	height: 29px;
	object-fit: cover;
	position: absolute;
	left: 888px;
	top: 4px;
`;

export const CoinNumber = styled.span`
	color: rgba(64, 64, 64, 1);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	width: 110px;
	position: absolute;
	left: 912px;
	top: 10px;
	height: 16px;
`;

export const StatBar = styled.div`
	width: 439px;
	height: 36px;
	position: absolute;
	top: 39px;
	left: 654px;
`;

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

export const ProfileImage = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
`;

export const ProfileImage_0001 = styled.div`
	width: 36px;
	height: 36px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 18px;
`;

export const ProfileImage_0002 = styled.img`
width: 47px;
height: 52px;
object-fit: cover;
position: absolute;
left: -6px;
top: 0px;
`;

export const Username = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
	width: 151px;
`;

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

export const XpImage = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
`;

export const XpImage_0001 = styled.div`
	width: 36px;
	height: 36px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 18px;
`;

export const XpBigImage = styled.img`
	width: 48px;
	height: 52px;
	object-fit: cover;
	position: absolute;
	left: -6px;
	top: -6px;
`;

export const _000 = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
`;

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

export const CoinImage = styled.div`
	width: 36px;
	height: 36px;
	position: relative;
`;

export const CoinImage_0001 = styled.div`
	width: 36px;
	height: 36px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	border-radius: 18px;
`;

export const CoinBgImage_0001 = styled.img`
width: 48px;
	height: 52px;
	object-fit: cover;
	position: absolute;
	left: -6px;
	top: -6px;
`;

export const CoinAmount_0001 = styled.span`
	color: rgba(85, 85, 85, 1);
	text-overflow: ellipsis;
	font-size: 28px;
	font-family: Roboto, sans-serif;
	font-weight: 500;
	text-align: left;
`;

//Shop
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