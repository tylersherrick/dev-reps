import { useEffect, useState } from "react";

function Streak() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedData =
      JSON.parse(
        localStorage.getItem("devRepsProgress")
      );

    if (savedData) {
      setStreak(savedData.streak);
    }
  }, []);

  return (
    <div className="streak">
      <h3>Streak</h3>
      <p>🔥 {streak}</p>
    </div>
  );
}

export default Streak;