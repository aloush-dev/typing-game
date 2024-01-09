import { Dispatch, SetStateAction } from "react";

const TypableScreen = ({
  typedText,
  setTypedText,
}: {
  typedText: string;
  setTypedText: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="h-full w-full absolute inset-0">
      <textarea
        autoFocus
        value={typedText}
        onChange={(e) => setTypedText(e.target.value.toUpperCase())}
        placeholder="Type here..."
        style={{
          width: "100%",
          height: "100vh",
          fontSize: "18px",
          opacity: 0,
        }}
      />
    </div>
  );
};

export default TypableScreen;
