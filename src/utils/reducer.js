import { reducerCases } from "./Constants";
export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  playlists2: [],
  playlists3: [],
  categories: [],
  searchResults: [],
  artists: [],
  recentTracks: [],
  topTracks: [],
  selectedPlaylist: null,
  selectedPlaylistId: "2tDNKSrevZC6xKARQp0efQ",
  currentTrack: null,
  playerState: true,
  isMobile: false,
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
    case reducerCases.SET_PLAYLISTS2: {
      return {
        ...state,
        playlists2: action.playlists2,
      };
    }
    case reducerCases.SET_PLAYLISTS3: {
      return {
        ...state,
        playlists3: action.playlists3,
      };
    }
    case reducerCases.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      };
    }
    case reducerCases.SET_ARTISTS: {
      return {
        ...state,
        artists: action.artists,
      };
    }
    case reducerCases.SET_RECENT_TRACKS: {
      return {
        ...state,
        recentTracks: action.recentTracks,
      };
    }
    case reducerCases.SET_TOP_TRACKS: {
      return {
        ...state,
        topTracks: action.topTracks,
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
    case reducerCases.SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.searchResults,
      };
    }
    default:
      return state;
  }
};

export default reducer;
