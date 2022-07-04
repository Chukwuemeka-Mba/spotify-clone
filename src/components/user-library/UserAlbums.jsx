import { useEffect } from "react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";
import styled from "styled-components";
import axios from "axios";
import { getRecentlyPlayed } from "../../utils/api-calls";
// components
import PlaylistCard from "../cards/PlaylistCard";
import TrackCard from "../cards/TrackCard";

export default function UserPlaylists() {
  const [{ token, recentTracks }, dispatch] = useStateProvider();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRecentlyPlayed();
      const { items } = response.data;
      const recentTracks = items.map(({ track }) => {
        return { track };
      });
      dispatch({ type: reducerCases.SET_RECENT_TRACKS, recentTracks });
    };
    fetchData();
  }, [token, dispatch]);
  return (
    <PlaylistsContainer>
      <h1>Recently Played</h1>
      <div className="cards row">
        {recentTracks.map(({ track, index }) => {
          return <TrackCard key={index} track={track} />;
        })}
      </div>
    </PlaylistsContainer>
  );
}

const PlaylistsContainer = styled.div`
  height: 100%;
  color: white;
  h1 {
    font-size: 24px;
    color: white;
  }
  .cards {
    flex-wrap: wrap;
    .main-card {
      position: relative;
      height: 260px;
      width: 350px;
      border-radius: 8px;
      background: #8a299999;
      margin: 0.5rem;
      .card-text {
        position: absolute;
        bottom: 0px;
        padding: 1rem;
        p {
          font-weight: 500;
        }
      }
    }
  }
`;
