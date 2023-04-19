import styled from "styled-components"
import moment from 'moment';
import { useEffect } from "react";
import { getOneOrderById } from "../../../ApiCalls/ordersApiCalls";
import { useState } from "react";
import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import DownloadIcon from '@mui/icons-material/Download';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";


const Container = styled.div`
  padding: 30px;
  margin: auto;
  min-width: 60%;
`

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`


const Wrapper = styled.div`
  border: 1px solid gray;
`

const TopWrapper = styled.div`
  padding: 30px 0px;
  background-color: #0171b6;
  color: white;
`
const Title = styled.h1`
  padding: 20px;
  color: ${props => props.color && props.color};
`

const OrderInfoWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
`


const Info = styled.div`
  width: 60%;
  font-weight: 400;
  font-size: 16px;
  color: black;
  display: flex;
`
const InfoName = styled.span`
  flex: 1;
`

const InfoValue = styled.span`
  flex: 2;
`

const HR = styled.hr`
  border: none;
  height: 1px;
  margin: 5px;
  background-color: #0171b6;
`



const OrderList = styled.div`
    padding: 20px;
`

const TitleContainer = styled.div`
   background-color: #f0f8ff;
   display: flex;
   justify-content: space-between;
`


const Item = styled.h5`
  font-weight: 600;
  flex: ${props => props.flex ? props.flex : `1`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const ItemB = styled.span`
  font-weight: 400;
  flex: ${props => props.flex ? props.flex : `1`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padd ? props.padd : "10px"};
`


const ItemWrap = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: #E8E9EB;
`

const Total = styled.span`
  color: #0171b6;
  display: flex;
  justify-content: end;
  padding: 5px 20px;
`

const TotalH = styled.h3`
  color: #0171b6;
  display: flex;
  justify-content: end;
  padding: 20px;
`

const Footer = styled.div`
    padding: 20px;
`

const Logo = styled.img`
    width: 100px;
    cursor: pointer;
`



const InvoicePage = ({ order, onClose }) => {

  const [data, setData] = useState()

  useEffect(() => {
    const getOrderDetails = async () => {
      const details = await getOneOrderById(order);
      setData(details);
    }
    getOrderDetails();
  }, [order])


  function handleDownload() {
    const input = document.getElementById('invoice');
  
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter',
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
      pdf.save('invoice.pdf');
    }, (error) => {
      console.log(error);
    });
  }
  
  // const canvas = await html2canvas(document.querySelector("#invoice"));
  // const imageData = canvas.toDataURL("image/png", 0.2);
  // const pdf = new jsPDF({
  //   orientation: "portrait",
  //   unit: "pt",
  //   format: [612, 792],
  // });
  // pdf.internal.scaleFactor = 2;
  // const pdfWidth = pdf.internal.pageSize.getWidth();
  // const pdfHeight = pdf.internal.pageSize.getWidth() / 2;
  // pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
  // pdf.save("invoice.pdf");
  


  return (

    <Container  >
      {data && data.products &&
      <>
       <Action>
       <Button color="secondary" onClick = {handleDownload} >  <DownloadIcon />  Download Invoice </Button>
       <Button onClick={onClose} variant="contained" color="error"> <ClearIcon /> </Button>
   </Action>
        <Wrapper id="invoice">
          <TopWrapper>
            <Title color={"white"}> BechCha Invoice </Title>
          </TopWrapper>

          <OrderInfoWrapper>
              <Info>
                <InfoName> Recepient </InfoName>
                <InfoValue> {data.recipient} </InfoValue>
              </Info>
              <Info>
                <InfoName> Ship to </InfoName>
                <InfoValue>  {data.shipping} </InfoValue>
              </Info>
              <Info> <InfoName> Date </InfoName>  <InfoValue> {moment(data.createdAt).format('MMMM Do YYYY')} </InfoValue> </Info>

              <Info>
                <InfoName> OrderID </InfoName>
                <InfoValue> {data._id} </InfoValue>
              </Info>
          </OrderInfoWrapper>

          <HR />

          <Title color={"gray"} > Order List </Title>

          <OrderList>
            <TitleContainer>
                <Item flex="2"> Product </Item>
                <Item> Quantity </Item>
                <Item> Price </Item>
                <Item> SubTotal </Item>
              </TitleContainer>
           
                <>
                {data?.products.map((productItem) => (
                   <ItemWrap padd={"20px"} key={productItem._id}>
                    <ItemB flex="2" >{productItem.product.title}</ItemB>
                    <ItemB> {productItem.quantity} </ItemB>
                    <ItemB> {productItem.price} </ItemB>
                    <ItemB> {productItem.price * productItem.quantity} </ItemB>
                  </ItemWrap>
                ))}
                </>
          </OrderList>

          <HR />
          

          <Total>  {`SubTotal - RS ${data.payable}`} </Total>
          <Total> {`Delivery - RS ${200}`} </Total>
          <TotalH>
            {`TOTAL - NPR ${data.payable + 200} `}
          </TotalH>

          <Footer>
              <Logo src='https://github.com/rxmxndai/rxmxndai-assets/blob/main/assets/Bech_Cha.png?raw=true' />
          </Footer>
        </Wrapper>
      </>
      }
    </Container>



  )
}


export default InvoicePage