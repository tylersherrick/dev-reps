function Character({
  expected,
  typed,
}) {
  let className = "pending";

  if (typed !== undefined) {
    className =
      typed === expected
        ? "correct"
        : "incorrect";
  }

  if (expected === "\n") {
    return (
      <>
        <span className={className}> </span>
        <br />
      </>
    );
  }

  if (expected === " ") {
    return (
      <span className={className}>
        &nbsp;
      </span>
    );
  }

  return (
    <span className={className}>
      {expected}
    </span>
  );
}

export default Character;