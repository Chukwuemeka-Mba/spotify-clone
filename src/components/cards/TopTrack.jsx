import styled from "styled-components";
import Fade from "react-reveal/Fade";
// import { useEffect } from "react";
// import { useStateProvider } from "../../utils/StateProvider";
// import { reducerCases } from "../../utils/Constants";
// import axios from "axios";

function TopTrack({ album, name, id, image }) {
  // const [{ token }, dispatch] = useStateProvider();
  // useEffect(() => {
  //   const getAudioFeatures = async () => {
  //     const response = await axios.get(
  //       `https://api.spotify.com/v1/audio-features/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const audioFeatures = response.data;
  //     dispatch({ type: reducerCases.SET_AUDIO_FEATURES, audioFeatures });
  //   };
  //   getAudioFeatures();
  // }, [token, dispatch]);
  return (
    <TopTrackContainer>
      <Fade bottom>
        <div className="track">
          <img src={image} alt="" />
          <div className="track_text">
            <h4>{album}</h4>
            <p>{name}</p>
          </div>
        </div>
      </Fade>
    </TopTrackContainer>
  );
}

export default TopTrack;

const TopTrackContainer = styled.div`
  .track {
    display: flex;
    flex-direction: row;
    align-items: left;
    color: #ccc;
    width: 300px;
    img {
      width: 60px;
      margin-right: 10px;
    }
  }
`;
