import { useEffect } from "react";
import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import axios from "axios";
import Fade from "react-reveal/Fade";
export default function Body({ headerBackground }) {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const playTrack = async (
    id,
    name,
    artists,
    image,
    duration,
    album,
    context_uri,
    track_number
  ) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: 0,
        },
        position_ms: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      const currentTrack = {
        id,
        name,
        artists,
        image,
        duration,
        album,
        context_uri,
        track_number,
      };
      dispatch({ type: reducerCases.SET_CURRENT_TRACK, currentTrack });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    } else {
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    }
  };
  return (
    <BodyContainer headerBackground={headerBackground}>
      {selectedPlaylist && (
        <>
          <Fade left>
            <div className="playlist">
              <div className="image">
                <img src={selectedPlaylist.image} alt="selectedPlaylist" />
              </div>
              <div className="details">
                <span className="type">PLAYLIST</span>
                <h1 className="title">{selectedPlaylist.name}</h1>
                <p className="description">{selectedPlaylist.description}</p>
                <div>
                  <p>{selectedPlaylist.tracks.length + " Tracks"}</p>
                </div>
              </div>
            </div>
          </Fade>
          <div className="list">
            <div className="header__row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
            <div className="tracks">
              {selectedPlaylist.tracks.map(
                (
                  {
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                    track_number,
                  },
                  index
                ) => {
                  return (
                    <div
                      className="row"
                      key={id}
                      onClick={() =>
                        playTrack(
                          id,
                          name,
                          artists,
                          image,
                          duration,
                          album,
                          context_uri,
                          track_number
                        )
                      }
                    >
                      <div className="col">
                        <span className="num">{index + 1}</span>
                      </div>
                      <div className="col detail">
                        <img src={image} alt="track" />
                        <div className="info">
                          <span className="name underline">{name}</span>
                          <span className="artists underline">{artists}</span>
                        </div>
                      </div>
                      <div className="col">
                        <span className="album underline">{album}</span>
                      </div>
                      <div className="col">
                        <span>{msToMinutesAndSeconds(duration)}</span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  @media screen and (max-width: 800px) {
    .playlist {
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      img {
        height: 35vh;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
      .details {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: left;
        gap: 1rem;
        color: #e0dede;
        width: 100%;
        .title {
          color: white;
          font-size: 4rem;
        }
      }
    }

    .list {
      .header__row {
        display: grid;
        grid-template-columns: 0.3fr 3fr 2fr 0.5fr;
        margin: 1rem 0 0 0;
        color: #dddcdc;
        position: sticky;
        top: 15vh;
        padding: 1rem 3rem;
        transition: 0.3s ease-in-out;
        background-color: ${({ headerBackground }) =>
          headerBackground ? "#000000dc" : "none"};
      }
    }
    .tracks {
      margin: 0rem 0.5rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 0rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.5fr;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
            width: 40px;
            cursor: pointer;
          }
          .num {
            display: none;
          }
        }
        .name {
          margin-right: 1rem;
          color: #dddcdc;
        }
        .artists {
          font-size: 13px;
          color: #ccdc;
          margin: 0.2rem 0rem;
        }
        .underline:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .detail {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    .playlist {
      margin: 0 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      .image {
        img {
          height: 15rem;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #e0dede;
        .title {
          color: white;
          font-size: 4rem;
        }
      }
    }
    .list {
      .header__row {
        display: grid;
        grid-template-columns: 0.3fr 3fr 2fr 0.5fr;
        margin: 1rem 0 0 0;
        color: #dddcdc;
        position: sticky;
        top: 15vh;
        padding: 1rem 3rem;
        transition: 0.3s ease-in-out;
        background-color: ${({ headerBackground }) =>
          headerBackground ? "#000000dc" : "none"};
      }
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row {
        padding: 0.5rem 1rem;
        display: grid;
        grid-template-columns: 0.3fr 3.1fr 2fr 0.5fr;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .col {
          display: flex;
          align-items: center;
          color: #dddcdc;
          img {
            height: 40px;
            width: 40px;
            cursor: pointer;
          }
        }
        .name {
          margin-right: 1rem;
          color: #dddcdc;
        }
        .artists {
          font-size: 13px;
          color: #ccdc;
          margin: 0.2rem 0rem;
        }
        .name:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .artists:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .album:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .detail {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          .info {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;
