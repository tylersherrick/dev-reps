function ExerciseButtons({
  completed,
  onNext,
  onSkip,
}) {
  return (
    <div className="button-row">
      <button
        disabled={!completed}
        onClick={onNext}
      >
        Next Exercise
      </button>

      <button onClick={onSkip}>
        Skip
      </button>
    </div>
  );
}

export default ExerciseButtons;