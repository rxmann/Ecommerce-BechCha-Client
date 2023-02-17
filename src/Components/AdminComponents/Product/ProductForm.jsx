import styled from 'styled-components'
import { Button, MenuItem, Select, TextField } from "@mui/material";
import JoditEditor from "jodit-react";
import { useState  } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import ClearIcon from '@mui/icons-material/Clear';


const Form = styled.form`
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: white;
`

const FormWrapper = styled.div`
    flex: 2;
`

const FormOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

const FormItem = styled.div`
    width: 45%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`
const FormDesc = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 200px;
    margin-bottom: 20px;
    padding-bottom: 20px;
`

const DescWrap = styled.div`
    flex: 3;
`

const Label = styled.span`
  flex: 1;
  color: gray;
`
const TextInput = styled(TextField)`
    flex: 2;
    color: gray;
`

const ImageUploadWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`

const UploadB = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px dashed gray;
    padding: 30px 20px;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ImgContainer =styled.div`
    display: flex;
`

const SmallImage = styled.div`
    position: relative;
`
const Image = styled.img`
    height: 100px;
    padding: 10px;
    object-fit: cover;
`

const DelBtn = styled.div`
    position: absolute;
   top:0;
   right:0;
    z-index:10;
    border: none;
    cursor: pointer;
`

const ProductForm = ({FormType}) => {

    const [values, setValues] = useState({
        title: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
        images: [],
    });

    const config = {
        buttons: ["bold", "italic", "underline", "link", "unlink", "source"],
        readonly: false,
        toolbarAdaptive: false,
        height: 150
    }

    const handleImages = (e) => {
        e.preventDefault();
        const selected = Array.from(e.target.files);
        setValues({...values, "images": selected} )
    }

    const handleDelete = (data) => {
        const imageArray = values["images"];
        const newImageArray = imageArray.filter((image) => image !== data)
        setValues({...values, "images": newImageArray} )
    }

    const handleChange = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("category", "63b945c7eee85ec57531dd36");
        formData.append("price", values.price);
        formData.append("quantity", values.quantity);
        formData.append("description", values.description);
        values.images.forEach((image) => {
            formData.append(`prodImage`, image);
        });

        try {
            console.log(formData);
            // const response = await publicRequest.post("/products/", formData)
            // console.log(response)
        }
        catch (err) {
            console.log(err)
        }
                            
    }

  return (
    <Form onSubmit={handleSubmit}>
    <FormWrapper>
        <FormOptions>
            <FormItem >
                <Label> Name </Label>
                <TextInput 
                        name="title" 
                        value={values["title"]}
                        onChange={handleChange}  
                        size="small" required variant="outlined" type="text"  />
            </FormItem>

            <FormItem >
                <Label>Category</Label>
                <Select 
                    name="category" 
                    sx={{ flex: "2" }} 
                    value={values["category"]} 
                    required
                    onChange={handleChange}>
                    <MenuItem value=""> <em>None</em> </MenuItem>
                    <MenuItem value={"Home Appliances"}>Home Appliances</MenuItem>
                    <MenuItem value={"Office Appliances"}>Office Appliances</MenuItem>
                    <MenuItem value={"Gaming"}>Gaming</MenuItem>
                </Select>
            </FormItem>

            <FormItem >
                <Label>Price</Label>
                <TextInput 
                    name="price" 
                    value={values["price"]}
                    onChange={handleChange}
                    size="small" required variant="outlined" type={"number"} />
            </FormItem>

            <FormItem >
                <Label> Quantity </Label>
                <TextInput 
                    name="quantity" 
                    onChange={handleChange}
                    size="small" required variant="outlined" type={"number"} />
            </FormItem>

            <FormDesc style={{ flexShrink: 4 }}>
                <Label> Description </Label>
                <DescWrap>
                    <JoditEditor
                        config={config}
                        value={values["description"]}
                        onBlur={con => setValues({...values, "description": con})}
                    />
                </DescWrap>
            </FormDesc>

            
            <ImageUploadWrapper>
                <Label>Images</Label>
                <Wrap>
                    <UploadB>
                        <UploadIcon />
                        3 images
                        <input 
                            name="images"
                            hidden 
                            type="file" 
                            multiple 
                            onChange={handleImages}
                            accept='image/*' />
                    </UploadB>
                    <ImgContainer>
                        {values["images"] && 
                            values["images"].map(image => (
                                <SmallImage key={image.name} >
                                    <Image src={URL.createObjectURL(image)} />
                                    <DelBtn onClick={() => handleDelete(image)}> <ClearIcon color='error'  /> </DelBtn>
                                </SmallImage>
                            )) 
                        }
                    </ImgContainer>
                </Wrap>
            </ImageUploadWrapper>

        </FormOptions>
    </FormWrapper>
    <Button type="submit" fullWidth variant="contained"> {FormType} </Button>
</Form>
  )
}

export default ProductForm