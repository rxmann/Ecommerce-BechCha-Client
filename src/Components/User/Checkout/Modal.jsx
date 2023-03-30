import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 2px solid #0171b6;
    padding: 50px;
`;

const Content = styled.div`
    display: flex;
    gap: 20px;
`;

const Message = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: gray;
`;

const Btn = styled(Button)`
    padding: 10px;
`;

const Modal = ({ show, message, onConfirm, onCancel }) => {

    const modalStyle = {
        display: show ? 'block' : 'none'
      };


  return (
    <Container style={modalStyle}>
      <Message>{message}</Message>
      <Content>
        <Btn variant={"outlined"} onClick={onConfirm}>
          No
        </Btn>
        <Btn variant={"contained"} onClick={onCancel}>
          Yes
        </Btn>
      </Content>
    </Container>
  );
};

export default Modal;
