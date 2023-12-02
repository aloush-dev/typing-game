export default function WordScreen({
  words,
  currentlyTyping,
}: {
  words: string[];
  currentlyTyping: string;
}) {
  const colouredWord = (word: string, typedWord: string) => {
    return word.split("").map((letter, index) => {
      const typedLetter = typedWord[index];
      const isCorrect = letter === typedLetter;
      let textColor = "white";

      if (isCorrect && typedLetter) {
        textColor = "#21FA90";
      } else if (!isCorrect && typedLetter !== undefined) {
        textColor = "#F24333";
      }

      return (
        <span key={index} style={{ color: textColor }}>
          {letter}
        </span>
      );
    });
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto justify-center flex">
        <div className="flex flex-col items-center">
          <div className="text-white text-2xl md:text-4xl m-10">
            Remaining words : {words.length}
          </div>
          <div className="text-white text-8xl md:text-9xl my-20">
            {colouredWord(words[0], currentlyTyping)}
          </div>
        </div>
      </div>
    </>
  );
}
