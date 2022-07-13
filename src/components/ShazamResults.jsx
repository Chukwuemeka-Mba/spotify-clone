import { useState } from "react";
import styled from "styled-components";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

function ShazamResults({ shazamResults }) {
  let total =
    shazamResults.acousticnessIndex +
    shazamResults.danceabilityIndex +
    shazamResults.energyIndex +
    shazamResults.instrumentalnessIndex +
    shazamResults.livenessIndex;

  // percentages
  let acPercent = Math.floor((shazamResults.acousticnessIndex / total) * 100);
  let dancePercent = Math.floor(
    (shazamResults.danceabilityIndex / total) * 100
  );
  let energyPercent = Math.floor((shazamResults.energyIndex / total) * 100);
  let instrumentPercent = Math.floor(
    (shazamResults.instrumentalnessIndex / total) * 100
  );
  let livePercent = Math.floor((shazamResults.livenessIndex / total) * 100);

  const data = {
    labels: [
      "accousticness",
      "danceability",
      "energy",
      "instrumentalness",
      "liveness",
    ],
    datasets: [
      {
        label: "Listening Data",
        data: [
          shazamResults.acousticnessIndex,
          shazamResults.danceabilityIndex,
          shazamResults.energyIndex,
          shazamResults.instrumentalnessIndex,
          shazamResults.livenessIndex,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  return (
    <ResultsContainer>
      <div className="results_container">
        <h4>We checked the 20 tracks you listen to the most.</h4>
        <p>Here's what we found</p>
      </div>
      <div className="container">
        <div class="col-left">
          <p>
            Vocals dominate <strong> {acPercent + "%"}</strong> of your
            listening. <span></span>
          </p>
          <p>
            We think you can be a Michael Jackson{" "}
            <strong>{dancePercent + "%"}</strong> of the time... well, kind of.
            <span></span>
          </p>
          <p>
            <strong>{energyPercent + "%"}</strong> of your listening history
            makes us think you're licensed to kill. <span></span>
          </p>
          <p>
            Instrumentals rank <strong>{instrumentPercent + "%"}</strong> of
            your listening. Any problem? <span></span>
          </p>
          <p>
            You thought you were at a concert{" "}
            <strong>{livePercent + "%"}</strong> of the time. Take it easy.
            <span></span>
          </p>
        </div>
      </div>
      <div className="chart">
        <Chart type="bar" data={data} />
      </div>
    </ResultsContainer>
  );
}

export default ShazamResults;

const ResultsContainer = styled.div`
  .results_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 2rem;
    margin: 1rem;
    h4 {
      text-align: center;
    }
    .chart {
      overflow-x: scroll;
      width: 100%;
    }
  }
  /* second transition effect  */
  .container {
    height: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container .col-left {
    flex: 1;
    padding: 20px;
  }
  .container .col-left p {
    font-size: 20px;
    position: relative;
    color: transparent;
    animation: text_revealing 0s ease forwards;
    display: inline-block;
  }
  .container .col-left p:nth-child(1) {
    animation-delay: 1s;
  }
  .container .col-left p:nth-child(2) {
    animation-delay: 2s;
  }
  .container .col-left p:nth-child(3) {
    animation-delay: 4s;
  }
  .container .col-left p:nth-child(4) {
    animation-delay: 6s;
  }
  .container .col-left p:nth-child(5) {
    animation-delay: 8s;
  }
  .container .col-left p:nth-child(1) span {
    animation-delay: 0.5s;
  }
  .container .col-left p:nth-child(2) span {
    animation-delay: 1.5s;
  }
  .container .col-left p:nth-child(3) span {
    animation-delay: 3.5s;
  }

  .container .col-left p:nth-child(4) span {
    animation-delay: 5.5s;
  }
  .container .col-left p:nth-child(5) span {
    animation-delay: 7.5s;
  }

  .container .col-left p span {
    content: "";
    position: absolute;
    height: 100%;
    width: 0;
    left: 0;
    top: 0;
    background-color: #71b3df;
    animation: revealing 1s ease forwards;
    animation-delay: 0.5s;
  }

  @keyframes text_revealing {
    100% {
      color: white;
    }
  }
  @keyframes revealing {
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      left: 100%;
      width: 0%;
    }
  }

  @media only screen and (max-width: 890px) {
    .container {
      flex-direction: column-reverse;
    }
    .container .col-left p {
      display: block;
      width: fit-content;
    }
  }
  .chart {
    height: 80vh;
  }
`;
