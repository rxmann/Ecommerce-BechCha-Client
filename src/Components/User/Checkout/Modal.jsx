import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    display: ${props => props.st === true ? 'flex' : "none"};
    flex-direction: column;
    gap: 20px;
    border: 2px solid #0171b6;
    padding: 50px;
`;

const Content = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
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


  return (
    <Container st={show}>
      <Message>{message}</Message>
      <Content>
        <Btn variant={"outlined"} onClick={onCancel}>
          No
        </Btn>
        <Btn variant={"contained"} onClick={onConfirm}>
          Yes
        </Btn>
      </Content>
    </Container>
  );
};

export default Modal;
