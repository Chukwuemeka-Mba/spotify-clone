import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
export default function CurrentTrack() {
  const [{ token, currentTrack }, dispatch] = useStateProvider();
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
      console.log(response);
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
  }, [token, dispatch]);
  return (
    <TrackContainer>
      {currentTrack && (
        <div className="track __image">
          <div className="track __image">
            <img src={currentTrack.image} alt="currentTrack" />
          </div>
          <div className="">
            <h6 className="track__name">{currentTrack.name}</h6>
            <p className="__track__artists">
              {currentTrack.artists.join(", ")}
            </p>
          </div>
        </div>
      )}
    </TrackContainer>
  );
}

const TrackContainer = styled.main`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;
