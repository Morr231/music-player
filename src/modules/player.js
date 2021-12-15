import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPause,
    faPlay,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "../sass/player.sass";

function Player({ song, imageRef }) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const playMusic = (e) => {
        if (!playing) {
            setPlaying(true);
            audioRef.current.play();
            imageRef.current.style.animation = "Rotate 35s infinite linear";
        } else {
            imageRef.current.style.animation = "";
            setPlaying(false);
            audioRef.current.pause();
        }
    };

    let BI = {
        backgroundImage: `linear-gradient(to right, ${song.color[0]}, ${song.color[1]})`,
    };

    const [songInfo, setSongInfo] = useState({
        currentTime: "0:00",
        duration: "0:00",
    });

    const [songCurrentTime, setSongCurrentTime] = useState(0);

    function correctTime(sec) {
        let temp = "";
        temp += Math.floor((sec / 60) % 60);
        temp += ":";
        if ((sec % 60) / 10 > 0) {
            temp += Math.floor((sec % 60) / 10);
        }
        temp += Math.floor((sec % 60) % 10);
        return temp;
    }

    function updateTime(e) {
        setSongCurrentTime(e.target.currentTime);
        if (Math.floor(e.target.currentTime) >= 1) {
            setSongInfo({
                ...songInfo,
                currentTime: correctTime(Math.floor(e.target.currentTime)),
                duration: e.target.duration,
            });
        }
    }

    function updateDuration(e) {
        setSongInfo({
            ...songInfo,
            duration: e.target.duration,
        });
    }

    return (
        <div className="player">
            <div className="time_control">
                <p className="player_start">{songInfo.currentTime}</p>
                <input
                    type="range"
                    style={BI}
                    className="player_range"
                    min="0"
                    max={songInfo.duration}
                    value={songCurrentTime}
                    onChange={() => {}}
                ></input>
                <p className="player_end">{correctTime(songInfo.duration)}</p>
            </div>
            <div className="player_control">
                <FontAwesomeIcon
                    className="player_left_arrow"
                    icon={faAngleLeft}
                    size="2x"
                />
                <FontAwesomeIcon
                    onClick={playMusic}
                    className="player_play"
                    icon={playing ? faPause : faPlay}
                    size="2x"
                />
                <FontAwesomeIcon
                    className="player_right_arrow"
                    icon={faAngleRight}
                    size="2x"
                />
            </div>
            <audio
                onLoadedData={updateDuration}
                onTimeUpdate={updateTime}
                ref={audioRef}
                src={song.path}
            ></audio>
        </div>
    );
}

export default Player;
