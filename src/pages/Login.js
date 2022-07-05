import React from "react";
import styled from "styled-components";

export default function Login() {
  // website: https://emeka-spotify-clone.netlify.app/
  function handleClick() {
    const clientId = "aa7a8c8164934e9b851471ced881c98c";
    const redirectUrl = "http://localhost:3000/";
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
    )}&response_type=token&show_dialog=false`;
    localStorage.clear();
  }
  return (
    <Container>
      <div className="desktop">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          alt="Login Logo"
        />
        <button onClick={handleClick}>Connect Spotify</button>
      </div>
      <div className="mobile">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Login Logo"
        />
        <button onClick={handleClick}>Connect Spotify</button>
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
      gap: 5rem;
      background-color: #000;
      color: #fff;
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
      font-size: 1rem;
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
