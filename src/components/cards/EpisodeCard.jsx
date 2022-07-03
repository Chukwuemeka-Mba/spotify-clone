import { PauseCircle, PlayCircle } from "react-feather";
import styled from "styled-components";
import skep from "../../assets/images/skep.jpg";

function EpisodeCard() {
  return (
    <EpisodeCardContainer>
      <div className="column">
        <img src={skep} alt="" />
        <h3>Skepta!</h3>
      </div>
      <PlayCircle size={36} />
      {/* <PauseCircle /> */}
    </EpisodeCardContainer>
  );
}

export default EpisodeCard;
const EpisodeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  margin: 0.5rem;
  background-color: #b3b1b158;
  max-width: 200px;
  img {
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }
  svg {
    margin: 0.5rem;
  }
`;
