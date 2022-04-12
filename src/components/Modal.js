import styled from "@emotion/styled";
import React from 'react';

export const Modal = ({showModal, setShowModal}) => {
   return <> {showModal ? <div>Modal</div> : null} </>;
}