import { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import TopTracks from "../components/TopTracks";
import { useStateProvider } from "../utils/StateProvider";

// Components
import MobileFooter from "../components/MobileFooter";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
function Shazam() {
  const [{ token, audioFeatures }, dispatch] = useStateProvider();

  let acousticnessIndex;
  let danceabilityIndex;
  let energyIndex;
  let instrumentalnessIndex;
  let livenessIndex;
  let loudnessIndex;
  let speechinessIndex;
  let valenceIndex;
  function getAudioFeatures() {
    // console.log(audioFeatures.length);
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
        acousticnessIndex = (acousticness / 1) * 100;
        danceabilityIndex = (danceability / 1) * 100;
        energyIndex = (energy / 1) * 100;
        instrumentalnessIndex = (instrumentalness / 1) * 100;
        livenessIndex = (liveness / 1) * 100;
        loudnessIndex = (loudness / 60) * -100;
        speechinessIndex = (speechiness / 0.66) * 100;
        valenceIndex = (valence / 1) * 100;

        acousticnessIndex += acousticnessIndex;
        danceabilityIndex += danceabilityIndex;
        energyIndex += energyIndex;
        instrumentalnessIndex += instrumentalnessIndex;
        livenessIndex += livenessIndex;
        loudnessIndex += loudnessIndex;
        speechinessIndex += speechinessIndex;
        valenceIndex += valenceIndex;

        return energy;
      }
    );
    console.log(acousticnessIndex);
  }

  return (
    <ShazamContainer>
      <div></div>
      <div className="mobile">
        <div className="title__text">
          <Fade top>
            <h1>Here are your favorite tracks.</h1>
            <div className="text">
              <button className="shaz">SHAZAM</button>
            </div>
          </Fade>
        </div>
        <div>
          <TopTracks />
        </div>
        <div>
          x
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
              <h1>Here are your favorite tracks.</h1>
              <div className="text" onClick={() => getAudioFeatures}>
                <button className="shaz" onClick={getAudioFeatures()}>
                  SHAZAM
                </button>
              </div>
            </Fade>
          </div>
          <TopTracks />
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
      .body {
        grid-area: body;

        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 92vh;
        overflow-y: scroll;
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
