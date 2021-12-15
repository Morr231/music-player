import React, { useState, useRef } from "react";
import "./css/bootstrap-reboot.min.css";
import "./sass/app.sass";

import Song from "./modules/song.js";
import Player from "./modules/player.js";
import Library from "./modules/library.js";
import data from "./util.js";

const App = () => {
    const [songs, setSongs] = useState(data);
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const imageRef = useRef(null);
    return (
        <div className="App">
            <h1 className="waves">Waves</h1>
            <div className="music_player">
                <Song song={currentSong} imageRef={imageRef} />
                <Player song={currentSong} imageRef={imageRef} />
                <Library songs={songs} setCurrentSong={setCurrentSong} />
            </div>
        </div>
    );
};

export default App;
