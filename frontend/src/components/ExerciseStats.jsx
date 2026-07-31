function ExerciseStats({
  correctCharacters,
  totalCharacters,
  mistakes,
  accuracy,
  seconds,
  wpm,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <strong>Correct:</strong>{" "}
        {correctCharacters} / {totalCharacters}
      </div>

      <div>
        <strong>Mistakes:</strong>{" "}
        {mistakes}
      </div>

      <div>
        <strong>Accuracy:</strong>{" "}
        {accuracy}%
      </div>

      <div>
        <strong>Time:</strong>{" "}
        {seconds}s
      </div>

      <div>
        <strong>WPM:</strong>{" "}
        {wpm}
      </div>
    </div>
  );
}

export default ExerciseStats;