import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    display: ${props => props.st === true ? 'flex' : "none"};
    flex-direction: column;
    width: 50%;
    gap: 20px;
    background-color: #ffffff;
    padding: 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; 
   
`;

const Content = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
`;

const Message = styled.p`
    font-weight: 500;
    font-size: 24px;
`;

const Btn = styled(Button)`
    padding: 10px;
`;

const Modal = ({ show, message, onConfirm, onCancel }) => {


  return (
    <Container st={show}>
      <Message>{message}</Message>
      <Content>
        <Btn color="error" variant={"outlined"} onClick={onCancel}>
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
