function ExerciseResults({
  paused,
  completed,
  correctCharacters,
  totalCharacters,
  mistakes,
  accuracy,
  seconds,
  wpm,
  onResume,
  onNext,
  onComplete,
}) {
  if (!paused) return null;

  const progress = Math.round(
    (correctCharacters / totalCharacters) * 100
  );

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>
          {completed
            ? "Exercise Complete!"
            : "Exercise Paused"}
        </h2>

        <div className="results-grid">
          <div>
            <strong>Time</strong>
            <p>{seconds}s</p>
          </div>

          <div>
            <strong>WPM</strong>
            <p>{wpm}</p>
          </div>

          <div>
            <strong>Accuracy</strong>
            <p>{accuracy}%</p>
          </div>

          <div>
            <strong>Correct</strong>
            <p>
              {correctCharacters} / {totalCharacters}
            </p>
          </div>

          <div>
            <strong>Remaining</strong>
            <p>
              {totalCharacters - correctCharacters}
            </p>
          </div>

          <div>
            <strong>Mistakes</strong>
            <p>{mistakes}</p>
          </div>

          <div>
            <strong>Progress</strong>
            <p>{progress}%</p>
          </div>
        </div>

        <div className="button-row">
          <button onClick={onResume}>
            Resume
          </button>

          <button
            disabled={!completed}
            onClick={() => {
              onComplete();
              onNext();
            }}
          >
            Next Exercise
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseResults;