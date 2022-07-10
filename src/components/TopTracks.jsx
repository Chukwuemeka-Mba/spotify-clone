import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";
import axios from "axios";
// components
import TopTrack from "./cards/TopTrack";

function TopTracks() {
  const [{ token, topTracks, audioFeatures }, dispatch] = useStateProvider();
  useEffect(() => {
    const getUserTopTracks = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const topTracks = items.map(({ album, name, id }) => {
        let image = album.images[0].url;
        album = album.name;
        return { album, name, id, image };
      });
      dispatch({ type: reducerCases.SET_TOP_TRACKS, topTracks });
    };
    getUserTopTracks();
  }, [token, dispatch]);
  return (
    <TopContainer>
      <div className="cards row">
        {topTracks.length > 0 &&
          topTracks.map(({ album, name, id, image }) => {
            return (
              <TopTrack
                key={id}
                id={id}
                image={image}
                album={album}
                name={name}
              />
            );
          })}
      </div>
    </TopContainer>
  );
}

export default TopTracks;
const TopContainer = styled.div`
  overflow-y: scroll;
  .cards {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 3rem 1rem;
    margin-bottom: 9rem;
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
  }
`;
