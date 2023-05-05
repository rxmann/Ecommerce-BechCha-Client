import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../Components/User/Products/ProductList";
import styled from "styled-components";
import { getAllProducts, getIndexedProducts } from "../../ApiCalls/ProductApiCalls";

const Container = styled.div`
  height: 90vh;
`;

const Wrapper = styled.div`
  display: flex;
`;

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
`;

const Right = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`

const Info = styled.h3`
  font-weight: 400;
  color: gray;
  padding: 20px;
`

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterHeading = styled.h2`
  font-weight: 400;
`;

const InputItem = styled.div``;

const Input = styled.input``;
const Label = styled.label` 
  margin-left: 10px;
`;

const SearchResults = () => {
  const query = useParams().id;

  const [data, setData] = useState();

  const [limit, setLimit] = useState(100000);
  const [sort, setSort] = useState(null);

  // get category display image
  useEffect(() => {

    const getData = async () => {
      try {
        const prods = await getIndexedProducts({query});
        setData(prods);
      }
      catch (err) {
        console.log(err);
      }

    }

    getData();

  }, [query, sort, limit])



  return (
    <Container>
      <Wrapper>
        <Left>
           <FilterItem>
            <FilterHeading> Price </FilterHeading>
            <InputItem>
              <span>0</span>
              <Input
                type={"range"}
                min={0}
                max={100000}
                onChange={(e) => setLimit(e.target.value)}
              />
              <span>{limit}</span>
            </InputItem>
          </FilterItem>

          <FilterItem>
            <FilterHeading> Sort </FilterHeading>
            <InputItem>
              <Input
                type={"radio"}
                id="asc"
                value={"asc"}
                name={"price"}
                onChange={(e) => setSort(e.target.value)}
              />
              <Label htmlFor={"asc"}> Price ( Low - High ) </Label>
            </InputItem>

            <InputItem>
              <Input
                type={"radio"}
                id="desc"
                value={"desc"}
                name={"price"}
                onChange={(e) => setSort(e.target.value)}
              />
              <Label htmlFor={"desc"}> Price ( High - Low ) </Label>
            </InputItem>
  </FilterItem>    
        </Left>


        <Right>
          <Info> Search results for {query} </Info>
          <ProductList data={data}/>
        </Right>


      </Wrapper>
    </Container>
  );
};

export default SearchResults;
