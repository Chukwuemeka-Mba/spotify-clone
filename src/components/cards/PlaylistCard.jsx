import { PlayCircle } from "react-feather";
import styled from "styled-components";
import skep from "../../assets/images/skep.jpg";

function PlaylistCard({ title, image }) {
  return (
    <PlaylistCardContainer>
      <div className="column">
        <img src={image} alt="" />
        <h3>{title}</h3>
      </div>
      <PlayCircle />
      {/* <PauseCircle /> */}
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
  border: 0.5px solid grey;
  border-radius: 5px;
  margin: 0.5rem;
  background-color: #b3b1b158;
  max-width: 200px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 5px 5px 0px 0px;
  }
  svg {
    margin-right: 10px;
  }
`;
