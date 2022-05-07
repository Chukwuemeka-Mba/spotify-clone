import { reducerCases } from "./Constants";
export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  selectedPlaylist: null,
  selectedPlaylistId: "1uesVzO20VhX0ePXiaCKu4",
  currentTrack: null,
  playerState: false,
};
// 2tDNKSrevZC6xKARQp0efQ
const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_CURRENT_TRACK: {
      return {
        ...state,
        currentTrack: action.currentTrack,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.playerState,
      };
    }
    case reducerCases.SET_PLAYLIST_ID: {
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    }
    default:
      return state;
  }
};

export default reducer;
