import React from "react";
import styled from "styled-components";

export default function Login() {
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
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="Login Logo"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: 0.9px;
    background-color: black;
    color: #49f585;
    cusor: pointer;
    font-size: 1rem;
    transition: transform ease-in-out 200ms;
  }
  button:hover {
    transform: scale(1.05);
    background-color: #fff;
    border: 1px solid black;
    color: #1db954;
  }
`;
