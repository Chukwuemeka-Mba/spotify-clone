import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import {
  Book,
  Sliders,
  Home,
  PauseCircle,
  PlayCircle,
  Search,
} from "react-feather";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
function MobileFooter() {
  const [{ token, currentTrack, playerState }, dispatch] = useStateProvider();
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
  }, [token, dispatch]);

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  if (currentTrack) document.title = `Spotify - ${currentTrack.name}`;

  return (
    <MobileFooterContainer>
      {currentTrack && (
        <div className="cont">
          <div className="left">
            <div className="img-cont">
              <img src={currentTrack.image} alt="currentTrack" />
            </div>
            <div className="song__name">
              <h4>{currentTrack.name}</h4>
              <p>{currentTrack.artists}</p>
            </div>
          </div>
          <div className="play">
            {!playerState ? (
              <PlayCircle onClick={() => changeState()} />
            ) : (
              <PauseCircle onClick={() => changeState()} />
            )}
          </div>
        </div>
      )}
      <div className="main-footer">
        <Fade left>
          <Link to="/home">
            <Home />
          </Link>
          <Link to="/search">
            <Search />
          </Link>
          <Link to="/library">
            <Book />
          </Link>
          <Link to="/shazam">
            <Sliders />
          </Link>
        </Fade>
      </div>
    </MobileFooterContainer>
  );
}

export default MobileFooter;
const MobileFooterContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  .cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #1f1f1f;
    .left {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .img-cont {
        img {
          width: 100%;
          padding-top: 7px;
          padding-left: 5px;
        }
      }
      .song__name {
        margin: 0rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        color: #fff;
        gap: 10px;
        p {
          font-size: 12px;
        }
      }
    }
    .play {
      display: flex;
      justify-content: center;
      align-items: center;
      float: right;
      color: white;
      padding: 2rem;
      svg {
        font-size: 90px;
      }
    }
  }
  .main-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
    background-color: #1f1f1f;
    border-top: 0.5px solid #000;
    svg {
      color: white;
      transition: transform 250ms ease-in-out;
    }
    svg:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
`;
