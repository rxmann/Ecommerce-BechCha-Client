import { Button } from "@mui/material";
import styled from "styled-components";

const Modal = styled.div`
  background-color: #f5f7f8;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  z-index: 999;
`;
const HeadinG = styled.h3`
  font-weight: 600;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin: 20px 0px;
`;

const Info = styled.span`
    padding: 10px;
`

const ConfirmModal = ({ message, title, setModal, modal, setConfirmAdd }) => {
  return (
    <Modal>
      {modal}
      <Info> {message} </Info>
      <HeadinG> {title} </HeadinG>
      <BtnContainer>
        <Button variant="contained" color="secondary" onClick={() => setModal(!modal)}> Cancel </Button>
        <Button variant="contained" color="info" onClick={() => setConfirmAdd(true)}> Confirm </Button>
      </BtnContainer>
    </Modal>
  );
};

export default ConfirmModal;
