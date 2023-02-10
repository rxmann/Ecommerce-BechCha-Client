import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  overflow: hidden;
  object-fit: contain;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: 1px solid red;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px 10px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #000000;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const CartPage = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
        <Title>Cart Items</Title>
        <Top>
          <TopButton> CONTINUE SHOPPING </TopButton>
          <TopTexts>
            <TopText> Cart (2) </TopText>
            <TopText> Wishlist (0) </TopText>
          </TopTexts>
          <TopButton type="filled"> CHECKOUT NOW </TopButton>
        </Top>

        <Bottom>
          <Info>
            {/* {cart.products.map((product) => ( */}
              <Product key={""}>
                <ProductDetail>
                  <Image src={"https://img.freepik.com/premium-vector/social-media-post-design-ecommerce-product-marketing_528542-192.jpg?w=2000"} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {"Apple Apple"}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b> {123123121123211}
                    </ProductId>
                    <ProductColor color={"white"} />
                    <ProductSize>
                      <b>Size:</b>
                      {"XL"}
                    </ProductSize>
                  </Details>
                </ProductDetail>

                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{100}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {2222}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            {/* ))} */}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{``}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>RS 300</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount </SummaryItemText>
              <SummaryItemPrice>RS -50</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>RS {``}</SummaryItemPrice>
            </SummaryItem>


           
            <Button>CHECKOUT NOW</Button>

          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartPage;