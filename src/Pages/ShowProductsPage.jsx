import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import styled from "styled-components"
import ProductList from "../Components/Products/ProductList"
import { publicRequest } from "../requestMethods/requestMethods"


const Products = styled.div`
  padding: 30px 50px;
  display: flex;
  background-color: #f5f7f8;
`

const Left = styled.div`
  flex: 1;
  position: sticky;
  height: 100%;
  top: 100px;
`

const Right = styled.div`
  flex: 3;
`

const FilterItem = styled.div`
  margin-bottom: 30px;
`

const FilterHeading = styled.h2`
  font-weight: 400;
  margin-bottom: 20px;
`

const InputItem = styled.div`
  margin-bottom: 10px;
`

const Input = styled.input`

`
const Label = styled.label`
  margin-left: 10px;
`



const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 50px;
`



const ProductsPage = () => {

  const [limitPrice, setLimitPrice] = useState(100000);
  const [sort, setSort] = useState(null);
  const [CategoryImage, setCategoryImage] = useState();
  const [Category, setCategory] = useState();
  const id = useParams().id;


  // get category display image
  useEffect(() => {
    async function getCatImage () {
      const response = await publicRequest.get(`/categories/${id}`);
      const catDisplay = response.data.category.display;
      const binaryString = Array.from(new Uint8Array(catDisplay.data), byte => String.fromCharCode(byte)).join("");
      setCategoryImage(btoa(binaryString));
      setCategory(response.data.category);
    } 

    getCatImage();
    
  }, [id])


  return (
    <Products>
      <Left>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Category </FilterHeading>
          <InputItem>
              <Input type={'checkbox'} id={1} value={1} />
              <Label htmlFor="1" > {Category?.children} </Label>
          </InputItem>
        </FilterItem>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Price </FilterHeading>
          <InputItem>
              <span>0</span>
              <Input type={"range"} min={0} max={100000} onChange={e => setLimitPrice(e.target.value)}/>
              <span>{limitPrice}</span>
          </InputItem>


        </FilterItem>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Sort </FilterHeading>
          <InputItem>
              <Input  type={"radio"} id="asc" value={"asc"} name={"price"} onChange={e => setSort(e.target.value)} />
              <Label htmlFor={"asc"} > Price ( Low - High ) </Label>
          </InputItem>

          <InputItem>
              <Input  type={"radio"} id="desc" value={"desc"} name={"price"} onChange={e => setSort(e.target.value)} />
              <Label htmlFor={"desc"} > Price ( High - Low ) </Label>
          </InputItem>

        </FilterItem>


      </Left>




      <Right>

        <Image src={`data:image/png;base64,${CategoryImage}`} />

        <ProductList limitPrice={limitPrice} sort={sort} id={id} />

      </Right>

    </Products>
  )
}

export default ProductsPage