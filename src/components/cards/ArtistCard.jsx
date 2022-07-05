import styled from "styled-components";
function ArtistCard({ name, image }) {
  return (
    <Aritst>
      <div className="container">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </Aritst>
  );
}

export default ArtistCard;
const Aritst = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 2rem 1rem;
    img {
      width: 150px;
      height: 150px;
      border-radius: 100%;
    }
    p {
      max-width: 150px;
    }
  }
`;
