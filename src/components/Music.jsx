import React, { useState, useEffect, useRef, useContext } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import config from "./config";
import { AudioContext } from "../context/AudioContext";

const imageFiles = import.meta.glob("../assets/music/*.png");
const audioFiles = import.meta.glob("../assets/songs/*.mp3");

function Music() {

  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);

  const containerRef = useRef(null);

  const { playSong, stopSongAndResumeHome } = useContext(AudioContext);

  useEffect(() => {

    const loadAssets = async () => {

      const loadedSongs = await Promise.all(

        config.musicGallery.map(async (song, index) => {

          const imagePath = `../assets/music/${index + 1}.png`;
          const audioPath = `../assets/songs/${index + 1}.mp3`;

          let albumCover = null;
          let songFile = null;

          if (imageFiles[imagePath]) {

            const img = await imageFiles[imagePath]();
            albumCover = img.default;

          }

          if (audioFiles[audioPath]) {

            const aud = await audioFiles[audioPath]();
            songFile = aud.default;

          }

          if (!albumCover || !songFile) return null;

          return {

            albumCover,
            src: songFile,
            title: song.title,
            artist: song.artist,
            left: song.left,
            top: song.top

          };

        })

      );

      setSongs(loadedSongs.filter(Boolean));

    };

    loadAssets();

  }, []);

  // 🔊 saat keluar dari halaman music
  useEffect(() => {

    return () => {

      stopSongAndResumeHome();

    };

  }, []);

  return (

    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">

        <h1 className="text-2xl font-bold -mb-4 mt-4 text-white text-center">
          {config.musicTitle}
        </h1>

        <div
          ref={containerRef}
          className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12"
        >

          {songs.map((song, index) => (

            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{
                left: song.left,
                top: song.top
              }}
              drag
              dragConstraints={containerRef}
              onPointerDown={() => playSong(song.src)}
            >

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">

                <div className="w-12 h-12 flex-shrink-0">

                  <img
                    src={song.albumCover}
                    alt="cover"
                    className="w-full h-full rounded-md object-cover"
                  />

                </div>

                <div className="flex-1 min-w-0">

                  <h2 className="text-white text-sm truncate">
                    {song.title}
                  </h2>

                  <p className="text-white/70 text-xs truncate">
                    {song.artist}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="flex justify-center">

          <button
            className="px-4 py-2 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >

            <ArrowLeft /> {config.previousPageText}

          </button>

        </div>

      </div>

    </div>

  );

}

export default Music;