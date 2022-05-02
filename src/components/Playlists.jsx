import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";
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
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  return (
    <Scrollbar>
      <div>
        <ul>
          {playlists.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    </Scrollbar>
  );
}

const Scrollbar = styled.div`
    height: 100%
    overflow: hidden;
  ul {
    height: 45vh;
    max-height: 100%;
    overflow: auto;
    &::webkit-scrollbar {
      width: 0.7rem;
    }
  }
`;
