import { reducerCases } from "./Constants";
export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  selectedPlaylist: null,
  selectedPlaylistId: "2tDNKSrevZC6xKARQp0efQ",
  currentTrack: null,
};

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
    default:
      return state;
  }
};

export default reducer;
