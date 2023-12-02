"use client";

import { Dispatch, SetStateAction } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

export function CustomNumberInput({
  value = 0,
  setValue,
  type,
}: {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  type: "length" | "amount";
}) {
  const increaseValue = async () => {
    await increaseControls.start("animate");
    await increaseControls.start("initial");
    setValue((currentValue: number) => {
      if (currentValue > 8 && type === "length") {
        return currentValue;
      }

      if (currentValue > 499 && type === "amount") {
        return currentValue;
      }
      return currentValue + 1;
    });
  };

  const decreaseValue = async () => {
    await decreaseControls.start("animate");
    await decreaseControls.start("initial");
    setValue((currentValue: number) => {
      if (currentValue < 4 && type === "length") {
        return currentValue;
      }

      if (currentValue < 11 && type === "amount") {
        return currentValue;
      }
      return currentValue - 1;
    });
  };

  const increaseControls = useAnimation();
  const decreaseControls = useAnimation();

  const bounceVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideVariants = {
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex text-7xl items-center text-white">
      <motion.div
        className="m-12"
        variants={slideVariants}
        initial="initial"
        animate="animate"
        key={value}
      >
        {value}
      </motion.div>
      <div className="flex flex-col">
        <motion.button
          onClick={increaseValue}
          variants={bounceVariants}
          initial="initial"
          animate={increaseControls}
        >
          <BiSolidUpArrow />
        </motion.button>
        <motion.button
          onClick={decreaseValue}
          variants={bounceVariants}
          initial="initial"
          animate={decreaseControls}
        >
          <BiSolidDownArrow />
        </motion.button>
      </div>
    </div>
  );
}
