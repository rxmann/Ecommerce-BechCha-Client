import styled from "styled-components"
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Card = styled.div`
    margin: 20px 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    width: 100%;
    height: 600px;
    display: flex;
    `
const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 40px;
    gap: 30px;
`

const DispalyImage = styled.img`
    flex: 1.3;
    overflow: hidden;
    object-fit: cover;
`

const FormItem = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const Label = styled.label`
    flex: 1;
`

const TextInput = styled(TextField)`
    flex: 2;
    color: gray;
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
    const Rightdisplay = "https://img.freepik.com/free-photo/wooden-symbol-shopping-cart-online-shopping-concept_1387-883.jpg?w=1380&t=st=1674658539~exp=1674659139~hmac=c96a59e31c9a67c01e2f8a43b9760855aad6c1fee18d29ee3a395f16740e353c";
    const Avatarr = "data:image/jpeg;base64,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"
    
    return (
        <Card>
            <Form>
                <FormItem>
                    <Avatar alt="Rxman" src={Avatarr} sx={{ width: 100, height: 100 }} />
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <AddPhotoAlternateIcon />
                    </IconButton>
                </FormItem>

                {InputData.map((input) => (

                    <FormItem>
                        <Label> {input.label} </Label> 
                        <TextInput 
                            required
                            variant="filled"
                            type={input.type}
                            defaultValue={input.defaultValue}
                            InputProps={input.pattern}
                        />
                    </FormItem>
                ))}

                    <Button type="submit" variant="contained">Update</Button>
            </Form>
            
            <DispalyImage src={Rightdisplay} />
        </Card>
    )
}

export default ProfileDisplay