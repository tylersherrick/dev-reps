import { useEffect, useState } from "react";

function useTyping(target) {
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      setSeconds(
        Math.floor((Date.now() - startTime) / 1000)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  function handleTyping(value) {
    if (!startTime && value.length > 0) {
      setStartTime(Date.now());
    }

    setTyped(value);
  }

  function reset() {
    setTyped("");
    setStartTime(null);
    setSeconds(0);
  }

  const isComplete = typed === target;

  return {
    typed,
    setTyped: handleTyping,
    reset,
    seconds,
    isComplete,
  };
}

export default useTyping;