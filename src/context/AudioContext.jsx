import React, { createContext, useRef } from "react";
import homeMusicFile from "../assets/songs/home.mp3";

export const AudioContext = createContext();

export function AudioProvider({ children }) {

    const homeAudioRef = useRef(new Audio(homeMusicFile));
    const songAudioRef = useRef(null);

    homeAudioRef.current.loop = true;
    homeAudioRef.current.volume = 0.6;

    const playHomeMusic = () => {
        homeAudioRef.current.play().catch(() => { });
    };

    const pauseHomeMusic = () => {
        homeAudioRef.current.pause();
    };

    const playSong = (src) => {

        // pause home music
        homeAudioRef.current.pause();

        // stop previous song
        if (songAudioRef.current) {
            songAudioRef.current.pause();
            songAudioRef.current.currentTime = 0;
        }

        const audio = new Audio(src);
        audio.volume = 0.8;

        audio.play().catch(() => { });

        songAudioRef.current = audio;
    };

    const stopSongAndResumeHome = () => {

        if (songAudioRef.current) {
            songAudioRef.current.pause();
            songAudioRef.current.currentTime = 0;
        }

        playHomeMusic();
    };

    return (
        <AudioContext.Provider
            value={{
                playHomeMusic,
                pauseHomeMusic,
                playSong,
                stopSongAndResumeHome
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}