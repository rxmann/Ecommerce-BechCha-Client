import styled from "styled-components"
import { Button, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";

const Container = styled.div`
    padding: 30px;
    display: flex;
    gap: 50px;
`

const ProdImageContainer = styled.div`
    flex: 1;
`

const ProdImage = styled.img`
    width: 100%;
    object-fit: contain;
`

const Form = styled.form`
    flex: 4;
`



const FormWrapper = styled.div`
    flex: 2;
`

const FormOptions =styled.div`
     display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const FormItem = styled.div`
    width: 45%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`

const Label = styled.span`
  flex: 1;
  color: gray;
`
const TextInput = styled(TextField)`
    flex: 2;
    color: gray;
`

const ProductUpdate = () => {

    const image = "https://img.freepik.com/premium-vector/social-media-post-design-ecommerce-product-marketing_528542-192.jpg?w=2000"

    const [category, setCategory] = useState("Gaming");

    return (
        <Container>

                    <ProdImageContainer >
                        <ProdImage src={image} />
                    </ProdImageContainer>
            <Form>
                <FormWrapper>
                <FormOptions>
                    <FormItem >
                        <Label> Name </Label>
                        <TextInput size="small" required variant="outlined" type="text" defaultValue={"Apple Apple"}/>
                    </FormItem>

                    <FormItem >
                        <Label>Category</Label>
                        <Select sx={{flex: "2"}} value={category} onChange={(e) => setCategory(e.target.value)}>
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={"Home Appliances"}>Home Appliances</MenuItem>
                            <MenuItem value={"Office Appliances"}>Office Appliances</MenuItem>
                            <MenuItem value={"Gaming"}>Gaming</MenuItem>
                        </Select>
                    </FormItem>

                    <FormItem >
                        <Label>Price</Label>
                        <TextInput size="small" required variant="outlined" type={"number"} defaultValue={90000} />
                    </FormItem>

                    <FormItem >
                        <Label> Stock </Label>
                        <TextInput size="small" defaultValue={12} required variant="outlined" type={"number"}/>
                    </FormItem>

                    <FormItem  style={{flexShrink: 4}}>
                        <Label> Description </Label>
                        <TextareaAutosize required variant="outlined" />
                    </FormItem>

                </FormOptions>

                </FormWrapper>

                <Button type="submit" sx={{ width: "250px", height: "60px" }} variant="contained">Update</Button>
            </Form>
        </Container>
    )
}

export default ProductUpdate