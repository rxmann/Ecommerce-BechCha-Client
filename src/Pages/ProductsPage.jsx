import styled from "styled-components"


const Products = styled.div`

`

const Left = styled.div`

`

const Right = styled.div`
  
`

const FilterItem = styled.div`

`

const FilterHeading = styled.h2`

`

const InputItem = styled.div`

`

const Input = styled.input`

`
const Label = styled.label`

`



const Image = styled.img`

`



const ProductsPage = () => {

  const imgUrl = "https://dlcdnwebimgs.asus.com/gain/9F8C42DB-36CE-4003-95E1-94E92594127F/fwebp";

  return (
    <Products>
      <Left>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Category </FilterHeading>
          <InputItem>
              <Input type={'checkbox'} id={1} value={1} />
              <Label htmlFor="1" > Keyboards </Label>
          </InputItem>

          <InputItem>
              <Input type={'checkbox'} id={2} value={2} />
              <Label htmlFor="2" > Monitors </Label>
          </InputItem>

          <InputItem>
              <Input type={'checkbox'} id={3} value={3} />
              <Label htmlFor="3" > Headphones </Label>
          </InputItem>

        </FilterItem>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Price </FilterHeading>
          <InputItem>
              <span>0</span>
              <Input type={"range"}/>
              <span>100000</span>
          </InputItem>


        </FilterItem>
        {/* *********************************************************************** */}
        <FilterItem>

          <FilterHeading> Sort </FilterHeading>
          <InputItem>
              <Input  type={"radio"} id="asc" value={"asc"} name={"price"} />
              <Label htmlFor={"asc"} > Price ( Low - High ) </Label>
          </InputItem>

          <InputItem>
              <Input  type={"radio"} id="desc" value={"desc"} name={"price"} />
              <Label htmlFor={"desc"} > Price ( High - Low ) </Label>
          </InputItem>

        </FilterItem>


      </Left>




      <Right>

        <Image src={imgUrl}/>


      </Right>

    </Products>
  )
}

export default ProductsPage