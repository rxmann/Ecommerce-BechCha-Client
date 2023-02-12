import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import ProductList from "../../Components/User/Products/ProductList"
import { publicRequest } from "../../requestMethods/requestMethods"


const Products = styled.div`
  display: flex;
  background-color: #f5f7f8;
`

const Left = styled.div`
  flex: 1;
  position: sticky;
  top: 70px;
  max-width: 250px;
  padding: 20px 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FilterHeading = styled.h2`
  font-weight: 400;
`

const InputItem = styled.div`
  
`

const Input = styled.input`

`
const Label = styled.label`
  margin-left: 10px;
`
const Right = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
`

const ImageContainer = styled.div`
  height: 30vh;
  width: 100%;
 background-color: #aaaaaa;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`



const ProductsPage = () => {

  const [limitPrice, setLimitPrice] = useState(100000);
  const [sort, setSort] = useState(null);
  const [CategoryImage, setCategoryImage] = useState();
  // Children for client children for api
  const [Category, setCategory] = useState();
  const [Children, setChildren] = useState();

  const id = useParams().id;


  // get category display image
  useEffect(() => {
    const getCatImage = async () => {
      try {
        const response = await publicRequest.get(`/categories/${id}`);
        const { category, children } = response.data;
        const catDisplay = category.display;
        setCategoryImage(btoa(catDisplay));
        setCategory(category);
        setChildren(children);
        console.log(children);
      }
      catch (err) {
        console.log(err);
      }

    }

    getCatImage();

  }, [id])


  return (
    <Products>
      <Left>
        {/* *********************************************************************** */}

        {Children?.length > 0 &&
        Children.map((filter) => (
          <FilterItem key={filter._id}>
            <FilterHeading> Category </FilterHeading>
            <InputItem>
              <Input type={'checkbox'} id={1} value={1} />
              <Label htmlFor="1" > {filter.name} </Label>
            </InputItem>
          </FilterItem>
        ))
          
        }

        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Price </FilterHeading>
          <InputItem>
            <span>0</span>
            <Input type={"range"} min={0} max={100000} onChange={e => setLimitPrice(e.target.value)} />
            <span>{limitPrice}</span>
          </InputItem>


        </FilterItem>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Sort </FilterHeading>
          <InputItem>
            <Input type={"radio"} id="asc" value={"asc"} name={"price"} onChange={e => setSort(e.target.value)} />
            <Label htmlFor={"asc"} > Price ( Low - High ) </Label>
          </InputItem>

          <InputItem>
            <Input type={"radio"} id="desc" value={"desc"} name={"price"} onChange={e => setSort(e.target.value)} />
            <Label htmlFor={"desc"} > Price ( High - Low ) </Label>
          </InputItem>

        </FilterItem>


      </Left>




      <Right>
        <ImageContainer>
          {Category && <Image src={`data:image/png;base64,${CategoryImage}`} />}
        </ImageContainer>

        <ProductList limitPrice={limitPrice} sort={sort} id={id} />

      </Right>

    </Products>
  )
}

export default ProductsPage