import { useState } from "react";
import { Power, Settings, User, ChevronLeft } from "react-feather";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const toggleSettings = () => {
    setOpen((prevState) => !prevState);
  };
  const logout = () => {
    localStorage.clear();
    window.location.hash = "";
    window.location.pathname = "/";
  };
  return (
    <MNavContainer>
      <div className="row">
        <Link to="/">
          <ChevronLeft />
        </Link>
        <h1>Good Morning</h1>
      </div>
      <div className="row">
        <Settings onClick={toggleSettings} />
        <div className="avatar">
          <Link to="/">
            <CgProfile />
            <p>Nero</p>
          </Link>
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
    </MNavContainer>
  );
}

export default MobileNavbar;
const MNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  color: white;
  h1 {
    font-size: 24px;
  }
  .row {
    gap: 1rem;
    align-items: center;
    a {
      color: white;
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
