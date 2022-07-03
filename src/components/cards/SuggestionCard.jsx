import styled from "styled-components";
function SuggestionCard() {
  return (
    <SContainer>
      <h1>Pop</h1>
    </SContainer>
  );
}

export default SuggestionCard;

const SContainer = styled.div`
  padding: 0.5rem 2rem;
  background: orange;
  border-radius: 8px;
  max-width: 300px;
  min-width: 190px;
  height: 200px;
  margin: 1rem;
`;
