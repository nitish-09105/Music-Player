import React, { useState, useEffect, useRef } from "react";
import Player from "./components/Player";

function App() {
  const[songs]=useState([
    {
      title:"Dil Galti Kar Baitha Hai",
      artist:"Jubin Nautiyal",
      img_src:"./images/dil glti kr baitha h.png",
      src:"./songs/Dil Galti Kar Baitha Hai .mp3"
    },
    {
      title:"Dekha Hazaro Dafaa",
      artist:"Atif Aslam",
        img_src:"./images/Dekha Hazaro Dafaa h.png",
      src:"./songs/Dekha Hazaro Dafaa.mp3"
    },
    {
      title:"Mera Pyar Tera Pyar",
      artist:"Arijit Singh",
      img_src:"./images/Mera Pyar Tera Pyar.png",
      src:"./songs/Mera-Pyar-Tera-Pyar.mp3"
    },
    {
      title:"Khairiyat",
      artist:"Arijit Singh",
      img_src:"./images/Khairiyat.png",
      src:"./songs/Khairiyat.mp3"
    },
    {
      title:"Aan Milo Sajna",
      artist:"Laxmikant Pyarelal",
      img_src:"./images/Aan Milo Sajna.png",
      src:"./songs/Aan Milo Sajna.mp3"
    }
  ])

  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex,setNextSongIndex]=useState(0);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length-1){
        return 0
      }
      else{
        return currentSongIndex + 1
      }
    })
  },[currentSongIndex,songs.length])


  return <div className="App">
    <Player
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs} />
  </div>
}
export default App;
