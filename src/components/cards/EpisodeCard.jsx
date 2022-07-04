// import { PauseCircle, PlayCircle } from "react-feather";
import styled from "styled-components";
// import skep from "../../assets/images/skep.jpg";

function EpisodeCard({ title, image, text }) {
  let slicedText = { text };
  let newText = `${slicedText.text}`;
  let brandNewText = newText.substring(0, 35);
  return (
    <EpisodeCardContainer>
      <div className="column">
        <img src={image} alt="" />
        <div className="text">
          <h3>{title}</h3>
          <p>{brandNewText !== "undefined" && brandNewText + "..."}</p>
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
    width: 184px;
    height: 200px;
    border-radius: 11%;
    padding: 1rem;
  }
  svg {
    margin: 0.5rem;
  }
  .text {
    padding: 1rem;
    max-height: 120px;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      padding: 0.5rem 0;
    }
  }
`;
