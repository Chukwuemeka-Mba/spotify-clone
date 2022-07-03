import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";
import axios from "axios";
import HomeCard from "../components/cards/HomeCard";
import MobileFooter from "../components/MobileFooter";
import MobileNavbar from "../components/MobileNavbar";
import EpisodeCard from "../components/cards/EpisodeCard";
import { Link } from "react-router-dom";
function Home() {
  const [{ token, playlists, categories }, dispatch] = useStateProvider();
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
      const playlists = items.map(({ name, id, description, images }) => {
        images = images[0].url;
        return { name, id, description, images };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
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
      console.log(categories);
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
        <MobileNavbar />
        <div>
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        <div className="episodes">
          <div className="row ep_header">
            <h1>Featured Playlists</h1>
            <p>SEE ALL</p>
          </div>
          <div className="row cards">
            {playlists.map(({ name, id, description, images }) => {
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
            <h1>Made for Nero</h1>
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
            {playlists.map(({ name, id, description, images }) => {
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
            {playlists.map(({ name, id, description, images }) => {
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
  }
`;
