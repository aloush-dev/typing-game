"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CustomNumberInput } from "./CustomNumberInput";
import { motion, useAnimation } from "framer-motion";
import { getWords } from "../_utils/utils";

export default function GameSettings({
  setAvailableWords,
  gameMode,
  setGameState,
  setGameMode
}: {
  setAvailableWords: Dispatch<SetStateAction<string[]>>;
  setGameState: Dispatch<SetStateAction<string>>;
  setGameMode: Dispatch<SetStateAction<string>>;
  gameMode: string;
}) {
  const [wordLength, setWordLength] = useState(4);
  const [wordAmount, setWordAmount] = useState(15);

  const gameStart = async () => {
    const data = await getWords(wordLength, wordAmount);
    setAvailableWords(data);
    setGameState("INPROGRESS");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-screen">
      <div>
        <button
          onClick={() => {
            setWordAmount(15);
            setWordLength(4);
            setGameMode("EASY");
          }}
          className="text-white border-white border-4 p-2 rounded-2xl m-4"
        >
          EASY
        </button>
        <button
          onClick={() => {
            setWordAmount(25);
            setWordLength(7);
            setGameMode("MEDIUM");
          }}
          className="text-white border-white border-4 p-2 rounded-2xl m-4"
        >
          MEDIUM
        </button>
        <button
          onClick={() => {
            setWordAmount(40);
            setWordLength(9);
            setGameMode("HARD");
          }}
          className="text-white border-white border-4 p-2 rounded-2xl m-4"
        >
          HARD
        </button>
        <button
          onClick={() => {
            setWordAmount(25);
            setWordLength(5);
            setGameMode("CUSTOM");
          }}
          className="text-white border-white border-4 p-2 rounded-2xl m-4"
        >
          CUSTOM
        </button>
      </div>

      <div className="flex flex-col justify-center items-center border-4 rounded-2xl p-4 m-6">
        <div className="text-white text-4xl m-6">{gameMode}</div>
        <div className="flex">
          <div className="text-white flex flex-col justify-center items-center">
            WORD LENGTH
            {gameMode === "CUSTOM" ? (
              <CustomNumberInput
                value={wordLength}
                setValue={setWordLength}
                type="length"
              />
            ) : (
              <div className="flex text-7xl items-center text-white p-12 px-20">
                {wordLength}
              </div>
            )}
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            WORD AMOUNT
            {gameMode === "CUSTOM" ? (
              <CustomNumberInput
                value={wordAmount}
                setValue={setWordAmount}
                type="amount"
              />
            ) : (
              <div className="flex text-7xl items-center text-white p-12 px-20">
                {wordAmount}
              </div>
            )}
          </div>
        </div>
      </div>

      <motion.button
        onClick={gameStart}
        className="text-white rounded-full border-8 border-white w-80 h-80 text-7xl justify-center my-20"
      >
        START
      </motion.button>
    </div>
  );
}
