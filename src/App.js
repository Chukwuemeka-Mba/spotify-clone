import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import "./index.css";

// components and pages
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Spotify from "./components/Spotify";

function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    if (localStorage.getItem("spotify-token") === null || undefined) {
      localStorage.clear();
      const hash = window.location.hash;
      const token = hash.substring(1).split("&")[0].split("=")[1];
      window.localStorage.setItem("spotify-token", token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
      window.location.hash = "";
    }
    const route = window.location.pathname;
    if (
      route === "/library" ||
      route === "/spotify" ||
      route === "/home" ||
      route === "/search"
    ) {
      const token = localStorage.getItem("spotify-token");
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return (
    <div>
      {token ? (
        <Router>
          <Route exact path="/spotify" component={Spotify} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/library" component={Library} />
        </Router>
      ) : (
        <Router>
          <Route exact path="/" component={Login} />
        </Router>
      )}
    </div>
  );
}

export default App;
