import styled from "styled-components";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";

const Container = styled.div`
  flex: 5;
  padding: 30px;
`;

const Title = styled.h2`
  color: gray;
  margin-bottom: 20px;
`;
const Form = styled.form`
  padding: 50px 20px;
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
const Boxx = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Label = styled(FormLabel)`
  flex: ${(props) => props.flex};
`;
const Input = styled(TextField)`
  flex: ${(props) => props.flex};
`;

const SettingsAdmin = () => {
  return (
    <Container>
      <Title> Featured Products </Title>

      <Form>
        <Boxx>
          <Label flex={1} > Product </Label>
          <Label flex={1}> Title </Label>
          <Label flex={2}> Message </Label>
          <Label flex={0.1}>  </Label>
        </Boxx>

        <Boxx>
          <Input flex={1} />
          <Input flex={1} />
          <Input flex={2} />
          <Input flex={0.1} />
        </Boxx>

      </Form>
    </Container>
  );
};

export default SettingsAdmin;
