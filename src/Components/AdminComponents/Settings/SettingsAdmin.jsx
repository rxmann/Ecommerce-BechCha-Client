import styled from "styled-components";
import { getFeatured, updateFeatured } from "../../../ApiCalls/ProductApiCalls";
import { Button, FormLabel, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import ProductCard from "../../User/Products/ProductCard";

const Container = styled.div`
  flex: 5;
  padding: 30px;
`;

const Form = styled.form`
  padding: 20px;
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeaturedProductList = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0px;
`;

const Label = styled(FormLabel)`
  flex: ${(props) => props.flex};
`;
const Input = styled(TextField)`
  flex: ${(props) => props.flex};
`;

const Title = styled.h2`
  color: gray;
  margin-bottom: 20px;
`;

const Card = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const CardTitle = styled.span`
  font-size: 18px;
  padding: 10px 10px;
  font-weight: 600;
`;

const SettingsAdmin = () => {
  const [featured, setFeatured] = useState();

  const [values, setValues] = useState([]);

  const handleChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
  };

  // get featured products
  useEffect(() => {
    const getDta = async () => {
      const response = await getFeatured();
      setFeatured(response);
      const idList = response.map((obj) => obj._id);
      setValues(idList);
    };

    getDta();
  }, []);

  // set new featured
  const setFeaturedProd = async () => {
    console.log(values);
    await updateFeatured(values);
    window.location.reload(false);
  };

  return (
    <Container>
      <Title> Featured Products </Title>

      <FeaturedProductList>
        {featured &&
          featured?.map((p) => (
            <ProductCard key={p._id} data={p} disp={"none"} />
          ))}
      </FeaturedProductList>

      <Form>
        <Label flex={1}> Product </Label>

        {values && values?.map((id, index) => (
          <Input
            key={index}
            flex={1}
            required
            value={id}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </Form>

      <Button
        sx={{ margin: "20px" }}
        variant="contained"
        onClick={setFeaturedProd}
      >
        {" "}
        Update{" "}
      </Button>
    </Container>
  );
};

export default SettingsAdmin;
