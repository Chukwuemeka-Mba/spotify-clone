import { useState } from "react";
import styled from "styled-components";
import { ChevronLeft } from "react-feather";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

// comoponents
import MobileFooter from "../components/MobileFooter";
import UserPlaylists from "../components/user-library/UserPlaylists";
import UserArtists from "../components/user-library/UserArtists";
import UserRecents from "../components/user-library/UserRecents";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
function Library() {
  const [libraryState, setLibraryState] = useState("playlists");
  const changeLibState = (input) => {
    setLibraryState(input);
  };
  return (
    <HomeContainer>
      <div className="mobile">
        <div className="header row">
          <div className="navigation">
            <Link to="/">
              <ChevronLeft />
            </Link>
            <div className="links">
              <p
                className={libraryState === "playlists" ? "active" : ""}
                onClick={() => changeLibState("playlists")}
              >
                Playlists
              </p>
              <p
                className={libraryState === "artists" ? "active" : ""}
                onClick={() => changeLibState("artists")}
              >
                Artists
              </p>
              <p
                className={libraryState === "albums" ? "active" : ""}
                onClick={() => changeLibState("albums")}
              >
                Recents
              </p>
            </div>
          </div>
        </div>
        <div className="body">
          {libraryState === "playlists" && <UserPlaylists />}
          {libraryState === "artists" && <UserArtists />}
          {libraryState === "albums" && <UserRecents />}
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
          <div className="header row">
            <div className="navigation">
              <Link to="/">
                <ChevronLeft />
              </Link>
              <div className="links">
                <p
                  className={libraryState === "playlists" ? "active" : ""}
                  onClick={() => changeLibState("playlists")}
                >
                  Playlists
                </p>
                <p
                  className={libraryState === "artists" ? "active" : ""}
                  onClick={() => changeLibState("artists")}
                >
                  Artists
                </p>
                <p
                  className={libraryState === "albums" ? "active" : ""}
                  onClick={() => changeLibState("albums")}
                >
                  Recents
                </p>
              </div>
            </div>
            <div className="avatar">
              <Link to="/">
                <CgProfile />
              </Link>
            </div>
          </div>
          <div className="body_cont">
            {libraryState === "playlists" && <UserPlaylists />}
            {libraryState === "artists" && <UserArtists />}
            {libraryState === "albums" && <UserRecents />}
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </HomeContainer>
  );
}

export default Library;
const HomeContainer = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      height: 100%;
      /* height: 100vh; */
      background: linear-gradient(transparent, rgba(1, 1, 1));
      background-color: rgb(32, 47, 50);
      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 2rem;
        .navigation {
          display: flex;
          flex-direction: row;
          align-items: center;
          overflow-x: scroll;
          a {
            color: #fff;
            margin-right: 1rem;
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
        .links {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          gap: 1rem;
          overflow: hidden;
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
      .body {
        padding: 0.5rem 2rem;
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
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 1rem 2rem;
          .navigation {
            display: flex;
            flex-direction: row;
            align-items: center;
            a {
              color: #fff;
              margin-right: 1rem;
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
          .links {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            gap: 1rem;
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
        .body_cont {
          padding: 0.5rem 2rem;
        }
      }
      footer {
        grid-area: foot;
      }
    }
  }
`;
