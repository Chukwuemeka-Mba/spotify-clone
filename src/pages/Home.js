import styled from "styled-components";
import MobileFooter from "../components/MobileFooter";
function Home() {
  return (
    <HomeContainer>
      <div className="mobile">
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
  }
  @media screen and (min-width: 800px) {
  }
`;
