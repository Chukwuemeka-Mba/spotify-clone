import styled from "styled-components";
function TrackCard({ track }) {
  return (
    <TrackContainer>
      <div>
        {track.album.images.length && (
          <img src={track.album.images[2].url} alt="Album Artwork" />
        )}
      </div>
      <TrackText>
        <h2>{track.album.name}</h2>
        <p>{track.name}</p>
      </TrackText>
      <p>
        {/* {track.duration_ms && (
          <TrackDuration>{formatDuration(track.duration_ms)}</TrackDuration>
        )} */}
      </p>
    </TrackContainer>
  );
}

export default TrackCard;
const TrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  width: 300px;
`;
const TrackText = styled.div`
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  h2 {
    font-size: 12px;
  }
  p {
    font-size: 13px;
  }
`;
