import { useEffect, useRef } from "react";
import Character from "./Character";

function ExerciseCode({ code, typed }) {
  const preRef = useRef(null);

  useEffect(() => {
    if (!preRef.current) return;

    const currentLine = typed.split("\n").length;
    const lineHeight = 24;

    preRef.current.scrollTo({
      top: Math.max(0, (currentLine - 4) * lineHeight),
      behavior: "smooth",
    });
  }, [typed]);

  return (
    <pre ref={preRef}>
      <code>
        {code.split("").map((character, index) => (
          <Character
            key={index}
            expected={character}
            typed={typed[index]}
          />
        ))}
      </code>
    </pre>
  );
}

export default ExerciseCode;