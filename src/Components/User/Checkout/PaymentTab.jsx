import { Button } from "@mui/material";
import styled from "styled-components";
import { makeAnOrder } from "../../../ApiCalls/ordersApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Khalti from "../../Khalti/Khalti";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

const Total = styled.h1`
  color: gray;
`;

const PaymentTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching } = useSelector(state => state.user)

  const { cart: userCart, totalAmount } = useSelector(
    (state) => state.usercart
  );

  const handlePlaceOrder = async () => {
    await makeAnOrder(dispatch, {
      orderData: userCart,
      totalPayable: totalAmount,
      type: "cashondelivery",
    });
    navigate("/profile/orders/me");
  };

  return (
    <Container>
      <Total>NPR {totalAmount}</Total>

      <BtnContainer>
        <LoadingButton
          loading={isFetching}
          type="submit"
          fullWidth
          color="warning"
          variant={"contained"}
          onClick={handlePlaceOrder}
        >
          Cash on delivery
        </LoadingButton>

        <Khalti amount={totalAmount} order={userCart} />
      </BtnContainer>
    </Container>
  );
};

export default PaymentTab;
