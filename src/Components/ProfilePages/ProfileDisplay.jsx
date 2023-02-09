import styled from "styled-components"
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const Card = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    background-color: white;
`
const UserProfile = styled.div`
    flex: 1;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

const Form = styled.form`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

const FormItem = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const Label = styled.label`
    flex: 1;
    font-weight: 500;
    color: gray;
`

const TextInput = styled(TextField)`
    flex: 2;
    color: gray;
`

const UserInfo = styled.div`
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ItemTitle = styled.span`
    font-weight: 200;
    color: gray;
`

const Item = styled.span`
    display: flex;
    gap: 20px;
    align-items: center;
`

const Data = styled.span`
    font-weight: 300;
`
const UsernameWrapper = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px;
    font-weight: 500;
`

const ProfileDisplay = () => {

    const InputData = [{
        type: "text",
        label: "Username",
        defaultValue: "rxman"
    }, {
        type: "email",
        label: "Email",
        defaultValue: "rxman@gmail.com"
    }, {
        type: "text",
        label: "Address",
        defaultValue: "Mandikhatar, Kathmandu"
    }, {
        type: "tel",
        label: "Phone Number",
        defaultValue: 9999999999,
        pattern: {
            inputProps: {
                inputMode: "numeric",
                pattern: `[0-9]{10}`
            }
        }
    }]

    return (
        <Card>
            
            <UserProfile>
                <Avatar alt="Rxman" src={""} sx={{ width: 100, height: 100 }} />
                <UsernameWrapper> @rxmxn <VerifiedIcon color="primary" /> </UsernameWrapper>
                <UserInfo>
                    <ItemTitle> Account Details </ItemTitle>
                    <Item> 
                        <EmailIcon /> 
                        <Data> rxmxn@gmail.com </Data> 
                    </Item> 
                    <Item> 
                        <LocationCityIcon /> 
                        <Data> Mandikhatar, Kathmandu 115 </Data> 
                    </Item> 
                    <Item> 
                        <SmartphoneIcon /> 
                        <Data> +977 8789898987 </Data> 
                    </Item> 
                    <Item>
                        <PermContactCalendarIcon />
                        <Data> 2002 / 02 / 12 </Data>
                    </Item>
                    <ItemTitle> Joined monday, 23rd January </ItemTitle>
                </UserInfo>
            </UserProfile>
            
            
            <Form>
                <FormItem>
                    <Avatar alt="Rxman" src={""} sx={{ width: 100, height: 100 }} />
                    <IconButton color="primary" >
                        <input hidden accept="image/*" type="file" />
                        <AddPhotoAlternateIcon />
                    </IconButton>
                </FormItem>

                {InputData.map((input) => (

                    <FormItem key={input.label}>
                        <Label> {input.label} </Label> 
                        <TextInput 
                            required
                            variant="standard"
                            type={input.type}
                            defaultValue={input.defaultValue}
                            InputProps={input.pattern}
                        />
                    </FormItem>
                ))}

                    <Button type="submit" variant="contained">Update</Button>
            </Form>
        </Card>
    )
}

export default ProfileDisplay