import { ChevronLeft } from "react-feather";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import MobileFooter from "../components/MobileFooter";
import SuggestionCard from "../components/cards/SuggestionCard";
import EpisodeCard from "../components/cards/EpisodeCard";
import { Link } from "react-router-dom";
function Search() {
  return (
    <HomeContainer>
      <div className="mobile">
        <div className="search-bar row">
          <Link to="/home">
            <ChevronLeft />
          </Link>
          <div className="search-input">
            <FaSearch />
            <input type="search" placeholder="Artists, songs or podcasts" />
          </div>
        </div>
        <div className="search_results"></div>
        <div className="search_suggestions">
          <div className="recent_searches">
            <h1>Recent Searches</h1>
            <div>
              <EpisodeCard />
            </div>
          </div>
          <div className="top_genres">
            <h1>Your top genres</h1>
            <div className="cards row">
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
            </div>
          </div>
          <div className="browse_all">
            <h1>Browse All Categories</h1>
            <div className="cards row">
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
              <SuggestionCard />
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <MobileFooter />
        </div>
      </div>
      <div className="desktop">desktop view</div>
    </HomeContainer>
  );
}

export default Search;
const HomeContainer = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      height: 100%;
      background: linear-gradient(transparent, rgba(1, 1, 1));
      background-color: rgb(32, 47, 50);
      .search-bar {
        padding: 1rem 2rem;
        svg {
          margin-right: 1rem;
          color: white;
        }
        .search-input {
          width: 100%;
          svg {
            position: absolute;
            color: black;
            margin-top: 13px;
            margin-left: 13px;
          }
          input {
            height: 40px;
            border-radius: 20px;
            outline: none;
            padding: 0 2rem;
            width: 70%;
          }
        }
      }
      .search_suggestions {
        .recent_searches {
          padding: 1rem 2rem;
          h1 {
            font-size: 24px;
            padding: 1rem 0;
            color: white;
          }
        }
        .top_genres {
          padding: 1rem 2rem;
          h1 {
            font-size: 21px;
            color: white;
            padding: 1rem 0;
          }
          .cards {
            overflow-x: scroll;
          }
        }
        .browse_all {
          padding: 1rem 2rem;
          h1 {
            font-size: 21px;
            color: white;
            padding: 1rem 0;
          }
          .cards {
            display: flex;
            flex-wrap: wrap;
          }
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
