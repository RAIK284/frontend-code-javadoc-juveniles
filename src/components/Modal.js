import React from 'react';
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";
import { TextField, Checkbox, Switch, FormGroup, FormControlLabel } from '@mui/material';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(24, 50, 86, 0.7);
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    // align-items: center;
`;

const ModalWrapper = styled.div`
    position: relative;
    top: 120px;
    width: 678px;
    height: 661px;
    background: white;
    border-radius: 6px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-left: 24px;
    padding-bottom: 24px;
    line-height: 1.8;
    color: #555555;
`;

const Spacer = styled.span `
    width: 50px;
    height: 24px;
    background: white;
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    top: 10px;
    left: 610px;
    width: 32px;
    height: 32px;
    padding: 0;
`;

const SendMessageButton = styled.button`
    color: white;
    position: relative;
    width: 225px;
    height: 36px;
    left: 200px;
    background: #2295FF;
    border: 2px solid rgba(34, 149, 255, 0.5);
    box-sizing: border-box;
    border-radius: 6px;
`

// Profile modal
const ApplySettingsButton = styled.button`
    color: white;
    position: relative;
    width: 225px;
    height: 36px;
    left: 200px;
    background: #2295FF;
    border: 2px solid rgba(34, 149, 255, 0.5);
    box-sizing: border-box;
    border-radius: 6px;
`

const SwitchWrapper = styled.div `
    displau: flex;
    align-items: center;
    width: 650px;
`

const ProfileWrapper = styled.div`
    position: relative;
    top: 120px;
    width: 678px;
    height: 261px;
    background: white;
    border-radius: 6px;
`;


export const Modal = ({ showModal, setShowModal }) => {
   return (
    <>
    {showModal ? (
        <Background>
            <ModalWrapper showModal = {showModal}>
                <ModalContent>
                <CloseModalButton onClick ={() => setShowModal
                (prev => !prev)} />
                    <h1>Compose Message</h1>
                <Spacer />
                <TextField 
                id="username" 
                variant="filled"
                label="Recipient username"
                />
                <Spacer />
                <TextField 
                id="subject" 
                variant="filled"
                label="Subject"
                />
                <Spacer />
                <TextField 
                id="message" 
                variant="filled"
                label="Message"
                multiline
                rows={5}
                
                />
                 <Spacer />
                <p>Remember, emojis cost XP and can be used to sent coins to other users.
Type or click on the emojis to add them to your message.</p>
                <Spacer />
                <SendMessageButton onClick={() => setShowModal(prev=>!prev)} >Send Message
                </SendMessageButton>
                </ModalContent>
            </ModalWrapper>
        </Background>
    ) : null}
    </>
   )
};

export const ProfileModal = ({ showModal, setShowModal }) => {
    const [checked, setChecked] = React.useState();
    const handleChange = event => {
      setChecked(event.target.checked);
    };

    return (

        <>
        {showModal ? (
            <Background>
                <ProfileWrapper showModal = {showModal}>
                    <ModalContent>
                    <CloseModalButton onClick ={() => setShowModal
                    (prev => !prev)} />
                        <h1>Profile Settings</h1>
                    <Spacer />

                    <SwitchWrapper>
                    <FormControlLabel
                    control={<Checkbox checked={checked} color="primary" size="medium" edge="false" onChange={handleChange}/>}
                    label="Make my trophies and profile stats visible to others"
                    labelPlacement="start"
                    />
                    </SwitchWrapper>

                    <Spacer />

                    <ApplySettingsButton onClick={() => setShowModal(prev=>!prev)} >Apply Settings
                    </ApplySettingsButton>
                    </ModalContent>
                </ProfileWrapper>
            </Background>
        ) : null}
        </>
       )
    };

     