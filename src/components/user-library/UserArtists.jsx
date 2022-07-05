import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import ArtistCard from "../cards/ArtistCard";

export default function UserArtists() {
  const [{ token, artists }, dispatch] = useStateProvider();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/following?type=artist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data.artists;
      const artists = items.map(({ name, id, images }) => {
        images = images[0].url;
        return { name, id, images };
      });
      dispatch({ type: reducerCases.SET_ARTISTS, artists });
    };
    fetchData();
  }, [token, dispatch]);
  return (
    <PlaylistsContainer>
      <h1>Artists</h1>
      <div className="cards row">
        {artists.map(({ name, id, images }) => {
          return <ArtistCard key={id} image={images} name={name} />;
        })}
      </div>
    </PlaylistsContainer>
  );
}

const PlaylistsContainer = styled.div`
  height: 100%;
  color: white;
  h1 {
    font-size: 24px;
    color: white;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    .main-card {
      position: relative;
      height: 300px;
      width: 400px;
      border-radius: 8px;
      background: #8a299999;
      margin: 0.5rem;
      .card-text {
        position: absolute;
        bottom: 0px;
        padding: 1rem;
        p {
          font-weight: 500;
        }
      }
    }
  }
`;
