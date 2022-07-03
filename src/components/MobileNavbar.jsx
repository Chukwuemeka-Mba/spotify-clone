import { useState } from "react";
import { Power, Settings, User } from "react-feather";
import styled from "styled-components";

function MobileNavbar() {
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
    <MNavContainer>
      <h1>Good Morning</h1>
      <Settings onClick={toggleSettings} />
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
