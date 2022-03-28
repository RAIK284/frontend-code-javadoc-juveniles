import styled, { css } from 'styled-components'
import React, { Component } from 'react'

function LogInScreen() {
	return (	
	<RootWrapperLogInScreen>
    <Background>
      <GradientSides/>
    <Foreground/>
    <Uplft>
        Uplft
      </Uplft>
    </Background>
  <UplftText>
      Spread positivity from anywhere.
    </UplftText>
  <LogInModal>
        <ModalBox/>
      <SignUp>
          <SignUpText>
            Don’t have an account? 
          </SignUpText>
        <SignUpText_0001>
            Sign up.
          </SignUpText_0001>
        </SignUp>
      <Or>
          OR
        </Or>
      <UsernameBox>
          <EntryBox/>
        <ButtonText>
            Email or username
          </ButtonText>
        </UsernameBox>
      <PasswordBox>
          <EntryBox_0001/>
        <ButtonText_0001>
            Password
          </ButtonText_0001>
        </PasswordBox>
      <LoginButton>
          <ButtonBody/>
        <ButtonText_0002>
            Log In
          </ButtonText_0002>
        </LoginButton>
      <LineStroke xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(196, 196, 196, 1)" d="M 183 1 L 0 1 L 0 0 L 183 0 L 183 1 Z"/>
        </LineStroke>
      <LineStroke_0001 xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(196, 196, 196, 1)" d="M 183 1 L 0 1 L 0 0 L 183 0 L 183 1 Z"/>
        </LineStroke_0001>
    </LogInModal>
  </RootWrapperLogInScreen>	
)
}

const RootWrapperLogInScreen = styled.div`
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 1);
	position: relative;
`;

const Background = styled.div`
	width: 1440px;
	height: 1024px;
	position: absolute;
	left: calc((calc((50% + 0px)) - 720px));
	top: 0px;
`;

const GradientSides = styled.div`
    width: 1440px;
    height: 1024px;
    background: linear-gradient(-180deg, rgba(48, 87, 144, 1), rgba(47, 145, 174, 1));
    position: absolute;
    left: calc((calc((50% + 0px)) - 720px));
    top: calc((calc((50% + 0px)) - 512px));
`;

const Foreground = styled.div`
	width: 840px;
	height: 1024px;
	background-color: rgba(194, 229, 255, 1);
	position: absolute;
	left: calc((calc((50% + 0px)) - 420px));
	top: calc((calc((50% + 0px)) - 512px));
`;

const Uplft = styled.span`
	color: rgba(47, 88, 144, 1);
	text-overflow: ellipsis;
	font-size: 96px;
	font-family: Comfortaa, sans-serif;
	font-weight: 300;
	text-align: center;
	width: 469px;
	position: absolute;
  left: calc((calc((50% + -0px)) - 234px));
	top: 58px;
	height: 107px;
`;

const UplftText = styled.span`
	color: rgba(111, 111, 111, 1);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: center;
	width: 613px;
	position: absolute;
	left: calc((calc((50% + -0px)) - 306px));
	top: 183px;
	height: 28px;
`;

const LogInModal = styled.div`
	width: 468px;
	height: 397px;
	position: absolute;
	left: calc((calc((50% + 0px)) - 234px));
	top: calc((calc((50% + -54px)) - 198px));
`;

const ModalBox = styled.div`
	width: 468px;
	height: 397px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 12px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const SignUp = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 8px;
	width: 354px;
	height: 21px;
	box-sizing: border-box;
	position: absolute;
	left: 57px;
	top: 352px;
`;

const SignUpText = styled.span`
	color: rgba(0, 0, 0, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: center;
`;

const SignUpText_0001 = styled.span`
	color: rgba(24, 120, 208, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: center;
`;

const Or = styled.span`
	color: rgba(196, 196, 196, 1);
	text-overflow: ellipsis;
	font-size: 18px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: center;
	position: absolute;
	left: 103px;
	top: 294px;
	right: 105px;
	bottom: 82px;
`;

const UsernameBox = styled.div`
	width: 420px;
	height: 68px;
	position: absolute;
	left: calc((calc((50% + 0px)) - 210px));
	top: calc((calc((50% + -140px)) - 34px));
`;

const EntryBox = styled.div`
	background-color: rgba(229, 229, 229, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	border-radius: 6px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const ButtonText = styled.span`
	color: rgba(128, 128, 128, 1);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 16px;
	top: 20px;
	right: 46px;
	bottom: 20px;
`;

const PasswordBox = styled.div`
	width: 420px;
	height: 68px;
	position: absolute;
	left: calc((calc((50% + -1px)) - 210px));
	top: calc((calc((50% + -54px)) - 34px));
`;

const EntryBox_0001 = styled.div`
	background-color: rgba(229, 229, 229, 1);
	border: solid 1px rgba(196, 196, 196, 1);
	border-radius: 6px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const ButtonText_0001 = styled.span`
	color: rgba(128, 128, 128, 1);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: left;
	position: absolute;
	left: 16px;
	top: 19px;
	right: 138px;
	bottom: 21px;
`;

const LoginButton = styled.div`
	width: 420px;
	height: 51px;
	position: absolute;
	left: 23px;
	top: 218px;
`;

const ButtonBody = styled.div`
	background-color: rgba(34, 149, 255, 1);
	border-radius: 6px;
	position: absolute;
	left: 1px;
	top: 0px;
	right: -1px;
	bottom: 0px;
`;

const ButtonText_0002 = styled.span`
	color: rgba(255, 255, 255, 1);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	text-align: center;
	position: absolute;
	left: 81px;
	top: 10px;
	right: 79px;
	bottom: 13px;
`;

const LineStroke = styled.svg`
	position: absolute;
	left: 260px;
	top: 304px;
	right: 25px;
	bottom: 92px;
	transform: rotate(0deg);
`;

const LineStroke_0001 = styled.svg`
	position: absolute;
	left: 23px;
	top: 304px;
	right: 262px;
	bottom: 92px;
	transform: rotate(0deg);
`;