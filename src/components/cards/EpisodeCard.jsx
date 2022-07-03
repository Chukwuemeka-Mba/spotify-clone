import { PauseCircle, PlayCircle } from "react-feather";
import styled from "styled-components";
import skep from "../../assets/images/skep.jpg";

function EpisodeCard() {
  return (
    <EpisodeCardContainer>
      <div className="column">
        <img src={skep} alt="" />
        <div className="text">
          <h3>Skepta!</h3>
          <p>Dive in to the best of the King of Grime</p>
        </div>
      </div>
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
  border-radius: 5px;
  margin: 0.5rem;
  border: 0.5rem solid #202020bc;
  background-color: #202020bc;
  max-width: 200px;
  min-width: 200px;
  img {
    width: 100%;
    height: 200px;
    border-radius: 11%;
    padding: 1rem;
  }
  svg {
    margin: 0.5rem;
  }
  .text {
    padding: 1rem;
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
      padding: 0.5rem 0;
    }
  }
`;
