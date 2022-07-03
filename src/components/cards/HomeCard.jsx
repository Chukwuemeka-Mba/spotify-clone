import { PauseCircle, PlayCircle } from "react-feather";
import styled from "styled-components";
import skep from "../../assets/images/skep.jpg";

function HomeCard() {
  return (
    <HomeCardContainer>
      <div className="row">
        <img src={skep} alt="" />
        <h3>Skepta!</h3>
      </div>
      <PlayCircle />
      <PauseCircle />
    </HomeCardContainer>
  );
}

export default HomeCard;
const HomeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  margin: 0.5rem;
  background-color: #b3b1b158;
  img {
    width: 12%;
    margin-right: 1rem;
    border-radius: 5px 0px 0px 5px;
  }
  svg {
    margin-right: 10px;
  }
`;
