import { useRef, useState, useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";

// Components
import HomeCard from "../components/cards/HomeCard";
import MobileFooter from "../components/MobileFooter";
import EpisodeCard from "../components/cards/EpisodeCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  const [{ userInfo }] = useStateProvider();
  const [{ token, playlists2, categories }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
  };
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/featured-playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data.playlists;
      const playlists2 = items.map(({ name, id, description, images }) => {
        images = images[0].url;
        return { name, id, description, images };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS2, playlists2 });
    };
    getPlaylistData();

    const getCategories = async () => {
      const category_id = "party";
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data.playlists;
      const categories = items.map(({ name, id, description, images }) => {
        images = images[0].url;
        return { name, id, description, images };
      });
      dispatch({ type: reducerCases.SET_CATEGORIES, categories });
    };
    getCategories();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({
      type: reducerCases.SET_PLAYLIST_ID,
      selectedPlaylistId: selectedPlaylistId,
    });
  };
  return (
    <HomeContainer>
      <div className="mobile">
        <div className="nav">
          <Link to="/">
            <ChevronLeft />
          </Link>
        </div>
        {/* <div>
          <HomeCard />
          <HomeCard />
        </div> */}
        <div className="episodes">
          <div className="row ep_header">
            <h1>Featured Playlists</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            {playlists2.map(({ name, id, description, images }) => {
              return (
                <Link key={id} to="/" onClick={() => changeCurrentPlaylist(id)}>
                  <EpisodeCard title={name} image={images} text={description} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Made for {userInfo?.name}</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            {categories.map(({ name, id, description, images }) => {
              return (
                <Link key={id} to="/" onClick={() => changeCurrentPlaylist(id)}>
                  <EpisodeCard title={name} image={images} text={description} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Recently Played</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            {playlists2.map(({ name, id, description, images }) => {
              return (
                <Link key={id} to="/" onClick={() => changeCurrentPlaylist(id)}>
                  <EpisodeCard title={name} image={images} text={description} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Jump Back In</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            {playlists2.map(({ name, id, description, images }) => {
              return (
                <Link key={id} to="/" onClick={() => changeCurrentPlaylist(id)}>
                  <EpisodeCard title={name} image={images} text={description} />
                </Link>
              );
            })}
          </div>
        </div>
        <MobileFooter />
      </div>
      <div className="desktop">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="body">
          <div className="body_cont" ref={bodyRef} onScroll={bodyScrolled}>
            <Navbar navBackground={navBackground} />
            <div className="body__contents">
              <div>
                <HomeCard />
                <HomeCard />
              </div>
              <div className="episodes">
                <div className="row ep_header">
                  <h1>Featured Playlists</h1>
                  <p>SEE ALL</p>
                </div>
                <div className="row cards">
                  {playlists2.map(({ name, id, description, images }) => {
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
              </div>
              <div className="episodes">
                <div className="row ep_header">
                  <h1>Made for {userInfo?.name}</h1>
                  <p>SEE ALL</p>
                </div>
                <div className="row cards">
                  {categories.map(({ name, id, description, images }) => {
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
              </div>
              <div className="episodes">
                <div className="row ep_header">
                  <h1>Recently Played</h1>
                  <p>SEE ALL</p>
                </div>
                <div className="row cards">
                  {playlists2.map(({ name, id, description, images }) => {
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
              </div>
              <div className="episodes">
                <div className="row ep_header">
                  <h1>Jump Back In</h1>
                  <p>SEE ALL</p>
                </div>
                <div className="row cards">
                  {playlists2.map(({ name, id, description, images }) => {
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
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
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
      .nav {
        padding: 1rem;
        svg {
          color: white;
        }
      }
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
          a {
            text-decoration: none;
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
        overflow-y: scroll;
        height: 92vh;
        background: linear-gradient(transparent, rgba(0, 0, 0, 1));
        background-color: rgb(32, 87, 100);
        .body_cont {
          height: 100%;
          width: 100%;
          overflow: auto;
          &::-webkit-scrollbar {
            width: 0.7rem;
            max-height: 2rem;
            &-thumb {
              background-color: rgba(255, 255, 255, 0.6);
            }
          }
          .body__contents {
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
                a {
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
      .footer {
        grid-area: foot;
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;
