import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";
import { Link } from "react-router-dom";
import { Dribbble } from "react-feather";
export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <Link to="/" className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="Login Logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="/home">
              <MdHomeFilled />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <MdSearch />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/library">
              <IoLibrary />
              Library
            </Link>
          </li>
          <li>
            <Link to="/shazam">
              <Dribbble />
              Shazam
            </Link>
          </li>
        </ul>
        <div className="playlists">
          <div>
            <p>PLAYLISTS</p>
          </div>
          <Playlists />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  color: #b3b3b3;
  height: 100vh;
  .top__links {
    display: flex;
    flex-direction: column;
  }
  .logo {
    text-align: center;
    margin: 1rem 0;
  }
  img {
    max-inline-size: 150px;
    block-size: auto;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    li {
      a {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        text-decoration: none;
        color: #b3b3b3;
        &:hover {
          color: white;
        }
        svg {
          font-size: 20px;
        }
      }
    }
  }
  .playlists {
    display: flex;
    flex-direction: column;
    align-items: left;
    p {
      padding: 1rem;
      text-decoration: underline;
    }
  }

  .logo {
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
