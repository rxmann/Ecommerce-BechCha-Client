import styled from "styled-components";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Container = styled.div`
  padding: 10px 30px;
  background-color: white;
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Profiler = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const PostedOn = styled.span`
    font-weight: 400;
    font-size: 10px;
`

const BottomWrap = styled.div``;

const ReviewComment = styled.div`
    padding: 10px 0px;
    font-weight: 400;
`;
const UserProfile = styled.p`
    font-weight: 500;
    font-size: 14px;
`;

const Star = styled.div`
    display: flex;
    align-items: center;
`;

const ReviewComponent = ({data}) => {

  
  return (
    <Container>
      <TopWrap>
            <Profiler>
            <UserProfile> {data?.user?.username} </UserProfile>
        <Star>
          {Array(5).fill().map((_, index) => (
               <StarIcon
               key={index}
               sx={{
                 cursor: 'pointer',
                 color: index < data?.rating ? 'gold' : 'gray',
               }}
             />
            ))}
        </Star>
            </Profiler>

            <PostedOn> 
                Posted On: { data?.updatedAt }
            </PostedOn>
      </TopWrap>

      <BottomWrap>
        <ReviewComment> 
            {data?.comment}
        </ReviewComment>
        <Button> </Button>
      </BottomWrap>
    </Container>
  );
};

export default ReviewComponent;
