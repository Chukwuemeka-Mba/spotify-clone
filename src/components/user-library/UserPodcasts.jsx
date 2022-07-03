// import { useEffect } from "react";
// import { useStateProvider } from "../../utils/StateProvider";
// import { reducerCases } from "../../utils/Constants";
import styled from "styled-components";
// import axios from "axios";

// components
import PlaylistCard from "../cards/PlaylistCard";

export default function UserPodcasts() {
  return (
    <PodcastsContainer>
      <h1>Playlists</h1>
      <div className="cards row">
        <div className="main-card">
          <div className="card-text">
            <h1>Your Episodes</h1>
            <p>0 liked podcasts</p>
          </div>
        </div>
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </PodcastsContainer>
  );
}

const PodcastsContainer = styled.div`
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
      height: 300px;
      width: 400px;
      border-radius: 8px;
      background: #27824fd6;
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
