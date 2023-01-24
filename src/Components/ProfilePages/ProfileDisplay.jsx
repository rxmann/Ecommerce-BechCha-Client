import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { Avatar, Button, FormControl } from "@mui/material";

const Card = styled.div`
    margin: 20px 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    width: 100%;
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
    gap: 50px;
`

const Label = styled.label`
    width: 150px;
`

const ProfileDisplay = () => {
    return (
        <Card>
            <Form>
                <FormItem>
                    <Avatar alt="Rxman" src="" sx={{ width: 100, height: 100 }} />
                </FormItem>

                <FormItem>
                    <Label>Username</Label>
                    <TextField variant="standard" />

                    <Label>Email</Label>
                    <TextField variant="standard" />
                </FormItem>
                <FormItem>
                    <Label>Address</Label>
                    <TextField variant="standard" />
                    <Label>Phone Number</Label>
                    <TextField variant="standard" />
                </FormItem>
                <Button variant="contained">Update</Button>
            </Form>


        </Card>
    )
}

export default ProfileDisplay