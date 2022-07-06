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
import Shazam from "./pages/Shazam";

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
      route === "/" ||
      route === "/home" ||
      route === "/search" ||
      route === "/shazam"
    ) {
      const token = localStorage.getItem("spotify-token");
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return (
    <div>
      {token !== "undefined" && token !== null ? (
        <Router>
          <Route exact path="/" component={Spotify} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/shazam" component={Shazam} />
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
