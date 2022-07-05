import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";
import { Settings, User, Power } from "react-feather";

export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();
  const [open, setOpen] = useState(false);
  const toggleSettings = () => {
    setOpen((prevState) => !prevState);
  };
  const logout = () => {
    localStorage.clear();
    window.location.hash = "";
    window.location.pathname = "/login";
  };
  return (
    <NavContainer navBackground={navBackground}>
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs or podcasts" />
      </div>
      <div className="right row">
        <div className="settings">
          <Settings onClick={toggleSettings} />
        </div>
        <div className="avatar">
          <a href={userInfo?.userUrl}>
            <CgProfile />
            <span>{userInfo?.name}</span>
          </a>
        </div>
      </div>
      {open && (
        <div className="dropdown">
          <p className="space">
            Account <User size={15} />
          </p>
          <p>Profile</p>
          <p className="space" onClick={logout}>
            Logout <Power size={15} />
          </p>
        </div>
      )}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 17vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search__bar {
    background-color: white;
    width: 40%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .right {
    .avatar {
      background-color: black;
      padding: 0.3rem 0.4rem;
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
    .settings {
      color: white;
    }
  }
  .dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 1rem;
    gap: 5px;
    width: 170px;
    background-color: #2a2a2aed;
    padding: 0.5rem 0.3rem;
    border-radius: 3px;
    color: white;
    p {
      padding: 0.5rem 1rem;
      border-radius: 3px;
      cursor: pointer;
    }
    p:hover {
      background-color: #6b6b6bbb;
    }
  }
`;
