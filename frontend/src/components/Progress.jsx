function Progress({
  current,
  total,
  typedCharacters,
  totalCharacters,
}) {
  const exercisePercent =
    total === 0
      ? 0
      : Math.round((current / total) * 100);

  return (
    <>
      <div className="progress-card">
        <h3>Exercise</h3>
        <p>
          {current} / {total}
        </p>
      </div>

      <div className="progress-card">
        <h3>Course</h3>
        <p>{exercisePercent}%</p>
      </div>

      <div className="progress-card">
        <h3>Characters</h3>
        <p>
          {typedCharacters} / {totalCharacters}
        </p>
      </div>
    </>
  );
}

export default Progress;