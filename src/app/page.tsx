"use client";

import { useEffect, useState } from "react";
import GameSettings from "./_components/GameSettings";
import TypableScreen from "./_components/TypeableScreen";
import WordScreen from "./_components/WordScreen";
import GameEnd from "./_components/GameEnd";
import Link from "next/link";

export default function Home() {
  const [availablewords, setAvailableWords] = useState([""]);
  const [currentlyTyping, setCurrentlyTyping] = useState("");
  const [gameState, setGameState] = useState("BEFORESTART");
  const [gameMode, setGameMode] = useState("EASY");
  const [seconds, setSeconds] = useState(0);

  if (currentlyTyping.toUpperCase() === availablewords[0]) {
    availablewords.shift();
    setCurrentlyTyping("");
  }
  if (gameState === "INPROGRESS" && availablewords.length === 0) {
    setGameState("GAMEEND");
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (gameState === "INPROGRESS") {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }

      if (gameState === "BEFORESTART") {
        setSeconds(0);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [gameState, seconds]);

  return (
    <>
      <main className="bg-[#41393E] h-screen">
        {gameState === "BEFORESTART" ? (
          <GameSettings
            setAvailableWords={setAvailableWords}
            gameMode={gameMode}
            setGameMode={setGameMode}
            setGameState={setGameState}
          />
        ) : (
          ""
        )}

        {gameState === "INPROGRESS" ? (
          <div className="relative flex">
            <TypableScreen
              typedText={currentlyTyping}
              setTypedText={setCurrentlyTyping}
            />
            <WordScreen
              words={availablewords}
              currentlyTyping={currentlyTyping}
            />
          </div>
        ) : (
          ""
        )}

        {gameState === "GAMEEND" ? (
          <GameEnd
            setGameState={setGameState}
            seconds={seconds}
            gameMode={gameMode}
          />
        ) : (
          ""
        )}

        <div className="text-white absolute bottom-0 right-0 m-6">
          <Link href="https://aloush.dev" target="_blank">
            aloush.dev
          </Link>
        </div>
      </main>
    </>
  );
}
