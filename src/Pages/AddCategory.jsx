import { useState } from "react"
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { userRequest } from "../requestMethods/requestMethods"

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Form = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 50vw;
    vertical-align: middle;
`

const InputField = styled.input`
    font-size: 24px;
    padding: 3px;
`
const Button = styled.button`
    margin: 10px;
    padding: 10px;
`


const SpanMessage = styled.div`
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
`



const AddCategory = () => {

    const [catName, setCatName] = useState("");

    const [error, setError] = useState("");


    const handleAddCat = async (e) => {
        e.preventDefault();

        console.log("check");
        try {
            const response = await userRequest.post("/category/add", {
                catName
            })
            console.log("Add successful\n", response);
        }
        catch (err) {
            console.log(err);
            setError(err)
        }
    }


  return (
    <Container>
        <Form >
                <TextField
                        value={catName}
                        onChange={(e) => {setCatName(e.target.value)}}
                        required
                        label="Category Name"
                        type="text"
                />

            <Button onClick={handleAddCat}> Add </Button>

            {error? <SpanMessage> {error} </SpanMessage> : ""}
        </Form>
    </Container>
  )
}

export default AddCategory