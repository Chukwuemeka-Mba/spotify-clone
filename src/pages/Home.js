import styled from "styled-components";
import HomeCard from "../components/cards/HomeCard";
import MobileFooter from "../components/MobileFooter";
import MobileNavbar from "../components/MobileNavbar";
import EpisodeCard from "../components/cards/EpisodeCard";
function Home() {
  return (
    <HomeContainer>
      <div className="mobile">
        <MobileNavbar />
        <div>
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Episodes for you</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Made for Nero</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Recently Played</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Jump Back In</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </div>
        <MobileFooter />
      </div>
      <div className="desktop">desktop view</div>
    </HomeContainer>
  );
}

export default Home;
const HomeContainer = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      height: 100%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 1));
      background-color: rgb(32, 47, 90);
      .episodes {
        padding: 1rem;
        .ep_header {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          color: #ccc;
          h1 {
            font-size: 23px;
          }
          p {
            font-size: 12px;
            cursor: pointer;
          }
        }
        .cards {
          overflow-x: scroll;
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    .mobile {
      display: none;
    }
  }
`;
