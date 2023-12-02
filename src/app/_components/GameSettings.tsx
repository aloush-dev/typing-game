"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CustomNumberInput } from "./CustomNumberInput";
import { motion, useAnimation } from "framer-motion";
import { getWords } from "../_utils/utils";

export default function GameSettings({
  setAvailableWords,
  gameState,
  setGameState,
}: {
  setAvailableWords: Dispatch<SetStateAction<string[]>>;
  setGameState: Dispatch<SetStateAction<string>>;
  gameState: string;
}) {
  const [wordLength, setWordLength] = useState(5);
  const [wordAmount, setWordAmount] = useState(25);

  const gameStart = async () => {
    const data = await getWords(wordLength, wordAmount);
    setAvailableWords(data);
    setGameState("INPROGRESS");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-center items-center">
        <div className="text-white flex flex-col justify-center items-center">
          WORD LENGTH
          <CustomNumberInput
            value={wordLength}
            setValue={setWordLength}
            type="length"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          WORD AMOUNT
          <CustomNumberInput
            value={wordAmount}
            setValue={setWordAmount}
            type="amount"
          />
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
