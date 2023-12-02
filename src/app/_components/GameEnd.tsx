import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function GameEnd({
  setGameState,
}: {
  setGameState: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-white text-6xl z-10 justify-center items-center">
        THANKS FOR PLAYING
      </div>

      <motion.button
        onClick={() => setGameState("BEFORESTART")}
        className="text-white rounded-full border-8 border-white w-96 h-96 text-7xl justify-center my-20"
      >
        PLAY AGAIN?
      </motion.button>
    </div>
  );
}
