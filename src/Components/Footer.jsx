import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Container = styled.div`
    display: flex;    
    background-color: #141414;
    color: gray;
    height: 100%;
`

const LeftDiv = styled.div`
    flex: 1;
    padding: 20px 50px;
`

const Description = styled.p`
    margin: 20px 0px;

    &:hover {
        color: white;
    }
`


const MediaContainer = styled.div`
    display: flex;
`

const MediaIcon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1, 1.1);
    }
`


const MidDiv = styled.div`
    flex: 1;
    padding: 20px 50px;
`

const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;

    &:hover {
        color: white;
        cursor: pointer;
    }
`

const RightDiv = styled.div`
    flex: 1;
    padding: 20px 50px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    &:hover {
        color: white;
    }
`

const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
      
      <LeftDiv>
          <Title> Bech-cha </Title>
          <Description> Shop with Bech-cha Online  </Description>
          <MediaContainer>
            <MediaIcon color="3b5999" > <FacebookIcon /> </MediaIcon>
            <MediaIcon color="bc2a8d" > <InstagramIcon /> </MediaIcon>
            <MediaIcon color="00acee" > <TwitterIcon /> </MediaIcon>
            <MediaIcon color="3b5999" > <EmailIcon /> </MediaIcon>
          </MediaContainer>
      </LeftDiv>

      <MidDiv>
          <Title> Useful Links </Title>
          <List>
                <ListItems> Cart </ListItems>
                <ListItems> My Account </ListItems>
                <ListItems> Wishlist </ListItems>
                <ListItems> Order Tracking </ListItems>
                <ListItems> Terms </ListItems>
            </List>
      </MidDiv>
    
    
      <RightDiv >
        <Title>Contacts</Title>
            <ContactItem>
               <LocationOnIcon  style={{marginRight: "10px", color: 'crimson'}} /> Mandikhatar, Kathmandu
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight: "10px", color: 'darkslateblue'}}/> +977 9848564099, 01 4438592
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight: "10px" , color: 'dodgerblue'}}/> bechchaonline@gmail.com
            </ContactItem>
            <Payment src = "" />
      </RightDiv>

    </Container>
  )
}

export default Footer