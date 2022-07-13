import { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import TopTracks from "../components/TopTracks";
import { useStateProvider } from "../utils/StateProvider";

// Components
import MobileFooter from "../components/MobileFooter";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ShazamResults from "../components/ShazamResults";
import { reducerCases } from "../utils/Constants";
import { Link } from "react-router-dom";
function Shazam() {
  const [{ token, audioFeatures, shazamResults }, dispatch] =
    useStateProvider();
  const [shazam, setShazam] = useState(false);

  const toggleShazam = () => {
    setShazam((prevState) => !prevState);
  };

  const logout = () => {
    localStorage.clear();
    window.location.hash = "";
    window.location.pathname = "";
    window.location.reload();
  };
  function getAudioFeatures() {
    toggleShazam();
    let acousticnessIndex = 0;
    let danceabilityIndex = 0;
    let energyIndex = 0;
    let instrumentalnessIndex = 0;
    let livenessIndex = 0;
    let loudnessIndex = 0;
    let speechinessIndex;
    let valenceIndex;
    audioFeatures.map(
      ({
        acousticness,
        danceability,
        duration_ms,
        energy,
        instrumentalness,
        liveness,
        loudness,
        speechiness,
        tempo,
        valence,
      }) => {
        acousticness = (acousticness / 1) * 100;
        danceability = (danceability / 1) * 100;
        energy = (energy / 1) * 100;
        instrumentalness = (instrumentalness / 1) * 100;
        liveness = (liveness / 1) * 100;
        loudness = (loudness / 60) * -100;
        speechiness = (speechiness / 0.66) * 100;
        valence = (valence / 1) * 100;

        acousticnessIndex += acousticness;
        danceabilityIndex += danceability;
        energyIndex += energy;
        instrumentalnessIndex += instrumentalness;
        livenessIndex += liveness;
        loudnessIndex += loudnessIndex;
        speechinessIndex += speechiness;
        valenceIndex += valence;
      }
    );
    let shazamResults = {
      acousticnessIndex: acousticnessIndex,
      danceabilityIndex: danceabilityIndex,
      energyIndex: energyIndex,
      instrumentalnessIndex: instrumentalnessIndex,
      livenessIndex: livenessIndex,
      speechinessIndex: speechinessIndex,
      valenceIndex: valenceIndex,
    };
    dispatch({ type: reducerCases.SET_SHAZAM_RESULTS, shazamResults });
    return shazamResults;
  }
  return (
    <ShazamContainer>
      <div className="mobile">
        <div className="nav">
          <Link to="/">Go back home</Link>
        </div>
        <div className="title__text">
          <Fade top>
            <h1>{!shazam && "Here are your favorite tracks."}</h1>
            <div className="text">
              <button className="shaz" onClick={getAudioFeatures}>
                {!shazam ? "SHAZAM" : "BACK TO FAVORITES"}
              </button>
            </div>
          </Fade>
        </div>
        <div>
          {shazam ? <ShazamResults shazamResults={shazamResults} /> : ""}
          {!shazam ? <TopTracks /> : ""}
        </div>
        <div>
          <MobileFooter />
        </div>
      </div>
      <div className="desktop">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="body">
          <div className="title__text">
            <Fade top>
              <h1>{!shazam && "Here are your favorite tracks."}</h1>
              <div className="text">
                <button className="shaz" onClick={getAudioFeatures}>
                  {!shazam ? "SHAZAM" : "BACK TO FAVORITES"}
                </button>
              </div>
            </Fade>
          </div>
          <div className="shazam_results">
            {shazam ? <ShazamResults shazamResults={shazamResults} /> : ""}
            {!shazam ? <TopTracks /> : ""}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </ShazamContainer>
  );
}

export default Shazam;
const ShazamContainer = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      height: 100%;
      background: linear-gradient(transparent, rgba(1, 1, 1));
      background-color: rgb(32, 47, 50);
      .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
        gap: 1rem;
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          text-decoration: underline 1px #fff;
        }
        p {
          cursor: pointer;
          color: #ccc;
        }
      }
      .title__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        color: white;
        padding-top: 3rem;
        h1 {
          font-size: 24px;
          letter-spacing: 1px;
          text-align: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          button {
            padding: 0.7rem 1rem;
            background: transparent;
            color: white;
            border: 1px solid white;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 5px;
            transition: all 350ms ease-in-out;
          }
          button:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: grid;
      grid-template-columns: 15% 85%;
      grid-template-rows: 75% 25%;
      grid-template-areas:
        "side body"
        "foot foot";
      .sidebar {
        grid-area: side;
      }
      .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
        gap: 1rem;
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          text-decoration: underline 1px #fff;
        }
        p {
          cursor: pointer;
          color: #ccc;
        }
      }
      .body {
        grid-area: body;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(transparent, rgba(1, 1, 1));
        background-color: rgb(32, 47, 50);
        .title__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          color: white;
          padding-top: 3rem;
          h1 {
            font-size: 24px;
            letter-spacing: 1px;
            text-align: center;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            button {
              padding: 0.7rem 1rem;
              background: transparent;
              color: white;
              border: 1px solid white;
              cursor: pointer;
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 5px;
              transition: all 350ms ease-in-out;
            }
            button:hover {
              background-color: white;
              color: black;
            }
          }
        }
        .shazam_results {
          height: 82vh;
          overflow-y: scroll;
        }
      }
      .footer {
        grid-area: foot;
      }
    }
  }

  button {
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: bounce-1;
    animation-timing-function: linear;
  }
  @keyframes bounce-1 {
    0% {
      transform: translateY(0);
    }
    45% {
      transform: translateY(-6px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
