import { PlayCircle } from "react-feather";
import styled from "styled-components";

function PlaylistCard({ title, image }) {
  return (
    <PlaylistCardContainer>
      <div className="column">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>{title}</h3>
        <PlayCircle />
      </div>
    </PlaylistCardContainer>
  );
}

export default PlaylistCard;
const PlaylistCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  margin: 0.5rem;
  background-color: #b3b1b158;
  max-width: 200px;
  img {
    width: 200px;
    height: 200px;
  }
  svg {
    margin: 5px 0;
  }
  .text {
    padding: 0.5rem 1rem;
    h3 {
      font-size: 15px;
    }
  }
`;
