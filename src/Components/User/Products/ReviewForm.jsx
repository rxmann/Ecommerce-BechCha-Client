import styled from "styled-components";
import { Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from '@mui/icons-material/Star';
import { handleReviewPost } from "../../../ApiCalls/ProductApiCalls";

const Container = styled.div`
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  z-index: 999;
`;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;


const Title = styled.h3`
  color: gray;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ReviewForm = ({ onSubmit, onCancel, prod }) => {
  const [comment, setComment] = useState();
  const [rating, setRating] = useState()

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!rating || rating <= 0) return alert("Please rate stars 1-5!")
    console.log(prod, comment, rating);

    await handleReviewPost(rating, comment, prod);

    onSubmit();
  };

  return (
    <Container>
      <Wrap>
        <Title>Review this product</Title>

        <CloseIcon
          onClick={onCancel}
          size="large"
          sx={{ backgroundColor: "red", color: "#ffffff", padding: "5px" }}
        />
      </Wrap>

      <Wraper>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          sx={{
            cursor: 'pointer',
            color: index < rating ? 'gold' : 'gray',
          }}
          onClick={() => setRating(index + 1)}
        />
      ))}
      </Wraper>

      <Form onSubmit={(e)=>handleReviewSubmit(e)}>
        <TextareaAutosize
          style={{
            width: "500px",
            height: "100px",
            padding: "20px",
            fontSize: "16px",
          }}
          required
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Leave a review..."
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewForm;
