import styled from "styled-components"
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProductFromCart } from "../../../ApiCalls/apiCalls"
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CartItems = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const ProductImage = styled.img`
    width: 100px;
`

const Item = styled.span`
    flex: ${props => props.flex};
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const ButtonQ = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display : flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f5f7f8;
`



const CartItem = ({ product: pro, quantity: qty, maxQuantity }) => {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState()

  useEffect( () => {
    setProduct(pro);
    setQuantity(qty);
  }, [pro])



  const handleQuantity = (option, maxQuantity) => {

    if (option === "dec") {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }

    }
    else if (option === "inc") {
      if (quantity < maxQuantity) {
        setQuantity(quantity + 1)
      }
    }
  }



  const handleDeleteCartProd = async (id) => {
    deleteProductFromCart(dispatch, id);
  }



  return (
    <CartItems >
      <Item flex={2}>
        <Item>
          <ProductImage src={product?.images[0]?.url} />
          <Item>{product?.title}</Item>
        </Item>
      </Item>
      <Item flex={1}>
        <QuantityDiv>
          <ButtonQ onClick={() => handleQuantity("dec", maxQuantity)}> - </ButtonQ>
          {quantity}
          <ButtonQ onClick={() => handleQuantity("inc", maxQuantity)} > + </ButtonQ>
        </QuantityDiv>
      </Item>
      <Item flex={1}> {product?.price} </Item>
      <Item flex={1}> {quantity * product?.price} </Item>
      <Item flex={0.3}>
        <Button onClick={() => handleDeleteCartProd(product?._id)}>
          <DeleteIcon color={"error"} />
        </Button>
      </Item>
    </CartItems>
  )
}

export default CartItem