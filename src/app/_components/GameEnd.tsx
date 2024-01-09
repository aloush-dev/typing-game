"use client";

import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { Leaderboards } from "./Leaderboards";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../_utils/firebase";

export default function GameEnd({
  setGameState,
  seconds,
  gameMode,
}: {
  setGameState: Dispatch<SetStateAction<string>>;
  seconds: number;
  gameMode: string;
}) {
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState("SUBMIT");
  const [name, setName] = useState("");

  const addScore = async () => {
    setDisableButton(true);
    const collectionRef = collection(
      db,
      `leaderboard-${gameMode.toLowerCase()}`
    );

    try {
      await addDoc(collectionRef, {
        name: name,
        seconds: seconds,
        postedOn: serverTimestamp(),
      });
      setButtonText("SUCCESS");
      setName("");
    } catch (error) {
      setDisableButton(false);
      setButtonText("ERROR");
    }
  };

  return (
    <div className="flex flex-col p-10 items-center">
      <div className="text-white text-4xl z-10 justify-center items-center m-4 text-center">
        You completed in {seconds} seconds
      </div>

      <motion.button
        onClick={() => setGameState("BEFORESTART")}
        className="text-white rounded-full md:border-8 border-white md:w-96 md:h-96 md:text-7xl justify-center my-20 w-40 h-40  border-4"
      >
        PLAY AGAIN?
      </motion.button>

      <div className="flex justify-center items-center">
        <input
          className="p-2 rounded-lg m-2 bg-[#41393E] border-4 border-white text-white "
          placeholder="Submit your score"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        ></input>
        <button
          className=" px-6 py-2 text-md border-4 border-white text-white rounded-xl"
          disabled={disableButton}
          onClick={addScore}
        >
          {buttonText}
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        <Leaderboards gameMode="EASY" />
        <Leaderboards gameMode="MEDIUM" />
        <Leaderboards gameMode="HARD" />
      </div>
    </div>
  );
}
