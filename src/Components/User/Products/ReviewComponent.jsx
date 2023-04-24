import styled from "styled-components";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const Container = styled.div`
  padding: 10px;
  background-color: white;
`;

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profiler = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const PostedOn = styled.span`
    font-weight: 20px;
`

const BottomWrap = styled.div``;

const ReviewComment = styled.div`
    padding: 10px 0px;
    font-weight: 400;
`;
const UserProfile = styled.p`
    font-weight: 500;
    font-size: 16px;
`;

const Star = styled.div`
    display: flex;
    align-items: center;
    color: gold;
`;

const ReviewComponent = () => {
  return (
    <Container>
      <TopWrap>
            <Profiler>
            <UserProfile> Roman@07 </UserProfile>
        <Star>
          {Array(5)
            .fill()
            .map((_, index) => (
              <StarIcon size="small" key={index} /> 
            ))}
        </Star>
            </Profiler>

            <PostedOn> </PostedOn>
      </TopWrap>

      <BottomWrap>
        <ReviewComment> 
            Wow! I really like this thing. It was in a perfect condition and I strongly recommend buying it.
        </ReviewComment>
        <Button> </Button>
      </BottomWrap>
    </Container>
  );
};

export default ReviewComponent;
