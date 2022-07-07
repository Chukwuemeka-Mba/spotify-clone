import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
export default function Login() {
  // website: https://emeka-spotify-clone.netlify.app/
  function handleClick() {
    const clientId = "aa7a8c8164934e9b851471ced881c98c";
    const redirectUrl = "https://emeka-spotify-clone.netlify.app/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-state",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
      "user-follow-read",
      "user-follow-modify",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-public",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
    localStorage.clear();
  }
  return (
    <Container>
      <div className="desktop">
        <Fade top>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt="Login Logo"
          />
        </Fade>

        <div className="caveat">
          <p>song must be playing on your device to start</p>
        </div>
        <Fade bottom>
          <button onClick={handleClick}>Connect Spotify</button>
        </Fade>
      </div>
      <div className="mobile">
        <Fade top>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="Login Logo"
          />
        </Fade>
        <div className="caveat">
          <p>song must be playing on your device to start</p>
        </div>
        <Fade bottom>
          <button onClick={handleClick}>Connect Spotify</button>
        </Fade>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      gap: 4rem;
      background-color: #000;
      color: #fff;
    }
    .caveat {
      color: white;
      text-transform: uppercase;
      font-size: 10px;
      border: 1px solid white;
      padding: 0.5rem 1rem;
      text-align: center;
    }
    img {
      width: 80%;
    }
    button:hover {
      transform: scale(1.05);
      border: 1px solid white;
      background-color: #000;
      color: white;
    }

    button {
      width: 200px;
      padding: 1rem 0;
      border-radius: 5rem;
      border: 0.9px;
      background-color: white;
      color: #000;
      cursor: pointer;
      font-size: 15px;
      transition: transform ease-in-out 200ms;
    }
  }
  @media screen and (min-width: 800px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      background-color: #1db954;
      gap: 5rem;
      img {
        width: 30%;
      }

      .caveat {
        color: black;
        text-transform: uppercase;
        font-size: 10px;
        border: 1px solid black;
        padding: 0.5rem 1rem;
        text-align: center;
      }
      button {
        width: 200px;
        padding: 1rem 0;
        border-radius: 5rem;
        border: 0.9px;
        background-color: black;
        color: #fff;
        cursor: pointer;
        font-size: 1rem;
        transition: transform ease-in-out 200ms;
      }
      button:hover {
        transform: scale(1.05);
        background-color: #fff;
        color: #1db954;
      }
    }
  }
`;
