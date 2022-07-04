import axios from "axios";

const token = localStorage.getItem("spotify-token");
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export const getSavedAlbums = () => {
  axios.get("https://api.spotify.com/v1/albums", { headers });
};

export const getRecentlyPlayed = () =>
  axios.get("https://api.spotify.com/v1/me/player/recently-played", {
    headers,
  });

export const getFollowing = async () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", {
    headers,
  });
