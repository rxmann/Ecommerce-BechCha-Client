import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { Avatar, Button, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Card = styled.div`
    margin: 20px 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 30px;
`
const FormItem = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const Label = styled.label`
    width: 300px;
`

const ProfileDisplay = () => {
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

                <FormItem>
                    <Label>Username</Label>
                    <TextField fullWidth type={"text"} variant="standard" required />
                </FormItem>
                <FormItem>
                    <Label>Email</Label>
                    <TextField fullWidth type={"email"} variant="standard" required />
                </FormItem>
                <FormItem>
                    <Label>Address</Label>
                    <TextField fullWidth type={"text"} variant="standard" required />
                </FormItem>
                <FormItem>
                    <Label>Phone Number</Label>
                    <TextField fullWidth
                        InputProps={{
                            inputProps: {
                                inputMode: "numeric",
                                pattern: `[0-9]{10}`
                            }
                        }}
                        variant="standard"
                        required
                    />
                </FormItem>
                <Button type="submit" variant="contained">Update</Button>
            </Form>


        </Card>
    )
}

export default ProfileDisplay