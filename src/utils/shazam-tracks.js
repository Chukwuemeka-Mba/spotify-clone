import { useEffect } from "react";
import { useStateProvider } from "./StateProvider";

const [{ token, topTracks, audioFeatures }, dispatch] = useStateProvider();

console.log(audioFeatures);
useEffect(() => {
  function getAudioFeatures() {
    console.log(audioFeatures);
  }
  getAudioFeatures();
}, [token, dispatch]);
