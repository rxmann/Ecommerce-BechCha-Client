import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  color: #aaaaaa;
  padding: 10px;
  border-radius: 12px;
`;

const ItemsList = styled.div`
  padding: 10px 0px;
  width: 100%;
`;
const ProductImage = styled.img`
  max-width: 100px;
  cursor: pointer;
  max-height: 100px;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const ItemHeadContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  font-weight: 700;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
`;

const ItemH = styled.span`
  flex: ${(props) => props.flex};
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ItemC = styled.span`
  flex: ${(props) => props.flex};
  font-weight: ${(props) => (props.fw ? props.fw : 400)};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const ConfirmationForm = ({ setElement }) => {
  const cart = useSelector((state) => state.usercart);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


  const handleCancel = () => {
    // do something when user clicks "No"
    setShowModal(false);
  };


  const handleConfirm = () => {
    setShowModal(false);
    setElement("Payment");
  }

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title> Ordered Items: {cart.totalQuantity} </Title>
          <Title> RS {cart.totalAmount} </Title>
        </TitleWrapper>
        <Wrapper>
          <ItemsList>
            <ItemHeadContainer>
              <ItemH flex={2}> </ItemH>
              <ItemH flex={2}> Product </ItemH>
              <ItemH flex={1}> Quantity </ItemH>
              <ItemH flex={1}> Price </ItemH>
            </ItemHeadContainer>

            {cart &&
              cart.cart &&
              cart.cart.map((item) => (
                <ItemContainer key={item.product._id}>
                  <ItemC flex={2}>
                    <ProductImage
                      onClick={() => navigate(`/product/${item.product._id}`)}
                      src={item.product?.images[0]?.url}
                    />
                  </ItemC>
                  <ItemC flex={2}>
                    <ItemC>{item.product.title}</ItemC>
                  </ItemC>
                  <ItemC flex={1}>{item.quantity}</ItemC>
                  <ItemC flex={1} fw={500}>
                    {item.price}
                  </ItemC>
                </ItemContainer>
              ))}
          </ItemsList>
        </Wrapper>
      </Wrapper>

      <Button
       type="submit"
        variant={"contained"}
        onClick={()=>handleConfirm}
      >
        Proceed to pay
      </Button>
    </Container>
  );
};

export default ConfirmationForm;
