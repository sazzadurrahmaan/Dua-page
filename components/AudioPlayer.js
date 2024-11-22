"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import audioBtn from '@/public/assets/audiobtn.svg';
import pauseBtn from '@/public/assets/pause.svg';
import suffle from '@/public/assets/suffle.svg';

function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoopActive, setIsLoopActive] = useState(false);
  const [error, setError] = useState(null);

  const handleAudioToggle = () => {
    if (!audioSrc || !audioRef.current) {
      setError("Audio source is missing or invalid.");
      console.error("Audio source is missing or invalid.");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => {
          setError("Audio playback failed.");
          console.error("Playback error:", err);
        });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoopToggle = () => {
    setIsLoopActive(!isLoopActive);
    if (audioRef.current) audioRef.current.loop = !isLoopActive;
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement || !audioSrc) return;

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    const handlePlaybackError = (event) => {
      setError("An error occurred while trying to play the audio.");
      console.error("Audio playback error:", event);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement.addEventListener("error", handlePlaybackError);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.removeEventListener("error", handlePlaybackError);
    };
  }, [audioSrc]);

  // Reset playback state when audioSrc changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audioSrc]);

  return (
    <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
      {audioSrc && <audio ref={audioRef} src={audioSrc} crossOrigin="anonymous" />}

      {audioSrc &&
        <div className="flex flex-row items-center gap-x-3 xs:w-full">
          <Image
            className="cursor-pointer xs:w-8"
            src={isPlaying ? pauseBtn : audioBtn}
            alt="play-pause-button"
            width={50}
            height={50}
            onClick={handleAudioToggle}
          />

          <div className="flex flex-col items-center w-full">
            <input
              className={isPlaying ? "" : "hidden"}
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => {
                audioRef.current.currentTime = e.target.value;
                setCurrentTime(e.target.value);
              }}
              style={{
                backgroundSize: `${(currentTime / duration) * 100}% 100%`,
              }}
            />
            <p className="ml-2 text-mute-grey-200 text-sm dark:text-dark-text mt-1 whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </div>
        </div>}

      <div className={isPlaying ? "" : "hidden"}>
        <Image
          className="cursor-pointer w-8 opacity-60"
          alt="shuffle"
          src={suffle}
          width={50}
          height={50}
          onClick={handleLoopToggle}
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default AudioPlayer;
