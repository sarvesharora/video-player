import React, { useRef } from "react";

export default function Video(props) {
    return (
        <div className="video--container">
            <video
                className="main--video default--video"
                src={props.url}
                autoPlay={true}
                onClick={props.pauseAndPlay}
            ></video>
        </div>
    );
}
