import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import MobileFooter from "./MobileFooter";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import MobileNavbar from "./MobileNavbar";

export default function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <SpotifyContainer>
      <div className="mobile">
        <MobileNavbar />
        <Body headerBackground={headerBackground} />
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
              <Body headerBackground={headerBackground} />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </SpotifyContainer>
  );
}

const SpotifyContainer = styled.div`
  @media screen and (max-width: 800px) {
    .desktop {
      display: none;
    }
    .mobile {
      background: linear-gradient(transparent, rgba(0, 0, 0, 1));
      background-color: rgb(32, 87, 100);
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
      .footer {
        grid-area: foot;
      }
      .spotify__body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0, 0, 0, 1));
        background-color: rgb(32, 87, 100);
        .body {
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
        }
      }
    }
  }
`;
