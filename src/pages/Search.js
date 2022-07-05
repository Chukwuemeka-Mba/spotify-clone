import { ChevronLeft } from "react-feather";
import { useState, useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

// components
import MobileFooter from "../components/MobileFooter";
import SuggestionCard from "../components/cards/SuggestionCard";
import EpisodeCard from "../components/cards/EpisodeCard";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Search() {
  const [{ token, searchResults }, dispatch] = useStateProvider();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("album");
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    getSearchResult();
  };
  useEffect(() => {}, [token, dispatch, query]);

  const getSearchResult = async () => {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?type=${type}&q=${query}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const { items } = response.data.albums;
    const searchResults = items.map(({ name, id, description, images }) => {
      images = images[0].url;
      return { name, id, description, images };
    });
    dispatch({ type: reducerCases.SET_SEARCH_RESULTS, searchResults });
  };

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({
      type: reducerCases.SET_PLAYLIST_ID,
      selectedPlaylistId: selectedPlaylistId,
    });
  };
  return (
    <HomeContainer>
      <div className="mobile">
        <div className="search-bar row">
          <Link to="/home">
            <ChevronLeft />
          </Link>
          <div className="search-input">
            <FaSearch />
            <input
              type="search"
              placeholder="Artists, songs or podcasts"
              name="search"
              onChange={handleSearch}
            />
          </div>
          <div className="avatar">
            <Link to="/">
              <CgProfile />
              <p>Nero</p>
            </Link>
          </div>
        </div>
        <div className="search_suggestions">
          <div className="recent_searches">
            <h1>Search Results</h1>
            <div>
              {searchResults.length < 1 && (
                <EpisodeCard
                  title=" Today's Top Hits"
                  text="Just dance"
                  image="https://i.scdn.co/image/ab67706f00000003c8113027a8c22805700d65c7"
                />
              )}
            </div>
          </div>
          {searchResults.length < 1 && (
            <div>
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
            </div>
          )}
          {searchResults.length > 0 && (
            <div className="search_results">
              {searchResults.map(({ name, id, description, images }) => {
                return (
                  <Link
                    key={id}
                    to="/"
                    onClick={() => changeCurrentPlaylist(id)}
                  >
                    <EpisodeCard
                      title={name}
                      image={images}
                      text={description}
                    />
                  </Link>
                );
              })}
            </div>
          )}
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
          <div className="search-bar row">
            <Link to="/home">
              <ChevronLeft />
            </Link>
            <div className="search-input">
              <FaSearch />
              <input
                type="search"
                placeholder="Artists, songs or podcasts"
                name="search"
                onChange={handleSearch}
              />
            </div>
            <div className="avatar">
              <Link>
                <CgProfile />
                <p>Nero</p>
              </Link>
            </div>
          </div>
          <div className="search_results"></div>
          <div className="search_suggestions">
            <div className="recent_searches">
              <h1>Search Results</h1>
              <div>
                {searchResults.length < 1 && (
                  <EpisodeCard
                    title=" Today's Top Hits"
                    text="Just dance"
                    image="https://i.scdn.co/image/ab67706f00000003c8113027a8c22805700d65c7"
                  />
                )}
              </div>
            </div>
            {searchResults.length < 1 && (
              <div>
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
              </div>
            )}
            {searchResults.length > 0 && (
              <div className="search_results">
                {searchResults.map(({ name, id, description, images }) => {
                  return (
                    <Link
                      key={id}
                      to="/"
                      onClick={() => changeCurrentPlaylist(id)}
                    >
                      <EpisodeCard
                        title={name}
                        image={images}
                        text={description}
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
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
        position: fixed;
        width: 100%;
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

        .avatar {
          background-color: black;
          padding: 0.5rem 0.9rem;
          padding-right: 1rem;
          border-radius: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: white;
            font-weight: bold;
            svg {
              font-size: 1.3rem;
              background-color: #282828;
              padding: 0.2rem;
              border-radius: 1rem;
              color: #c7c5c5;
            }
          }
        }
      }
      .search_type {
        display: flex;
        justify-content: center;
        align-items: center;
        /* position: fixed; */
        padding-top: 4rem;
        width: 100%;
        .links {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          gap: 1rem;
          width: 80%;
          p {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-weight: 600;
            font-size: 14px;
            color: white;
            cursor: pointer;
          }
          .active {
            background-color: #777;
          }
          p:hover {
            background-color: gray;
          }
        }
      }
      .search_suggestions {
        padding-top: 3rem;
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
      .search_results {
        display: flex;
        flex-wrap: wrap;
        a {
          text-decoration: none;
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
        height: 92vh;
        overflow-y: scroll;
        background: linear-gradient(transparent, rgba(1, 1, 1));
        background-color: rgb(32, 47, 50);
        .search-bar {
          padding: 1rem 2rem;
          position: fixed;
          width: 75%;
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

          .avatar {
            background-color: black;
            padding: 0.5rem 0.9rem;
            padding-right: 1rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.5rem;
              text-decoration: none;
              color: white;
              font-weight: bold;
              svg {
                font-size: 1.3rem;
                background-color: #282828;
                padding: 0.2rem;
                border-radius: 1rem;
                color: #c7c5c5;
              }
            }
          }
        }
        .search_suggestions {
          .recent_searches {
            margin-top: 3rem;
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

        .search_results {
          display: flex;
          flex-wrap: wrap;
          a {
            text-decoration: none;
          }
        }
      }

      .footer {
        grid-area: foot;
      }
    }
  }
`;
