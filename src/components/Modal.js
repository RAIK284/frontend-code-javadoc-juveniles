import React from 'react';
import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";


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
    align-items: center;
    line-height: 1.8;
    color: #c4c4c4;
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
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
                    <h1>test test test</h1>
                </ModalContent>
            </ModalWrapper>
        </Background>
    ) : null}
    </>
   )
};

     