import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import ControlBar from "./components/ControlBar";
function App() {
    const [url, setUrl] = useState(
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    );
    const [videoParams, setVideoParams] = useState({
        videoPause: false,
        theaterMode: false,
        mute: false,
    });
    function pauseAndPlay() {
        console.log("pause called");
        const videoElement = document.querySelector(".main--video");
        if (videoElement.paused) {
            videoElement.play();
            setVideoParams((prev) => {
                return {
                    ...prev,
                    videoPause: false,
                };
            });
        } else {
            videoElement.pause();
            setVideoParams((prev) => {
                return {
                    ...prev,
                    videoPause: true,
                };
            });
        }
    }
    function fullScreen() {
        const videoElement = document.querySelector(".main--video");

        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) {
            /* Safari */
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
            /* IE11 */
            videoElement.msRequestFullscreen();
        }
    }
    function toggleTheaterMode() {
        const videoElement = document.querySelector(".main--video");
        if (videoElement.classList.contains("theater--video")) {
            videoElement.classList.remove("theater--video");
            videoElement.classList.add("default--video");
            setVideoParams((prev) => {
                return {
                    ...prev,
                    theaterMode: false,
                };
            });
        } else {
            videoElement.classList.remove("default--video");
            videoElement.classList.add("theater--video");
            setVideoParams((prev) => {
                return {
                    ...prev,
                    theaterMode: true,
                };
            });
        }
    }
    function skip() {
        const videoElement = document.querySelector(".main--video");
        videoElement.currentTime += 5;
    }
    function unSkip(duration) {
        const videoElement = document.querySelector(".main--video");
        videoElement.currentTime -= 5;
    }
    function toggleMute() {
        console.log("mute");
        const videoElement = document.querySelector(".main--video");
        videoElement.muted = !videoElement.muted;
        setVideoParams((prev) => {
            return {
                ...prev,
                mute: !prev.mute,
            };
        });
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            console.log(key);
            if (key === "t") {
                toggleTheaterMode();
            } else if (key === " ") {
                pauseAndPlay();
            } else if (key === "f") {
                fullScreen();
            } else if (key === "ArrowRight") {
                skip();
            } else if (key === "ArrowLeft") {
                unSkip();
            } else if (key === "m") {
                toggleMute();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="App">
            <Navbar setUrl={setUrl} />
            <Video url={url} pauseAndPlay={pauseAndPlay} />
            <ControlBar
                videoParams={videoParams}
                setVideoParams={setVideoParams}
                pauseAndPlay={pauseAndPlay}
                fullScreen={fullScreen}
                toggleTheaterMode={toggleTheaterMode}
                toggleMute={toggleMute}
            />
        </div>
    );
}

export default App;
