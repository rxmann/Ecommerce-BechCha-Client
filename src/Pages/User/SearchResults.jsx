import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../Components/User/Products/ProductList";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { getIndexedProducts } from "../../ApiCalls/ProductApiCalls";
import { Button } from "@mui/material";
import Fetching from "../../Components/User/EmptyView/Fetching";

const Container = styled.div`
  min-height: 80vh;
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
`;

const Info = styled.h3`
  font-weight: 400;
  color: gray;
  padding: 20px;
`;

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

const Star = styled.div`
  display: flex;
  align-items: center;
`;

const FullPage = styled.div`
  height: 60vh;
  margin: 20px;
  background-color: white;
`

const PaginationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const PageNumber = styled.h3`
  color: gray;
  font-weight: 600;
  border: 1px solid #0171b6;
  padding: 5px 10px;
`

const SearchResults = () => {
  
  const query = useParams().id;

  const [data, setData] = useState();
  const singlePageProductsCount = 12;
  const [page, setPage] = useState(1);
  const [totalProductsPages, setTotalProductsPages] = useState();
  const [products, setProducts] = useState(null);

  const [limit, setLimit] = useState(1000000);
  const [sort, setSort] = useState(null);
  const [rateSort, setRateSort] = useState(0);

  // get category display image
  useEffect(() => {
    const getData = async () => {
      try {
        let prods = await getIndexedProducts({ query, sort, limit });
        prods = prods.filter( prodd => prodd.averageRating >= rateSort);
        setProducts(prods);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [query, sort, limit, rateSort]);


  useEffect(() => {
    const sliceProducts = () => {
      const startIndex = (page-1) * singlePageProductsCount;
      const endIndex = startIndex + singlePageProductsCount;

      setTotalProductsPages(Math.ceil(products.length / singlePageProductsCount));

      const splicedProducts = products?.slice(startIndex, endIndex)
      // console.log(splicedProducts, startIndex, endIndex, singlePageProductsCount, totalProductsPages);
      setData(splicedProducts);
    }

    products?.length > 0 && sliceProducts();

  }, [page, products])


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

          <FilterItem>
            <FilterHeading> Ratings  </FilterHeading>
            <Star>
            {Array(5).fill().map((_, index) => {
                  return (
                    <StarIcon
                      key={index}
                      onClick={() => setRateSort(index+1)}
                      sx={{
                        cursor: "pointer",
                        color: index < rateSort ? "gold" : "gray",
                      }}
                    />
                  );}
            )}
            </Star>
          </FilterItem>

          <FilterItem>
            <Button color="error" onClick={() => {
              setLimit(0);
              setRateSort(0);
              setSort(null)
            }}> reset filters </Button>
          </FilterItem>


          <FilterItem>
          <PaginationSection>
              <Button  disabled={page === 1}  variant="contained" onClick={() => page > 1 && setPage(page - 1)}> Previous </Button>
              <PageNumber > {page} </PageNumber>
              <Button   disabled={page === totalProductsPages}  variant="contained"   onClick={() => page < totalProductsPages && setPage(page + 1)} > Next </Button>
          </PaginationSection>
          </FilterItem>


        </Left>

        <Right>
          <Info> Search results for {query} </Info>
          { 
          data?.length > 0 ?
          <ProductList data={data} />
          : <FullPage> <Fetching type="Empty" Message={`No results for products "${query}"`} />  </FullPage>
          }

          {/* <PaginationSection>
              <Button size="large"  disabled={page === 1} fullWidth variant="contained" onClick={() => page > 1 && setPage(page - 1)}> Previous </Button>
              <PageNumber > {page} </PageNumber>
              <Button  size="large" disabled={page === totalProductsPages} fullWidth variant="contained"   onClick={() => page < totalProductsPages && setPage(page + 1)} > Next </Button>
          </PaginationSection> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SearchResults;
