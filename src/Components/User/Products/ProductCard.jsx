import styled from "styled-components";
import BalanceIcon from "@mui/icons-material/Balance";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../EmptyView/ConfirmModal";
import { addToCompareP } from "../../../ApiCalls/ProductApiCalls";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  margin: 20px 10px;

  &:hover {
    transform: translate(2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const ImageContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: scale(0.8);
  border-radius: 2px;

  &:hover {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #0171b6;
  margin: 10px;
`;

const ProductCard = ({ data, disp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const image = data.images[0]?.url;

  const [confirmAdd, setConfirmAdd] = useState();
  const [modal, setModal] = useState(false);
  const { products } = useSelector((state) => state.compare);

  const handleCompare = () => {
    let catHere;
    products.map((prod) => {
      return (catHere = prod.category.name);
    });

    if (!catHere) {
      addToCompareP(dispatch, data);
    } else if (data.category.name === catHere) {
      console.log("add compare invoked");
      addToCompareP(dispatch, data);
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    if (confirmAdd === true) {
      addToCompareP(dispatch, data);
      setModal(false);
      setConfirmAdd(false);
    }
  }, [confirmAdd, data, dispatch]);

  return (
    <Container>
      {modal && (
        <ConfirmModal
          message={"You are comparing unsimilar category products!"}
          title={"Would you still like to compare products?"}
          modal={modal}
          setModal={setModal}
          setConfirmAdd={setConfirmAdd}
        />
      )}
      <ImageContainer>
        <Image onClick={() => navigate(`/product/${data._id}`)} src={image} />
      </ImageContainer>

      <Wrapper>
        <Title> {data.title} </Title>
      </Wrapper>

      <Info>
        <Price> RS {data.price} </Price>
        {disp !== "none" && (
          <BalanceIcon
            onClick={handleCompare}
            sx={{ cursor: "pointer" }}
            fontSize="small"
            color="primary"
          />
        )}
      </Info>
    </Container>
  );
};

export default ProductCard;
