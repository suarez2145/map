import React from 'react';
import  "../sass/style.scss";
import {useState} from "react";


export default function Footer() {

    const [isRunning, setRun] = useState(true);

// creating a pause/play button for my video. i dont like the default controls 
        let toggleVideo = () => {
            setRun(!isRunning);
            let vidPlayer = document.getElementById('vid_player');
            if(isRunning) {
                vidPlayer.pause()
            } else {
                vidPlayer.play()
            }
        }

    return (
        <footer className="container-fluid g-0 to_btm d-flex justify-content-end"> 
        <div>
            <div className="button-cont">
                {isRunning ?
                    <button id="pause-button" className="bg-transparent border-0" onClick={toggleVideo}>
                        <img src="pause.png"></img>
                    </button> : 
                    <button id="play-button" className="bg-transparent border-0" onClick={toggleVideo}>
                        <img src="play-buttton.png"></img>
                    </button>
                }
            </div>
        </div>

        </footer>
    )
}