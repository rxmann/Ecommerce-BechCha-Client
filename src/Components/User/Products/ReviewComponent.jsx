import styled from "styled-components";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { handleReviewDelete } from "../../../ApiCalls/ProductApiCalls";

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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const PostedOn = styled.span`
  font-weight: 400;
  font-size: 10px;
`;

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

const ReviewComponent = ({ data }) => {

  const { currentUser } = useSelector((state) => state.user);


  const handleDelete = async ( ) => {
      await handleReviewDelete( data.user?._id, data?._id);
  }

  return (
    <Container>
      <TopWrap>
        <Profiler>
          <Left>
            <UserProfile> {data?.user?.username} </UserProfile>
            <Star>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      cursor: "pointer",
                      color: index < data?.rating ? "gold" : "gray",
                    }}
                  />
                ))}
            </Star>
          </Left>

          <Right>
            {currentUser &&
              (currentUser?._id === data?.user?._id || currentUser?.isAdmin) && (
                <Button  onClick={handleDelete}>
                  {" "}
                  <DeleteIcon  sx={{ cursor: "pointer", color: "gray" }} />{" "}
                </Button>
              )}
          </Right>
        </Profiler>

        <PostedOn>Posted On: {data?.updatedAt}</PostedOn>
      </TopWrap>

      <BottomWrap>
        <ReviewComment>{data?.comment}</ReviewComment>
        <Button> </Button>
      </BottomWrap>
    </Container>
  );
};

export default ReviewComponent;
