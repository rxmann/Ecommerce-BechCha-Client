import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getCategoryProductsCount } from "../../../ApiCalls/ProductApiCalls";
import DonutChart from "react-donut-chart";

const Container = styled.div`
  background-color: white;
  padding: 30px;
  margin: 10px 0px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Chhart = styled.div`
    padding: 20px;
`;

const CatProdPieChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCatProdData = async () => {
      const response = await getCategoryProductsCount();
      const formattedData = response.map((datum) => ({
        id: datum.category,
        label: datum.category,
        value: datum.productsCount,
      }));

      setData(formattedData);
    };
    getCatProdData();
  }, []);




  return (
    <Container>
      <Title> Products Distribution </Title>
      <Chhart>{data && <DonutChart data={data}  paddingAngle={5} width={600} height={400} />}</Chhart>

    </Container>
  );
};

export default CatProdPieChart;
