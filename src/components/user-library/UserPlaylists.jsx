import { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";
import styled from "styled-components";
import axios from "axios";

// components
import PlaylistCard from "../cards/PlaylistCard";

export default function UserPlaylists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id, images }) => {
        images = images[0].url;
        return { name, id, images };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({
      type: reducerCases.SET_PLAYLIST_ID,
      selectedPlaylistId: selectedPlaylistId,
    });
  };
  return (
    <PlaylistsContainer>
      <h1>Playlists</h1>
      <div className="cards row">
        {playlists.map(({ name, id, images }) => {
          return (
            <PlaylistCard
              key={id}
              title={name}
              image={images}
              onClick={() => changeCurrentPlaylist(id)}
            />
          );
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
    flex-wrap: wrap;
    .main-card {
      position: relative;
      height: 270px;
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
