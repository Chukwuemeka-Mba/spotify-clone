import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Playlists() {
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
    <Scrollbar>
      <div>
        <ul>
          {playlists.map(({ name, id }) => {
            return (
              <Link to="/" key={id} onClick={() => changeCurrentPlaylist(id)}>
                {name}
              </Link>
            );
          })}
        </ul>
      </div>
    </Scrollbar>
  );
}

const Scrollbar = styled.div`
  height: 100%;
  overflow: hidden;
  ul {
    height: 45vh;
    max-height: 100%;
    overflow: auto;
    &::webkit-scrollbar {
      width: 0.7rem;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: #777;
    }
    a:hover {
      color: white;
    }
  }
`;
