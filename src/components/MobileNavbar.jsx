import { Power } from "react-feather";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";
function MobileNavbar() {
  const [{ userInfo }] = useStateProvider();

  const logout = () => {
    localStorage.clear();
    window.location.hash = "";
    window.location.href = "/";
    window.location.reload();
  };
  return (
    <MNavContainer>
      <div className="row">
        <h1>Good Morning</h1>
      </div>
      <div className="row">
        <div>
          <h4 className="space" onClick={logout}>
            Logout <Power size={15} />
          </h4>
        </div>
        <div className="avatar">
          <Link to={userInfo?.userUr}>
            <CgProfile />
            <p>{userInfo?.name}</p>
          </Link>
        </div>
      </div>
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
    .space {
      display: flex;
      gap: 10px;
      cursor: pointer;
      color: #ccc;
    }
    .space:hover {
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
    z-index: 1;
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
