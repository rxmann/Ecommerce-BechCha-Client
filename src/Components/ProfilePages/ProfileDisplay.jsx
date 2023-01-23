import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { Avatar, Button, FormControl, Input, InputLabel } from "@mui/material";

const Card = styled.div`
    margin: 20px 50px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    width: 100%;
`
const Form = styled.form`
    display: flex;
    padding: 50px;
    gap: 30px;
`
const ProfileDisplay = () => {
    return (
        <Card>
            <Form>

            <FormControl>
                <Input fullWidth id="my-input" aria-describedby="my-helper-text" />
            </FormControl>

            <Avatar alt="Rxman" src="" sx={{ width: 100, height: 100 }}/>

                <label>Username</label>
                <TextField fullWidth />

                <label>Email</label>
                <TextField fullWidth />

                <label>Address</label>
                <TextField fullWidth />

                <label>Phone Number</label>
                <TextField fullWidth />

                <Button fullWidth variant="contained">Update</Button>
                
            </Form>
           

        </Card>
    )
}

export default ProfileDisplay