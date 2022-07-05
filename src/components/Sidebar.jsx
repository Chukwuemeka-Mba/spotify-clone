import React from "react";
import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <Link to="/home" className="logo">
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
  height: 100%;
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
`;
