import React from 'react';
import  "../sass/style.scss";

export default function Video() {

    return (
        <div className="video-cont">
            <video id="vid_player" className="vid-plyr" poster="image" preload="auto" autoplay="true" playsinline="true" loop="true" muted="true">
                <source src="istockphoto-1435768984-640_adpp_is.mp4" type="video/mp4" />
            </video>
        </div>
    )

}