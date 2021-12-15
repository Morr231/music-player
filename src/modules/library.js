import React, { useState, useRef } from "react";

import "../sass/library.sass";
import Song from "../modules/song";

function Library({ songs, setCurrentSong }) {
    const imageRef = useRef(null);
    const [songId, setSongId] = useState(0);
    setCurrentSong(songs[songId]);
    console.log(songId);
    return (
        <div className="library">
            <h1 className="library_h1">Library</h1>
            {songs.map((item, index) => {
                return (
                    <Song
                        song={item}
                        imageRef={imageRef}
                        setSongId={setSongId}
                        setCurrentSong={setCurrentSong}
                    />
                );
            })}
        </div>
    );
}

export default Library;
