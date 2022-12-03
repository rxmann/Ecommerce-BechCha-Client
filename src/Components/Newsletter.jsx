import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  margin: 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  height: 20vh;
  background-color: #9cb2e0;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin: 10px 0px;
`

const Paragraph = styled.p`
  margin: 10px 0px;
  font-size: 18px;
  font-weight: 400;
`


const InputField = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding: 10px;
  margin: 0px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 200;
`
const Icon = styled(SendIcon)`
`;

const Button = styled.button`
  flex: 1;
  border: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #b6daf0;

  &:hover {
    background-color: #0171b6;
    color: white;

    ${Icon} {
      color: white;
    }
  }
`




const Newsletter = () => {
  return (
    <Container>
          <Title> Newsletter </Title>

          <Paragraph> Get updates from your favourite products </Paragraph>

          <InputField>
            <Input maxLength={30} placeholder='someone@example.com'/>
            <Button>
              <Icon sx={{ fontSize: "30px", cursor: 'pointer', color: 'teal' }} />
            </Button>
          </InputField>
    </Container>
  )
}

export default Newsletter