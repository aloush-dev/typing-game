"use client";

import { useRouter } from "next/navigation";
import { Leaderboards } from "../_components/Leaderboards";

export default function LeaderboardPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center flex-col items-center">
      <button
        className="text-white border-white border-4 p-2 rounded-2xl m-4"
        onClick={() => {
          router.push("/");
        }}
      >
        HOME
      </button>
      <div className="flex flex-col md:flex-row justify-center p-8">
        <Leaderboards gameMode="EASY" />
        <Leaderboards gameMode="MEDIUM" />
        <Leaderboards gameMode="HARD" />
      </div>
    </div>
  );
}
