import styled from "styled-components";
import { Button, Input } from "@mui/material";
import PaymentTab from "./PaymentTab"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShippingWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 30px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const InfoTitle = styled.span`
  flex: 1;
  padding: 10px;
  font-weight: 400;
`;

const FormInput = styled(Input)`
  flex: 2;
`;

const ConfirmationForm = ({ setElement }) => {
  return (
    <Container>
      <ShippingWrapper>
        <Form>
          <FormItem>
            <InfoTitle> Recepitant Name </InfoTitle>
            <FormInput />
          </FormItem>
          
          <Button
            variant={"contained"}
            onClick={() => {
              console.log("chek");
              setElement("Payment")
            }}
          >
            confirm
          </Button>
        </Form>
      </ShippingWrapper>
    </Container>
  );
};

export default ConfirmationForm;
