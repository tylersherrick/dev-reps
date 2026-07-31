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
    <section className="progress">
      <div>
        <h3>Exercise</h3>
        <p>
          {current} / {total}
        </p>
      </div>

      <div>
        <h3>Course</h3>
        <p>{exercisePercent}%</p>
      </div>

      <div>
        <h3>Characters</h3>
        <p>
          {typedCharacters} / {totalCharacters}
        </p>
      </div>
    </section>
  );
}

export default Progress;