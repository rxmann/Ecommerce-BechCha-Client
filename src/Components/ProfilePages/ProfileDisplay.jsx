import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { Avatar, Button, FormControl, Input, InputLabel } from "@mui/material";

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
    padding: 50px;
    gap: 30px;
`
const FormItem = styled.div`
    
`

const ProfileDisplay = () => {
    return (
        <Card>
            <Form>

            <FormControl>
                <Avatar alt="Rxman" src="" sx={{ width: 100, height: 100 }}/>
            </FormControl>

            <FormControl>
                <label>Username</label>
                <TextField fullWidth />

                <label>Email</label>
                <TextField fullWidth />

                <label>Address</label>
                <TextField fullWidth />

                <label>Phone Number</label>
                <TextField fullWidth />

                <Button fullWidth variant="contained">Update</Button>
            </FormControl>
                
            </Form>
           

        </Card>
    )
}

export default ProfileDisplay