import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../_utils/firebase";
import { collection, orderBy, query, limit } from "firebase/firestore";

export const Leaderboards = ({ gameMode }: { gameMode: string }) => {
  const [value, loading, error] = useCollection(
    query(
      collection(db, `leaderboard-${gameMode.toLowerCase()}`),
      orderBy("seconds", "asc"),
      limit(10)
    ),

    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    console.error("Error fetching data:", error);
    return <div className="text-white">Error fetching data</div>;
  }

  return (
    <div className="flex flex-col p-6 rounded-3xl w-80 h-auto text-white m-2 border-4 border-white">
      <h2 className="font-bold text-xl text-center">{gameMode}</h2>

      {value?.docs.map((doc) => {
        const data = doc.data();
        const time = data.postedOn?.toDate();
        const seconds = data.seconds;

        return (
          <div
            className="flex font-bold p-2 my-2 text-center justify-between w-full"
            key={doc.id}
          >
            <p className="">{data.name}</p>
            {time ? <p>{time.toLocaleDateString()}</p> : ""}

            <p>{seconds}</p>
          </div>
        );
      })}
    </div>
  );
};
