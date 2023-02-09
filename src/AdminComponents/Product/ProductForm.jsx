import styled from 'styled-components'
import { Button, MenuItem, Select, TextField } from "@mui/material";
import JoditEditor from "jodit-react";
import { useRef, useState  } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import ClearIcon from '@mui/icons-material/Clear';


const Form = styled.form`
    flex: 3;
    padding: 20px;
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

const ProductForm = () => {

    const editor = useRef(null);
    const [content, setContent] = useState();
    const config = {
        buttons: ["bold", "italic", "underline", "link", "unlink", "source"],
        readonly: false,
        toolbarAdaptive: false,
        height: 150
    }
    const [category, setCategory] = useState("Gaming");
    const [images, setImages] = useState(null);


    const handleImages = (e) => {
        e.preventDefault();
        const selection = e.target.files;
        const imageArr = Array.from(selection)
        
        const imageURLArr = imageArr.map((imgFile) => {
            return URL.createObjectURL(imgFile)
        })

        setImages(imageURLArr);
    }

    const handleDelete = (data) => {
        setImages(images.filter( img => img !== data ) )
    }


  return (
    <Form>
    <FormWrapper>
        <FormOptions>
            <FormItem >
                <Label> Name </Label>
                <TextInput size="small" required variant="outlined" type="text" defaultValue={"Apple Apple"} />
            </FormItem>

            <FormItem >
                <Label>Category</Label>
                <Select sx={{ flex: "2" }} value={category} onChange={(e) => setCategory(e.target.value)}>
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
                <TextInput size="small" defaultValue={12} required variant="outlined" type={"number"} />
            </FormItem>

            <FormDesc style={{ flexShrink: 4 }}>
                <Label> Description </Label>
                <DescWrap>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)}
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
                            hidden 
                            type="file" 
                            multiple 
                            onChange={handleImages}
                            accept='image/*' />
                    </UploadB>
                    <ImgContainer>
                        {images && 
                            images.map(image => (
                                <SmallImage key={image} >
                                    <Image src={image} />
                                    <DelBtn onClick={() => handleDelete(image)}> <ClearIcon color='error'  /> </DelBtn>
                                </SmallImage>
                            )) 
                        }
                    </ImgContainer>
                </Wrap>
            </ImageUploadWrapper>

        </FormOptions>
    </FormWrapper>
    <Button type="submit" fullWidth variant="contained">Update</Button>
</Form>
  )
}

export default ProductForm