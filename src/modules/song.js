import React, { useState } from "react";
import "../sass/song.sass";

const Song = ({ song, setSongId, imageRef, setCurrentSong }) => {
    return (
        <div className="song">
            <img
                ref={imageRef}
                src={song.cover}
                alt={song.name}
                className="song_img"
                onClick={() => {
                    setSongId(song.uid);
                }}
            />
            <div className="song_description">
                <h2 className="song_name">{song.name}</h2>
                <div className="song_author">{song.author}</div>
            </div>
        </div>
    );
};

export default Song;
