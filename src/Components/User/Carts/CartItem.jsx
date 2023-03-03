import styled from "styled-components"
import DeleteIcon from '@mui/icons-material/Delete';
import {  deleteProductFromCart, updateItemFromCart } from "../../../ApiCalls/apiCalls"
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

const CartItems = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const ProductImage = styled.img`
    height: 100%;
  cursor: pointer;
  transition: transform .3s ease;
  transform: scale(0.8);
  border-radius: 2px;

  &:hover {
    transform: scale(1);
  }
`

const Item = styled.span`
    flex: ${props => props.flex};
    font-weight: ${props => props.fw ? props.fw : 400};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
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



const CartItem = ({ product: pro, quantity: qty }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState();
  const [product, setProduct] = useState()

  useEffect(() => {
    setProduct(pro);
    setQuantity(qty);
  }, [pro, qty])




  /// quantity increase / decrease
  const handleQuantity = (option) => {
    updateItemFromCart(dispatch, pro, option)
  }




  // empty cart
  const handleDeleteCartProd = async (id) => {
    deleteProductFromCart(dispatch, id);
  }



  return (
    <CartItems >
      <Item flex={2}>
        <ProductImage onClick={() => navigate(`/product/${product._id}`)} src={product?.images[0]?.url || ""} />
        <Item>{product?.title}</Item>
      </Item>
      <Item flex={2}>
        <QuantityDiv>
          <ButtonQ onClick={() => handleQuantity("dec")}> - </ButtonQ>
          {quantity}
          <ButtonQ onClick={() => handleQuantity("inc")} > + </ButtonQ>
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