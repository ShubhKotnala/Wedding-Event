import { useState, useEffect } from "react";
import { StyledSongButtonContainer } from "./style";
import { imgs } from "../../assets/images";
import Sound from "react-sound";

const SongButton = () => {
  const [audio] = useState(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3")
  );
  const [playing, setPlaying] = useState(true);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.play();
    audio.addEventListener("ended", () => setPlaying(true));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(true));
    };
    let play_btn = document.getElementById("song_btn");
    play_btn?.click();
  }, []);

  return (
    <>
      <Sound
        url='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
        playStatus={"PLAYING"}
        playFromPosition={0 /* in milliseconds */}
      />
    </>
  );
};

export default SongButton;
