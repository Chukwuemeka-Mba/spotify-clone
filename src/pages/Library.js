import { useState, useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";

// comoponents
import MobileFooter from "../components/MobileFooter";

function Library() {
  const [{ token, currentTrack, playerState }, dispatch] = useStateProvider();
  console.log(token);
  localStorage.getItem("spotify-token");
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data !== "") {
        const { item } = response.data;
        const currentTrack = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artists) => artists.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_CURRENT_TRACK, currentTrack });
      } else {
        dispatch({ type: reducerCases.SET_CURRENT_TRACK, currentTrack: null });
      }
    };
    getCurrentTrack();
    if (token) {
      getCurrentTrack();
    }
  }, [token, dispatch]);
  return (
    <HomeContainer>
      <div className="mobile">
        <MobileFooter />
      </div>
      <div className="desktop">desktop view</div>
    </HomeContainer>
  );
}

export default Library;
const HomeContainer = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
  }
  @media screen and (min-width: 800px) {
  }
`;
