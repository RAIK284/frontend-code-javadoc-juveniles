import React from 'react';
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";
import { TextField } from '@mui/material';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(24, 50, 86, 0.7);
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
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
    padding: 16px;
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
    position: absolute;
    top: 155px;
    right: calc(50vw - 330px);
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

     