import React, { useState, useEffect } from "react";
import {
    GiPlayButton,
    GiPauseButton,
    GiSpeaker,
    GiSpeakerOff,
} from "react-icons/gi";
export default function ControlBar(props) {
    const videoElement = document.querySelector(".main--video");
    const { videoPause, theaterMode } = props.videoParams;

    return (
        <div>
            <button onClick={props.pauseAndPlay}>
                {props.videoParams.videoPause ? (
                    <GiPlayButton />
                ) : (
                    <GiPauseButton />
                )}
            </button>
            <button onClick={props.fullScreen}>fullScreen</button>
            <button onClick={props.toggleTheaterMode}>theaterMode</button>
            <button onClick={props.toggleMute}>
                {props.videoParams.mute ? <GiSpeakerOff /> : <GiSpeaker />}
            </button>
        </div>
    );
}
