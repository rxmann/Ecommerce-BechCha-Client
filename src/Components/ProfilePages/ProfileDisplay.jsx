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
    display: flex;
    `
const Form = styled.form`
    flex: 1;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 30px;
`

const DispalyImage = styled.div`
    flex: 1;
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

    return (
        <Card>
            <Form>
                <FormItem>
                    <Avatar alt="Rxman" src="" sx={{ width: 100, height: 100 }} />
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

            <DispalyImage></DispalyImage>


        </Card>
    )
}

export default ProfileDisplay