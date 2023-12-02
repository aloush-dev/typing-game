"use client";

import { useState } from "react";
import GameSettings from "./_components/GameSettings";
import TypableScreen from "./_components/TypeableScreen";
import WordScreen from "./_components/WordScreen";
import GameEnd from "./_components/GameEnd";
import Link from "next/link";

export default function Home() {
  const [availablewords, setAvailableWords] = useState([""]);
  const [currentlyTyping, setCurrentlyTyping] = useState("");
  const [gameState, setGameState] = useState("BEFORESTART");
  if (currentlyTyping.toUpperCase() === availablewords[0]) {
    availablewords.shift();
    setCurrentlyTyping("");
  }
  if (gameState === "INPROGRESS" && availablewords.length === 0) {
    setGameState("GAMEEND");
  }

  return (
    <>
      <main className="bg-[#41393E] h-screen">
        {gameState === "BEFORESTART" ? (
          <GameSettings
            setAvailableWords={setAvailableWords}
            gameState={gameState}
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

        {gameState === "GAMEEND" ? <GameEnd setGameState={setGameState} /> : ""}

        <div className="flex items-center text-white">
          <Link href="https://aloush.dev" target="_blank">
            aloush.dev
          </Link>
        </div>
      </main>
    </>
  );
}
