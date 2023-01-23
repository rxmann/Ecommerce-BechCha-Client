import styled from "styled-components"
import Button from '@mui/material/Button';
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

import {
    FormControl,
    InputLabel,
    IconButton,
    OutlinedInput,
    InputAdornment
} from "@mui/material";


const Card = styled.div`
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    padding: 20px;
`




const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`


const FormCtrl = styled(FormControl)`
`



const ProfileDisplay = () => {



    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")



    return (
        <Card>
            <Form  >
                <FormCtrl>
                    <InputLabel> Username </InputLabel>
                    <OutlinedInput
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        label="Username"
                        type="text"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton  >
                                    <PersonIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormCtrl>

                <FormCtrl>
                    <InputLabel> Email </InputLabel>
                    <OutlinedInput
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                        label="Email"
                        type="email"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton  >
                                    <MailIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormCtrl>




                <Button
                    type="submit"
                    size="large"
                    variant="contained">
                    Update
                </Button>
            </Form>

        </Card>
    )
}

export default ProfileDisplay